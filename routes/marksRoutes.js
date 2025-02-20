const express = require("express");
const router = express.Router();
const Marks = require("../models/marks");

// Add Marks
router.post("/", async (req, res) => {
  try {
    const marks = new Marks(req.body);
    await marks.save();
    res.status(201).json(marks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Marks
router.get("/", async (req, res) => {
  const marks = await Marks.find().populate("studentId", "name email age");
  res.json(marks);
});

// Update Marks (PUT)
router.put("/:id", async (req, res) => {
  try {
    const updatedMarks = await Marks.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedMarks) {
      return res.status(404).json({ message: "Marks not found" });
    }

    res.json(updatedMarks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Marks (DELETE)
router.delete("/:id", async (req, res) => {
  try {
    const deletedMarks = await Marks.findByIdAndDelete(req.params.id);
    
    if (!deletedMarks) {
      return res.status(404).json({ message: "Marks not found" });
    }

    res.json({ message: "Marks deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting marks" });
  }
});


module.exports = router;
