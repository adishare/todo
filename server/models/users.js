const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		userTodos: [{ type: Schema.Types.ObjectId, ref: "Todo" }],
		password: { type: String, required: true },
		google_id: String
	},
	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at"
		}
	}
);

module.exports = mongoose.model("User", userSchema);
