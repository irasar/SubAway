import React from 'react';
import { MDBBtn } from 'mdbreact';
import moment from "moment";
import Modal from "./Modal";
import Form from "../components/Form";

function Table({ subs, handleFormSubmit, handleInputChange, startDate,
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
            <div className="row morpheus-den-gradient bg-primary">
                <div className="col-3">
                    <Modal padding="p-1" handleFormSubmit={handleFormSubmit} title="New Subscription" buttonName={<i className="fas fa-plus "></i>}>
                        <Form handleInputChange={handleInputChange}
                            startDate={startDate}
                            setStartDate={setStartDate}
                            dueDate={dueDate}
                            setDueDate={setDueDate} />
                    </Modal>
                </div>
                <div className="col-9">
                    <h1 id="my-subs" >Your Subscriptions</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-2">Name</div>
                <div className="col-2">Type</div>
                <div className="col-2 text-left">Price(USD)</div>
                <div className="col-2">Start Date</div>
                <div className="col-2 text-right">Due Date</div>
            </div>
            {subs.slice(0).reverse().map(sub => (
                <div key={sub._id} className="row mb-1">
                    <div className="col-2">{sub.title}</div>
                    <div className="col-2">{sub.type}</div>
                    <div className="col-2">${sub.amount}</div>
                    <div className="col-2">{sub.startDate}</div>
                    <div className="col-2 text-right">{moment(sub.dueDate).from(moment())}</div>
                    <div className="col-1 pr-0">
                        <MDBBtn outline rounded size="sm" color="white" className="px-2">
                            <i className="fas fa-pencil-alt mt-0"></i>
                        </MDBBtn>
                    </div>
                    <div className="col-1 pl-0">
                        <MDBBtn onClick={() => deleteSub(sub._id)} outline rounded size="sm" color="white" className="px-2">
                            <i className="fas fa-trash-alt"></i>
                        </MDBBtn>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Table;