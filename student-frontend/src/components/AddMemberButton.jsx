import PropTypes from "prop-types";

AddMemberButton.propTypes = {
  setShowForm: PropTypes.func,
};

function AddMemberButton({ setShowForm }) {
  return (
    <div className="col-md-4 text-end">
      <button className="btn btn-primary" onClick={() => setShowForm(true)}>
        ➕ Add Member
      </button>
    </div>
  );
}

export default AddMemberButton;
