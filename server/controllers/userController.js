const User = require("../models/users");
const AuthHelper = require("../helpers/authhelper");
const ObjectId = require("mongoose").Types.ObjectId;
const Todo = require("../models/users");
class UserController {
	constructor() {}

	static create(req, res) {
		let password = AuthHelper.createHashPass(
			req.body.email + req.body.password
		);
		User.create({
			name: req.body.name,
			email: req.body.email,
			password: password
		})
			.then(result =>
				res.status(200).json({
					message: "success",
					data: result
				})
			)
			.catch(err =>
				res.status(400).json({
					message: err.message,
					data: err
				})
			);
	}

	static fbLogin(req, res) {
		//console.log("entered FB login", req.body);
		let { accessToken, userID } = req.body;
		AuthHelper.getRandomPassword()
			.then(randomPass => {
				AuthHelper.getFacebookCredential(accessToken)
					.then(result => {
						result = JSON.parse(result);
						User.findOne({ email: result.email })
							.then(userFound => {
								if (userFound) {
									res.status(200).json({
										message: "login success",
										token: AuthHelper.createToken({
											id: userFound._id.valueOf()
										})
									});
								} else {
									return User.create({
										email: result.email,
										name: result.name,
										fb_id: userID,
										password: AuthHelper.createHashPass(
											result.email + randomPass
										)
									});
								}
							})
							.then(newUser => {
								res.status(200).json({
									message: "New User created",
									password: randomPass,
									token: AuthHelper.createToken({ id: newUser._id.toString() })
								});
							})
							.catch(err => {
								res.status(400).json(err);
							});
					})
					.catch(err => {
						res.status(400).json(err);
					});
			})
			.catch(err => {
				res.status(400).json(err);
			});
	}

	static verifyToken(req, res) {
		let id = AuthHelper.decodeToken(req.body.token).id;
		User.findById(ObjectId(id))
			.then(userFound => {
				if (userFound) {
					res.status(200).json({
						message: "OK",
						data: {
							name: userFound.name
						}
					});
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

	static login(req, res) {
		User.findOne({ email: req.body.email })
			.exec()
			.then(user => {
				if (
					user &&
					AuthHelper.compareSync(
						req.body.email + req.body.password,
						user.password
					)
				) {
					let token = AuthHelper.createToken({
						id: user._id.toString()
					});
					res.status(200).json({
						message: "Login Success",
						token: token
					});
				} else {
					res.status(404).json({
						message: "Wrong Email or Password"
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
		User.findById(req.headers.userId)
			.populate("userTodos")
			.then(result => {
				res.status(200).json({
					message: "success",
					data: result
				});
			})
			.catch(err => {
				res.status(400).json({
					message: err.message,
					data: err
				});
			});
	}

	static deleteById(req, res) {
		User.findById(req.headers.userId)
			.then(userFound => {
				if (userFound) {
					return Todo.remove({ _id: { $in: userFound.userTodos } });
				} else {
					res.status(404).json({
						message: "User not found"
					});
				}
			})
			.then(response => {
				return User.deleteOne({ _id: ObjectId(req.headers.userId) });
			})
			.then(result => {
				res.status(200).json({
					message: "success",
					data: result
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
		let password = AuthHelper.createHashPass(
			req.headers.email + req.body.password
		);
		User.findOneAndUpdate({ _id: ObjectId(req.headers.userId) }, { password })
			.exec()
			.then(result => {
				res.status(200).json({
					message: "update success",
					data: result
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

module.exports = UserController;
