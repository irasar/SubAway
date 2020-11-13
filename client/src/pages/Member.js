import React from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar"

function Member() {
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
                    <Form />
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