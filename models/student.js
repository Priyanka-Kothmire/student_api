const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  age: Number,
});

module.exports = mongoose.model("Student", StudentSchema);
