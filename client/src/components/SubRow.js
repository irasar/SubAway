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
  if (daysLeft < 3) {
    return <div style={border} key={sub._id} className="row rounded-lg bg-white py-1">
      <SubTitle fontColor={fontRed} title={sub.title} />
      {children}
    </div>
  }
  else if (daysLeft < 8) {
    return <div style={border} key={sub._id} className="row rounded-lg bg-white py-1">
      <SubTitle fontColor={fontYellow} title={sub.title} />
      {children}
    </div>
  }
  else return <div style={border} key={sub._id} className="row rounded-lg bg-white py-1">
    <SubTitle fontColor={fontGreen} title={sub.title} />
    {children}
  </div>
}

export default SubRow;
