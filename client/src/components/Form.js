import React from "react";

function Form ({ handleInputChange }) {
  return (
    <>
      <input onChange={handleInputChange} class="form-control form-control" type="text" placeholder="title" name="title"/>
      <input onChange={handleInputChange} class="form-control" type="text" placeholder="type" name="type"/>
      <input onChange={handleInputChange} class="form-control form-control-sm" type="text" placeholder="amount" name="amount"/>
    </>
  );
};

export default Form;