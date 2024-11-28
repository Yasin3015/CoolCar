import React, { useState } from "react";
import "./Input.css";

const Input = ({
  icon,
  label,
  placeholder,
  value,
  type,
  isSubmited,
  onChange,
  error
}) => {
  const handleChange = (e) => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <>
      <div className="input-field-container">
        <div className="label-icon">
          {icon && <span className="icon">{icon}</span>}
          <span className="label">{label}</span>
        </div>
        <input
          type={type || "text"}
          className="input-field"
          placeholder={placeholder}
          value={isSubmited ? "" : value}
          onChange={handleChange}
        />
      </div>
      {error && <p className="error-text">{error}</p>}
    </>
  );
};

export default Input;
