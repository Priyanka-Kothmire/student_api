import SearchSection from "./SearchSection";
import AddMemberButton from "./AddMemberButton";

import PropTypes from "prop-types";

StudentSearchHeader.propTypes = {
  searchId: PropTypes.any,
  setSearchId: PropTypes.func,
  search: PropTypes.func,
  resetSearch: PropTypes.func,
  setShowForm: PropTypes.func,
};

function StudentSearchHeader({
  searchId,
  setSearchId,
  search,
  resetSearch,
  setShowForm,
}) {
  return (
    <div className="card shadow-sm p-3 mb-4">
      <div className="row align-items-center">
        <SearchSection
          searchId={searchId}
          setSearchId={setSearchId}
          search={search}
          resetSearch={resetSearch}
        />

        <AddMemberButton setShowForm={setShowForm} />
      </div>
    </div>
  );
}

export default StudentSearchHeader;
