const mongoose = require("mongoose");

const MarksSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  subject: String,
  score: Number,
});

module.exports = mongoose.model("Marks", MarksSchema);
