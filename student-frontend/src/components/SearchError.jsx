import PropTypes from "prop-types";

SearchError.propTypes = {
  searchError: PropTypes.string,
};

function SearchError({ searchError }) {
  return <p className="text-danger text-center">{searchError}</p>;
}

export default SearchError;
