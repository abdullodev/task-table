import PropTypes from "prop-types";
const Button = ({ color, text, onClick, textColor }) => {
  return (
    <button
      className="btn1"
      onClick={onClick}
      style={{ backgroundColor: color, color: textColor, fontWeight: 700 }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "darkgreen",
};
Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
