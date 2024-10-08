const { model, Schema } = require("mongoose");

const todoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

module.exports = model("Todo", todoSchema);
