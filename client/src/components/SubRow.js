import React from "react";
import moment from "moment"
import SubTitle from "./SubTitle"

function SubRow({ sub, children }) {
  const fontRed = {
    color: "red"
  }
  const fontYellow = {
    color: "#F2E200"
  }
  const fontGreen = {
    color: "#1BC700"
  }
  const border = {
    borderTopStyle: "solid",
    borderLeftStyle: "solid",
    borderWidth: "3px",
    borderColor: "#DCDCDC"
  }
  const daysLeft = moment(sub.dueDate).diff(moment(), "days")
  // If there's less than 3 days, show red warning sign
  if (daysLeft < 3) {
    return <div style={border} key={sub._id} className="row rounded-lg bg-white py-1">
      <SubTitle fontColor={fontRed} title={sub.title} />
      {children}
    </div>
  }
  // If there's less than a week less, show yellow exclamation mark
  else if (daysLeft < 8) {
    return <div style={border} key={sub._id} className="row rounded-lg bg-white py-1">
      <SubTitle fontColor={fontYellow} title={sub.title} />
      {children}
    </div>
  }
  // Show green sign for everything else
  else return <div style={border} key={sub._id} className="row rounded-lg bg-white py-1">
    <SubTitle fontColor={fontGreen} title={sub.title} />
    {children}
  </div>
}

export default SubRow;
