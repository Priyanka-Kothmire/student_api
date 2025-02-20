import PropTypes from "prop-types";

StudentData.propTypes = {
  student: PropTypes.array,
  page: PropTypes.number,
  limit: PropTypes.number,
  index: PropTypes.number,
  deleteStudent: PropTypes.func,
};

function StudentData({ student, page, limit, index, deleteStudent }) {
  return (
    <tr key={student._id}>
      <td>{(page - 1) * limit + (index + 1)}</td>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.age}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteStudent(student._id)}
        >
          🗑 Delete
        </button>
      </td>
    </tr>
  );
}

export default StudentData;
