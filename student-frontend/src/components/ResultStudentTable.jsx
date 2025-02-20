import PropTypes from "prop-types";

ResultStudentTable.propTypes = {
  searchedStudent: PropTypes.any,
  handleDelete: PropTypes.func,
};

function ResultStudentTable({ searchedStudent, handleDelete }) {
  return (
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
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(searchedStudent._id)}
              >
                🗑 Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ResultStudentTable;
