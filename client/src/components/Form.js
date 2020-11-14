import React from "react";

function Form ({ handleInputChange, handleFormSubmit }) {
  return (
    <>
      <input onChange={handleInputChange} className="form-control form-control" type="text" placeholder="title" name="title"/>
      <input onChange={handleInputChange} className="form-control" type="text" placeholder="type" name="type"/>
      <input onChange={handleInputChange} className="form-control form-control-sm" type="text" placeholder="amount" name="amount"/>
      <button onClick={handleFormSubmit} type="button" className="btn btn-success">Submit</button>
    </>
  );
};

export default Form;