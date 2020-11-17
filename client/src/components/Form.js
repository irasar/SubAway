import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Form({ handleInputChange, startDate, setStartDate, dueDate, setDueDate }) {
  return (
    <>
      <input onChange={handleInputChange} className="form-control form-control" type="text" placeholder="Title" name="title" />
      <select name="type" onChange={handleInputChange} className="form-control">
        <option defaultValue value="Streaming">Streaming</option>
        <option value="Boxes">Boxes</option>
        <option value="Clothing">Clothing</option>
        <option value="Classes">Classes</option>
        <option value="Software">Software</option>
        <option value="Food">Food</option>
        <option value="other">Other</option>
      </select>
      <input onChange={handleInputChange} className="form-control form-control-sm" type="text" placeholder="Amount" name="amount" />
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      <DatePicker selected={dueDate} onChange={date => setDueDate(date)} />

    </>
  );
};

export default Form;