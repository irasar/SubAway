import React from 'react';
import { MDBBtn } from 'mdbreact';
import moment from "moment";
import Modal from "./Modal";
import Form from "../components/Form";
import SubRow from "./SubRow";

function Table({ subs, handleFormSubmit, handleInputChange, startDate,
    setStartDate, dueDate, setDueDate, deleteSub }) {

    return (
        <div>
            <div className="row py-2 tempting-azure-gradient bg-primary">
                <div className="col-2">
                    <Modal padding="p-1" handleFormSubmit={handleFormSubmit} title="New Subscription" buttonName={<i className="fas fa-plus "></i>}>
                        <Form handleInputChange={handleInputChange}
                            startDate={startDate}
                            setStartDate={setStartDate}
                            dueDate={dueDate}
                            setDueDate={setDueDate} />
                    </Modal>
                </div>
                <div className="col-9">
                    <h1 className="my-subs" >Your Subscriptions</h1>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-2 col-md-3 headers"><p>Name</p></div>
                <div className="col-3 col-md-2 text-center headers"><p>Type</p></div>
                <div className="col-2 pl-0 price headers"><p>Price(USD)</p></div>
                <div className="col pr-0 start-date headers"><p>Start Date</p></div>
                <div className="col pl-0 due-date headers"><p>Due Date</p></div>
            </div>
            {subs.map(sub => (
                <SubRow key={sub.id} sub={sub}>
                    <div className="col-2 col-md-3 pt-1 sub-content"><p>{sub.title}</p></div>
                    <div className="col-3 col-md-2 text-center pt-1 sub-content"><p>{sub.type}</p></div>
                    <div className="col-2 pt-1 sub-content"><p>${sub.amount}</p></div>
                    <div className="col-2 pt-1 sub-content pl-1 pl-md-3"><p>{sub.startDate}</p></div>
                    <div className="col-2 pt-1 sub-content pr-0 text-center"><p>{moment(sub.dueDate).toNow()}</p></div>
                    <div className="col-1 pl-0 pr-0">
                        <MDBBtn outline rounded size="sm" color="white" className="px-2 my-0 sub-btn">
                            <i className="fas fa-pencil-alt sub-icons"></i>
                        </MDBBtn>
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