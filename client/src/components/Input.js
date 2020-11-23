import React from "react";

const Input = ({ children }) => {
  return (
    <div className="form-group">
      <label htmlFor="formGroupExampleInput">{children}</label>
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
      />
    </div>
  );
}
export default Input;