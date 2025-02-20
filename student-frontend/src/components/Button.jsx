import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onclick: PropTypes.func,
};

function Button({ children, className, onclick }) {
  return (
    <button className={className} onClick={onclick}>
      {children}
    </button>
  );
}

export default Button;
