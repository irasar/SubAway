import React from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import moment from "moment";

const TablePage = ({ subs }) => {
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
        'label': 'Price($USD)',
        'field': 'amount',
      },
      {
        'label': 'Star Date',
        'field': 'date',
      },
      {
        'label': 'Due Date',
        'field': 'date',
      }
    ],
    rows:
      subs.slice(0).reverse().map((sub) => (
        {
          'title': sub.title,
          'type': sub.type,
          'amount': sub.amount,
          'startDate': sub.startDate,
          'dueDate': moment(sub.dueDate).from(moment()),
        }
      ))
  };

  return (
    <MDBCard narrow>
      <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
        <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-th-large mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-columns mt-0"></i>
          </MDBBtn>
        </div>
        <a href="#" className="white-text mx-3">Table name</a>
        <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-pencil-alt mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-times mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-info-circle mt-0"></i>
          </MDBBtn>
        </div>
      </MDBCardHeader>
      <MDBCardBody cascade>
        <MDBTable btn fixed>
          <MDBTableHead columns={data_panel.columns} />
          <MDBTableBody rows={data_panel.rows} />
        </MDBTable>
      </MDBCardBody>
    </MDBCard >
  );
};

export default TablePage;