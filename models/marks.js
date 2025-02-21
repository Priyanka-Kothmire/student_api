import mongoose from "mongoose";

const MarksSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  subject: String,
  score: Number,
});

export default MarksSchema;
