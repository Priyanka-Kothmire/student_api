import express from "express";
import {
  deleteStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  createStudent,
} from "../controller/studentController.js";

const studentRouter = express.Router();

studentRouter
  .route("/")
  .get(getAllStudents)
  .post(createStudent)
  .put(updateStudent)
  .delete(deleteStudent);

studentRouter.route("/:id").get(getStudent);

export default studentRouter;
