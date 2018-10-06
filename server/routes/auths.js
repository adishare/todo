let express = require("express");
let router = express.Router();
let userController = require("../controllers/userController");

//Norma
router
	.route("/")
	.get(function(req, res) {
		res.send("This is auth");
	});

router.post("/signup", userController.create);
router.post("/verifytoken", userController.verifyToken);
router.post("/login", userController.login);

module.exports = router;
