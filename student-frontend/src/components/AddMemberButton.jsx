import Button from "./Button";
import PropTypes from "prop-types";

AddMemberButton.propTypes = {
  setShowForm: PropTypes.func,
};

function AddMemberButton({ setShowForm }) {
  return (
    <div className="col-md-4 text-end">
      <Button className="btn btn-primary" onClick={() => setShowForm(true)}>
        ➕ Add Member
      </Button>
    </div>
  );
}

export default AddMemberButton;
