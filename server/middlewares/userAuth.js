const User = require("../models/users");
const AuthHelper = require("../helpers/authhelper");
const ObjectId = require("mongoose").Types.ObjectId;

class userAuthMiddleware {
	constructor() {}

	static checkToken(req, res, next) {
		//console.log(req.headers.token);
		if (!req.headers.token) {
			res.status(401).json({
				message: "Unauthorized Access, please signin"
			});
		} else {
			next();
		}
	}

	static checkifTokenValid(req, res, next) {
		let id;
		try {
			id = AuthHelper.decodeToken(req.headers.token).id;
			User.findById(ObjectId(id))
				.then(userFound => {
					if (userFound) {
						console.log("user found!");
						req.headers.userId = userFound._id;
						next();
					} else {
						res.status(204).json({
							message: "NK"
						});
					}
				})
				.catch(err => {
					res.status(400).json({
						message: err
					});
				});
		} catch (err) {
			res.status(400).json({
				message: "Invalid Signature"
			});
		}
	}

	static addEmailToHeader(req, res, next) {
		let id = AuthHelper.decodeToken(req.headers.token).id;
		User.findById(ObjectId(id))
			.then(userFound => {
				if (userFound) {
					console.log("user found!");
					req.headers.email = userFound.email;
					req.headers.userId = userFound._id;
					next();
				} else {
					res.status(204).json({
						message: "NK"
					});
				}
			})
			.catch(err => {
				res.status(400).json({
					message: err
				});
			});
	}

	static checkIfTodoOwnedByUser(req, res, next) {
		let id = AuthHelper.decodeToken(req.headers.token).id;
		User.findById(ObjectId(id))
			.then(userFound => {
				if (userFound) {
					// console.log(req.params.todoId);
					// console.log(userFound.userTodos[0].valueOf() == req.params.todoId);
					if(userFound.userTodos.some(x => x.valueOf() == req.params.todoId)){
						next();
					}
					else{
						res.status(401).json({
							message:"Not Authorized"
						});
					}
					
				} else {
					res.status(204).json({
						message: "NK"
					});
				}
			})
			.catch(err => {
				res.status(400).json({
					message: err
				});
			});
	}
}

module.exports = userAuthMiddleware;
