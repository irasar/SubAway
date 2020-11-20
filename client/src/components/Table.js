import React from 'react';
import { MDBBtn } from 'mdbreact';
import moment from "moment";
import Modal from "./Modal";
import Form from "../components/Form";

function Table ({ subs, handleFormSubmit, handleInputChange, startDate,
    setStartDate, dueDate, setDueDate, deleteSub }) {

    function showModal(id) {
        console.log("you clicked " + id);
        return (
            <Modal handleFormSubmit={handleFormSubmit} title="New Subscription" buttonName="+">
                <Form handleInputChange={handleInputChange}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    dueDate={dueDate}
                    setDueDate={setDueDate} />
            </Modal>
        )
    }

    return (
        <div>
            <div className="row">
                <div className="col-3">Name</div>
                <div className="col-2">Type</div>
                <div className="col-2">Price(USD)</div>
                <div className="col-2">Start Date</div>
                <div className="col-2 text-right">Due Date</div>
            </div>
            {subs.slice(0).reverse().map(sub => (
                <div key={sub._id} data-sub={sub._id} className="row border border-success bg-warning mb-1">
                    <div className="col-3">{sub.title}</div>
                    <div className="col-2">{sub.type}</div>
                    <div className="col-2">${sub.amount}</div>
                    <div className="col-2">{sub.startDate}</div>
                    <div className="col-2 text-right">{moment(sub.dueDate).from(moment())}</div>
                    <div className="col-1">
                        <MDBBtn data-sub={sub._id} onClick={() => deleteSub(sub._id)} outline rounded size="sm" color="white" className="px-2">
                            <i className="fas fa-pencil-alt mt-0"></i>
                        </MDBBtn>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Table;