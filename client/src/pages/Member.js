import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import FullPageIntroWithFixedTransparentNavbar from "../components/Navbar";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
import ModalPage from "../components/Modal";
import TablePage from "../components/TablePage";


function Member() {

    const [subs, setSubs] = useState([]);
    const [formInput, setFormInput] = useState({});
    const { user, isAuthenticated } = useAuth0();


    useEffect(() => {
        if (isAuthenticated) {
            console.log(user.sub);
            getSubs();
        }
    }, [isAuthenticated])

    function getSubs() {
        API.findAllSubs(user.sub)
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
                {
                    title: formInput.title,
                    type: formInput.type,
                    amount: formInput.amount,
                    userID: user.sub

                })
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
    <br>
    </br>
    <br>
    </br>
    <br></br>
    <ModalPage handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
            <div className="row">
                <div className="col-md-6"></div>

                <div className="col-md-3 offset-3">
                    <p>Your Expenses:</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <TablePage subs={subs}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8 mx-auto text-center">
                    <p>Subscriptions</p>
                    {subs.slice(0).reverse().map(sub => (
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