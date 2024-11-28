import React, { useState } from "react";
import "./Textarea.css";

const Textarea = ({ error, placeholder, value, icon, label, onChange }) => {
  const handleChange = (e) => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <>
      <div className="textarea-field-container">
        <div className="label-icon">
          {icon && <span className="icon">{icon}</span>}
          <span className="label">{label}</span>
        </div>
        <textarea
          className="textarea-field"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
      {error && <p className="error-text area-txt-error">{error}</p>}
    </>
  );
};

export default Textarea;
