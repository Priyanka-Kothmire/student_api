import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

function Button({ children, className }) {
  return <button className={className}>{children}</button>;
}

export default Button;
