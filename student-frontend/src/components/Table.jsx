import StudentsTable from "./StudentsTable";
import PropTypes from "prop-types";

Table.propTypes = {
  students: PropTypes.array,
  page: PropTypes.number,
  limit: PropTypes.number,
  handleDelete: PropTypes.func,
};

function Table({ students, page, limit, handleDelete }) {
  return (
    <div className="card shadow-sm p-3">
      <h2 className="text-center">📜 Student List</h2>
      <StudentsTable
        students={students}
        page={page}
        limit={limit}
        deleteStudent={handleDelete}
      />
    </div>
  );
}

export default Table;
