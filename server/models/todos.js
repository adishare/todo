const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TodoSchema = new Schema(
	{
		title: { type: String, required: true },
		deadline: { type: Date, required: true, default: new Date()},
		priority: { type: String, enum: ["None", "Low", "Medium", "High"], default:"None" },
		notes: { type: String, required: true }
	},
	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at"
		}
	}
);

TodoSchema.pre("remove", function(next) {
	let todo = this;
	todo
		.model("User")
		.update(
			{ userTodos: todo._id },
			{ $pull: { userTodos: 1 } },
			{ multi: true },
			next
		);
});

module.exports = mongoose.model("Todo", TodoSchema);
