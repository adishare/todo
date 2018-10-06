const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const daKey = process.env.secret;
const request = require("request-promise");

class authHelpers {
	constructor() {}

	static createToken(tokenInfoObj) {
		return jwt.sign(tokenInfoObj, daKey, {
			expiresIn: 86400 // expires in 24 hours
		});
	}

	static decodeToken(token) {
		return jwt.verify(token, daKey);
	}

	static createHashPass(password) {
		return bcrypt.hashSync(password);
	}

	static compareSync(password, hashedPassword) {
		return bcrypt.compareSync(password, hashedPassword);
	}

	static getRoleFromToken(token) {
		return authHelpers.decodeToken(token).role;
	}

	static getIdFromToken(token) {
		return authHelpers.decodeToken(token).id;
	}

	static isAdmin(token) {
		return authHelpers.getRoleFromToken(token) === "admin" ? true : false;
	}

	static getFacebookCredential(accessToken){
		return request.get(`https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`);
	}

	static getRandomPassword(){
		return request.get("https://www.passwordrandom.com/query?command=password");
	}
}

module.exports = authHelpers;
