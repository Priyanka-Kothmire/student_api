import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  age: Number,
});

export default StudentSchema;
