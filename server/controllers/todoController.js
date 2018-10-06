const Todo = require("../models/todos");
const User = require("../models/users");
const ObjectId = require("mongoose").Types.ObjectId;

class TodoController {
	constructor() {}

	static create(req, res) {
		User.findById(req.headers.userId)
			.exec()
			.then(userFound => {
				if (userFound) {
					Todo.create({
						title: req.body.title,
						deadline: req.body.deadline,
						priority: req.body.priority,
						notes: req.body.notes
					})
						.then(todoCreated => {
							userFound.userTodos.push(todoCreated._id);
							userFound.save();
							res.status(200).json({
								message: "todo successfully created",
								data: todoCreated
							});
						})
						.catch(err => {
							res.status(400).json({
								message: err.message,
								data: err
							});
						});
				} else {
					res.status(404).json({
						message: "No User Found"
					});
				}
			})
			.catch(err => {
				res.status(400).json({
					message: err.message,
					data: err
				});
			});
	}

	static getAllTaskByUserId(req, res) {
		User.findById(ObjectId(req.headers.userId))
			.populate("userTodos")
			.then(userFound => {
				if (userFound && userFound.userTodos.length) {
					res.status(200).json({
						message: "Todo Found",
						data: userFound.userTodos
					});
				} else {
					res.status(404).json({
						message: "Todo empty"
					});
				}
			})
			.catch(err => {
				res.status(400).json({
					message: err.message,
					data: err
				});
			});
	}

	static getOneById(req, res) {
		Todo.findById(ObjectId(req.params.todoId))
			.exec()
			.then(todo => {
				if (todo) {
					res.status(200).json({
						message: "Todo found",
						data: todo
					});
				} else {
					res.status(404).json({
						message: "id not found"
					});
				}
			})
			.catch(err => {
				res.status(400).json({
					message: err.message,
					data: err
				});
			});
	}

	//pasang middleware buat check apakah object id ini ada di dalam referensi user
	static deleteById(req, res) {
		//delete referensi di user dulu
		User.findByIdAndUpdate(req.headers.userId, {
			$pull: { userTodos: { $in: ObjectId(req.params.todoId) } }
		})
			.exec()
			.then(deleteResponse => {
				res.json(deleteResponse);
				///return Todo.findByIdAndRemove(ObjectId(req.params.todoId));
			})
			.then(response => {
				res.status(200).json({
					message: "Todo Deleted"
				});
			})
			.catch(err => {
				res.status(400).json({
					message: err.message,
					data: err
				});
			});
	}

	static updatebyId(req, res) {
		// console.log(req.body);
		// console.log(req.params);
		let changes = {
			title: req.body.title,
			deadline: new Date(req.body.deadline) || undefined,
			priority: req.body.priority,
			notes: req.body.notes
		};

		for(let key in changes){
			if(!changes[key] || !changes[key].length) {
				delete changes[key];
			}
		}

		// console.log("Changes, to be submitted", changes);
		Todo.findByIdAndUpdate(
			{ _id: ObjectId(req.params.todoId) },
			changes,
			{ runValidators: true }
		)
			.then(response => {
				res.status(200).json({
					message: "To do Successfully Updated"
				});
			})
			.catch(err => {
				res.status(400).json({
					message: err.message,
					data: err
				});
			});
	}
}

module.exports = TodoController;
