const request = require("request-promise");
class quotesController {
	constructor() {}

	static getManagementQuote(req, res) {
		request
			.get("https://quotes.rest/qod?category=management")
			.then(response => {
				res.send(response);
			})
			.catch(err => {
				res.status(400).json({
					message: err.message,
					data: err
				});
			});
	}
}
module.exports = quotesController;
