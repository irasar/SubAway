import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import API from "../utils/API";

function Member() {

    const [subs, setSubs] = useState([]);
    const [formInput, setFormInput] = useState({});


    function displaySubs() {
        API.findAllSubs()
            .then(res => setSubs(res))
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormInput({ ...formInput, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formInput.title && formInput.type && formInput.amount) {
            API.createSub({
                title: formInput.title,
                type: formInput.type,
                amount: formInput.amount
            })
                .then(res => displaySubs())
                .catch(err => console.log(err));
        }
        else {
            alert("Please answer all of the questions");
        };
    }



    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="col-md-6"></div>

                <div className="col-md-3 offset-3">
                    <p>Your Expenses:</p>
                </div>

            </div>

            <div className="row">
                <div className="col-md-6 mx-auto">
                    <Form handleInputChange={handleInputChange} />
                    <p>{formInput.title}</p>
                    <p>{formInput.type}</p>
                    <p>{formInput.amount}</p>
                </div>

            </div>

            <div className="row">
                <div className="col-md-8 mx-auto text-center">
                    Subscriptions
                </div>
            </div>
        </div>


    )
}

export default Member;