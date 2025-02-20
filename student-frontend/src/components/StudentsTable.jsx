import PropTypes from "prop-types";
import StudentData from "./StudentData";

StudentsTable.propTypes = {
  students: PropTypes.array,
  page: PropTypes.number,
  limit: PropTypes.number,
  deleteStudent: PropTypes.func,
};

function StudentsTable({ students, page, limit, deleteStudent }) {
  return (
    <table className="table table-striped text-center">
      <thead className="table-primary">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <StudentData
            student={student}
            key={index}
            index={index}
            page={page}
            limit={limit}
            deleteStudent={deleteStudent}
          />
        ))}
      </tbody>
    </table>
  );
}

export default StudentsTable;
