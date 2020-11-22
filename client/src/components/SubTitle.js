import React from "react";

function SubTitle({ title, fontColor }) {
    if (fontColor.color === "#1BC700")
        return (
            <>
                <div className="col-1 my-auto pt-1">
                    <i style={fontColor} className="far fa-calendar-check icons"></i>
                </div>
                <div className="col-2 my-auto col-md-3 pt-1 sub-content">
                    <p>{title}</p>
                </div>
            </>
        )

    else if (fontColor.color === "#F2E200")
        return (
            <>
                <div className="col-1 pl-3 pl-md-4 my-auto pt-1">
                <i style={fontColor} class="fas fa-exclamation icons"></i>
                </div>
                <div className="col-2 my-auto col-md-3 pt-1 sub-content">
                    <p>{title}</p>
                </div>
            </>
        )

    else return (
        <>
            <div className="col-1 my-auto pt-1">
                <i style={fontColor} className="fas fa-exclamation-triangle icons"></i>
            </div>
            <div className="col-2 my-auto col-md-3 pt-1 sub-content">
                <p>{title}</p>
            </div>
        </>
    )
}

export default SubTitle;