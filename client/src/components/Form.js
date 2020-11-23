import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Form({ handleInputChange, startDate, setStartDate, dueDate, setDueDate }) {
  return (
    <>
      <label htmlFor="subName">Name</label>
      <input id="subName" onChange={handleInputChange} className="form-control form-control" type="text" placeholder="Title" name="title" />
      <label htmlFor="subType">Type of Subscription</label>
      <select id="subType" name="type" onChange={handleInputChange} className="form-control">
        <option defaultValue value="Streaming">Streaming</option>
        <option value="Boxes">Boxes</option>
        <option value="Clothing">Clothing</option>
        <option value="Classes">Classes</option>
        <option value="Software">Software</option>
        <option value="Food">Food</option>
        <option value="other">Other</option>
      </select>
      <label htmlFor="subPrice">Price(USD)</label>
      <input id="subPrice" onChange={handleInputChange} className="form-control form-control" type="text" placeholder="Amount" name="amount" />
      <label htmlFor="startDate">Starting Subscription Date</label>
      <DatePicker id="startDate" selected={startDate} onChange={date => setStartDate(date)} />
      <label htmlFor="dueDate">Subscription Due Date</label>
      <DatePicker id="dueDate" selected={dueDate} onChange={date => setDueDate(date)} />
    </>
  );
};
export default Form;