import React from "react";
import PropTypes from "prop-types";
import './Button.css'

const Button = ({ className, title, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string, 
  title: PropTypes.string.isRequired, 
  onClick: PropTypes.func, 
};

Button.defaultProps = {
  className: "",
  onClick: () => {}, 
};

export default Button;
