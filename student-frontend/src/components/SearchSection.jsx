import Button from "./Button";
import PropTypes from "prop-types";

SearchSection.propTypes = {
  searchId: PropTypes.any,
  setSearchId: PropTypes.func,
  search: PropTypes.func,
  resetSearch: PropTypes.func,
};

function SearchSection({ searchId, setSearchId, search, resetSearch }) {
  return (
    <div className="col-md-8 d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Enter Student ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <Button className="btn btn-info me-2" onclick={search}>
        🔍 Search
      </Button>
      <Button className="btn btn-secondary" onclick={resetSearch}>
        ❌ Reset
      </Button>
    </div>
  );
}

export default SearchSection;
