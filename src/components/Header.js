import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showTask }) => {
  return (
    <header className="header">
      <h2 style={{ color: "white" }}>{title}</h2>
      <Button
        onClick={onAdd}
        color={showTask ? "red" : "white"}
        text={showTask ? "Close" : "Add"}
        textColor={showTask ? "white" : "#050357"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Table",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
