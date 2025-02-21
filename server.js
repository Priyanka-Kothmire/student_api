import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import marksRouter from "./routes/marksRoutes.js";
import studentRouter from "./routes/studentRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/students", studentRouter);
app.use("/marks", marksRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
