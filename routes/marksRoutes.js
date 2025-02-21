import express from "express";
import {
  addMarks,
  deleteMarks,
  getAllMarks,
  updateMarks,
} from "../controller/marksController.js";

const marksRouter = express.Router();

marksRouter.route("/").get(getAllMarks).post(addMarks);

marksRouter.route("/:id").put(updateMarks).delete(deleteMarks);

export default marksRouter;
