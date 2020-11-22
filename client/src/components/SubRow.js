import React from "react";
import moment from "moment"

function SubRow({ sub, children }) {

  const daysLeft = moment(sub.dueDate).diff(moment(), "days")
  if (daysLeft < 3) {
    return <div key={sub._id} className="row mb-1 bg-danger">{children}</div>
  }
  else if (daysLeft < 8) {
    return <div key={sub._id} id="subs" className="row mb-1 bg-warning">{children}</div>
  }
  else return <div key={sub._id} id="subs" className="row mb-1 bg-success">{children}</div>
}

export default SubRow;
