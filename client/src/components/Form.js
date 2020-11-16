import React from "react";

function Form({ handleInputChange, handleFormSubmit }) {
  return (
    <>
      <input onChange={handleInputChange} className="form-control form-control" type="text" placeholder="title" name="title" />
      <select name="type" onChange={handleInputChange} className="form-control">
        <option defaultValue value="Streaming">Streaming</option>
        <option value="Boxes">Boxes</option>
        <option value="Clothing">Clothing</option>
        <option value="Classes">Classes</option>
        <option value="Software">Software</option>
        <option value="Food">Food</option>
        <option value="other">other</option>
      </select>
      <input onChange={handleInputChange} className="form-control form-control-sm" type="text" placeholder="amount" name="amount" />
      <button onClick={handleFormSubmit} type="button" className="btn btn-success">Submit</button>
    </>
  );
};

export default Form;