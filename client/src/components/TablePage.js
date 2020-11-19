import React from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import moment from "moment";
import Modal from "./Modal";
import Form from "../components/Form";

const TablePage = ({ subs, handleFormSubmit, handleInputChange, startDate,
  setStartDate, dueDate, setDueDate }) => {
  const data_panel = {
    columns: [
      {
        'label': 'Name',
        'field': 'title',

      },
      {
        'label': 'Type',
        'field': 'type',
      },
      {
        'label': 'Price(USD)',
        'field': 'amount',
      },
      {
        'label': 'Star Date',
        'field': 'startDate',
      },
      {
        'label': 'Due Date',
        'field': 'dueDate',
      }
    ],
    rows:
      subs.slice(0).reverse().map((sub) => (
        {
          'title': sub.title,
          'type': sub.type,
          'amount': "$" + sub.amount,
          'startDate': sub.startDate,
          'dueDate': moment(sub.dueDate).from(moment()),
        }
      ))
  };

  return (
    <MDBCard narrow>
      <MDBCardHeader className="view view-cascade gradient-card-header 
blue-gradient d-flex justify-content-between align-items-center py-2 mx-0 mb-0 row mb-0">
        <div className="col-md-4 px-0">
          <Modal handleFormSubmit={handleFormSubmit} title="New Subscription" buttonName="Add Subscription">
            <Form handleInputChange={handleInputChange}
              startDate={startDate}
              setStartDate={setStartDate}
              dueDate={dueDate}
              setDueDate={setDueDate} />
          </Modal>
        </div>
        <div className="col-md-7">
          <h3 className="white-text mr-0">Your Subscriptions</h3>
        </div>
        <div className="col-md-1">
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-pencil-alt mt-0"></i>
          </MDBBtn>
        </div>
      </MDBCardHeader>
      <MDBCardBody className="pt-0 pb-0" cascade>
        <MDBTable btn fixed>
          <MDBTableHead columns={data_panel.columns} />
          <MDBTableBody rows={data_panel.rows} />
        </MDBTable>
      </MDBCardBody>
    </MDBCard >
  );
};

export default TablePage;