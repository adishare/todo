const express = require("express");
const router = express.Router();

const userRoute = require("./users");
const authRoute = require("./auths");
router.use(
	"/api/me",
	userRoute
);
router.use("/api/auths", authRoute);

/* GET home page. */
router.get("/api", function(req, res) {
	res.status(200).json({
		message:"This API Works!"
	});
});

router.get("/", function(req, res) {
	res.redirect("/api");
});

module.exports = router;
