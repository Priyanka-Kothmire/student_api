import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import "bootstrap/dist/css/bootstrap.min.css";
import SearchError from "./SearchError";
import Pagination from "./Pagination";
import Table from "./Table";
import ResultStudentTable from "./ResultStudentTable";
import StudentSearchHeader from "./StudentSearchHeader";

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
      const res = await axios.get(
        `http://localhost:5000/students?page=${page}&limit=${limit}`
      );
      console.log(res);
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
      const res = await axios.get(
        `http://localhost:5000/students/${searchId.trim()}`
      );

      setSearchedStudent(res.data);
      setSearchError("");
    } catch (error) {
      setSearchError("Student not found or invalid ID.");
      setSearchedStudent(null);
      console.log(error);
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
          Swal.fire("Error!", "Failed to delete student.", error);
        }
      }
    });
  };

  console.log(showForm);

  return (
    <div className="container mt-4">
      {/* Search & Add Member Section */}
      <StudentSearchHeader
        searchId={searchId}
        setSearchId={setSearchId}
        search={handleSearch}
        resetSearch={handleResetSearch}
        setShowForm={setShowForm}
      />

      {/* Search Results */}
      {searchError && <SearchError searchError={searchError} />}

      {searchedStudent && (
        <>
          <ResultStudentTable
            searchedStudent={searchedStudent}
            handleDelete={handleDelete}
          />
        </>
      )}

      {/* Student List */}
      <Table
        students={students}
        page={page}
        limit={limit}
        handleDelete={handleDelete}
      />

      {/* Pagination Controls */}
      <Pagination page={page} setPage={setPage} limit={limit} total={total} />
    </div>
  );
};

export default StudentList;
