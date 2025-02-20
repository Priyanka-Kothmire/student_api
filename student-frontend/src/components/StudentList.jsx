import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchId, setSearchId] = useState("");
  const [searchedStudent, setSearchedStudent] = useState(null);
  const [searchError, setSearchError] = useState("");
  const [showForm, setShowForm] = useState(false);

  const limit = 5;

  useEffect(() => {
    fetchStudents();
  }, [page]);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/students?page=${page}&limit=${limit}`);
      setStudents(res.data.students);
      setTotal(res.data.total);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleSearch = async () => {
    if (!searchId.trim()) {
      setSearchError("Please enter a valid Student ID.");
      return;
    }
    try {
      const res = await axios.get(`http://localhost:5000/students/${searchId.trim()}`);
      setSearchedStudent(res.data);
      setSearchError("");
    } catch (error) {
      setSearchError("Student not found or invalid ID.");
      setSearchedStudent(null);
    }
  };

  const handleResetSearch = () => {
    setSearchId("");
    setSearchedStudent(null);
    setSearchError("");
    fetchStudents();
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/students/${id}`);
          setStudents(students.filter((student) => student._id !== id));
          Swal.fire("Deleted!", "Student has been removed.", "success");
        } catch (error) {
          Swal.fire("Error!", "Failed to delete student.", "error");
        }
      }
    });
  };

  return (
    <div className="container mt-4">
      {/* Search & Add Member Section */}
      <div className="card shadow-sm p-3 mb-4">
        <div className="row align-items-center">
          <div className="col-md-8 d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Enter Student ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
            <button className="btn btn-info me-2" onClick={handleSearch}>🔍 Search</button>
            <button className="btn btn-secondary" onClick={handleResetSearch}>❌ Reset</button>
          </div>
          <div className="col-md-4 text-end">
            <button className="btn btn-primary" onClick={() => setShowForm(true)}>➕ Add Member</button>
          </div>
        </div>
      </div>

      {/* Search Results */}
      {searchError && <p className="text-danger text-center">{searchError}</p>}
      {searchedStudent && (
        <div className="card shadow-sm p-3 mb-4">
          <h4 className="text-center">🔍 Search Result</h4>
          <table className="table table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{searchedStudent._id}</td>
                <td>{searchedStudent.name}</td>
                <td>{searchedStudent.email}</td>
                <td>{searchedStudent.age}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(searchedStudent._id)}>🗑 Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Student List */}
      <div className="card shadow-sm p-3">
        <h2 className="text-center">📜 Student List</h2>
        <table className="table table-striped text-center">
          <thead className="table-primary">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student._id}>
                <td>{(page - 1) * limit + (index + 1)}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(student._id)}>🗑 Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-outline-secondary"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          ⬅ Previous
        </button>
        <span className="align-self-center fw-bold">Page {page}</span>
        <button
          className="btn btn-outline-secondary"
          onClick={() => setPage(page + 1)}
          disabled={page * limit >= total}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default StudentList;
