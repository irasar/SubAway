import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import FullPageIntroWithFixedTransparentNavbar from "../components/Navbar";
import API from "../utils/API";

function Member() {

    const [subs, setSubs] = useState([]);
    const [formInput, setFormInput] = useState({});

    useEffect(() => {
        getSubs()
    }, [])

    function getSubs() {
        API.findAllSubs()
            .then(res => {
                console.log(res.data);
                setSubs(res.data);
            })
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormInput({ ...formInput, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formInput.title && formInput.type && formInput.amount) {
            API.createSub(
                formInput
            )
            .then(res => getSubs())
            .catch(err => console.log(err));
        }
        else {
            alert("Please answer all of the questions");
        };
    }



    return (
        <div>
         <FullPageIntroWithFixedTransparentNavbar />
            <div className="row">
                <div className="col-md-6"></div>

                <div className="col-md-3 offset-3">
                    <p>Your Expenses:</p>
                </div>

            </div>

            <div className="row">
                <div className="col-md-6 mx-auto">
                    <Form handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
                    <p>{formInput.title}</p>
                    <p>{formInput.type}</p>
                    <p>{formInput.amount}</p>
                </div>

            </div>

            <div className="row">
                <div className="col-md-8 mx-auto text-center">
                    <p>Subscriptions</p>
                    {subs.map(sub => (
                        <div key={sub._id}>
                            <p>{sub.title}</p>
                            <p>{sub.type}</p>
                            <p>{sub.amount}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    )
}

export default Member;