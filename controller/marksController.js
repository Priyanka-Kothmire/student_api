import MarksSchema from "./../models/marks.js";

const addMarks = async (req, res) => {
  try {
    const marks = new MarksSchema(req.body);
    await marks.save();
    res.status(201).json(marks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Marks
const getAllMarks = async (req, res) => {
  const marks = await MarksSchema.find().populate(
    "studentId",
    "name email age"
  );
  res.json(marks);
};

// Update Marks (PUT)
const updateMarks = async (req, res) => {
  try {
    const updatedMarks = await MarksSchema.findByIdAndUpdate(
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
};

// Delete Marks (DELETE)
const deleteMarks = async (req, res) => {
  try {
    const deletedMarks = await MarksSchema.findByIdAndDelete(req.params.id);

    if (!deletedMarks) {
      return res.status(404).json({ message: "Marks not found" });
    }

    res.json({ message: "Marks deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting marks" });
  }
};

export { getAllMarks, addMarks, updateMarks, deleteMarks };
