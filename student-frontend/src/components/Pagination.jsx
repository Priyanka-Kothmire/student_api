import Button from "./Button";
import PropTypes from "prop-types";

Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  limit: PropTypes.number,
  total: PropTypes.number,
};

function Pagination({ page, setPage, limit, total }) {
  return (
    <div className="d-flex justify-content-between mt-3">
      <Button
        className="btn btn-outline-secondary"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        ⬅ Previous
      </Button>
      <span className="align-self-center fw-bold">Page {page}</span>
      <Button
        className="btn btn-outline-secondary"
        onClick={() => setPage(page + 1)}
        disabled={page * limit >= total}
      >
        Next ➡
      </Button>
    </div>
  );
}

export default Pagination;
