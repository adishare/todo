const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const quotesController = require("../controllers/quotesController");
const authMiddleware = require("../middlewares/userAuth");
const todoRoute = require("./todos");

router.use("/todos", todoRoute);
router.use("/", authMiddleware.checkToken, authMiddleware.checkifTokenValid);
/* GET home page. */
router
	.route("/")
	.get(userController.getOneById) //user dashboard
	.delete(userController.deleteById) //delete user's own account
	.patch(authMiddleware.addEmailToHeader, userController.updatebyId); //update changes

router.get("/qod", quotesController.getManagementQuote);

module.exports = router;
