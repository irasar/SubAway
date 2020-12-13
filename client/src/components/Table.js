import React from 'react';
import { MDBBtn } from 'mdbreact';
import moment from "moment";
import Modal from "./Modal";
import Form from "../components/Form";
import SubRow from "./SubRow";

function Table({ subs, handleFormSubmit, handleInputChange, startDate,
    setStartDate, dueDate, setDueDate, deleteSub }) {
    const border = {
        borderTopStyle: "solid",
        borderLeftStyle: "solid",
        borderWidth: "3px",
        borderColor: "#DCDCDC"
    }
    return (
        <div>
            <div style={border} className="row rounded-lg py-2 bg-white">
                <div className="col-2">
                    <Modal padding="p-1" handleFormSubmit={handleFormSubmit} title="New Subscription" buttonName={<i className="fas fa-plus p-2"></i>}>
                        <Form handleInputChange={handleInputChange}
                            startDate={startDate}
                            setStartDate={setStartDate}
                            dueDate={dueDate}
                            setDueDate={setDueDate} />
                    </Modal>
                </div>
                <div className="col-6 offset-1">
                    <h1 className="my-subs">Your Subscriptions</h1>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-2 offset-1 col-md-3 headers"><p>Name</p></div>
                <div className="col-2 col-md-1 ml-md-3 headers"><p>Type</p></div>
                <div className="col-2 offset-1 ml-3 ml-md-4 pl-md-3 pr-0 price headers"><p>Price (USD)</p></div>
                <div className="col-2 pl-2 start-date headers"><p>Start Date</p></div>
                <div className="col-2 due-date ml-0 pl-md-0 headers"><p>Due Date</p></div>
            </div>
            {subs.map(sub => (
                <SubRow key={sub._id} sub={sub}>
                    <div className="col-2 col-md-2 pt-1 sub-content my-auto"><p className="table-content">{sub.type}</p></div>
                    <div className="col-2 col-md-1 pt-1 pr-0 text-center sub-content my-auto"><p className="table-content">${sub.amount}</p></div>
                    <div className="col-2 pt-1 sub-content pl-1 pl-md-3 pr-md-0 text-right my-auto"><p className="table-content">{sub.startDate}</p></div>
                    <div className="col-2 pt-1 sub-content pr-0 text-center my-auto"><p className="table-content">{moment(sub.dueDate).fromNow()}</p></div>
                    <div className="col-1 px-0 pt-1">
                        <MDBBtn onClick={() => deleteSub(sub._id)} outline rounded size="sm" color="white" className="px-2 my-0 sub-btn">
                            <i className="fas fa-trash-alt sub-icons"></i>
                        </MDBBtn>
                    </div>
                </SubRow>
            ))}
        </div>
    );
}
export default Table;