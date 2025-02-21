import StudentSchema from "./../models/student.js";

const createStudent = async (req, res) => {
  try {
    const student = new StudentSchema(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: "Error adding student" });
  }
};

//  Get All Students (with pagination)
const getAllStudents = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  try {
    const students = await StudentSchema.find()
      .skip((page - 1) * limit)
      .limit(limit);
    const total = await StudentSchema.countDocuments();

    res.json({ students, total });
  } catch (error) {
    res.status(500).json({ message: "Error fetching students" });
  }
};

const getStudent = async (req, res) => {
  try {
    const student = await StudentSchema.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (error) {
    console.error("Error fetching student:", error);
    res.status(400).json({ message: "Invalid Student ID" });
  }
};

// Update Student (PUT)
const updateStudent = async (req, res) => {
  try {
    const student = await StudentSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student updated successfully", student });
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ message: "Error updating student" });
  }
};

// 📌 Delete Student
const deleteStudent = async (req, res) => {
  try {
    const student = await StudentSchema.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting student" });
  }
};

export {
  getStudent,
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};
