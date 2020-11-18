import React, { useState, useEffect } from "react";
import FullPageIntroWithFixedTransparentNavbar from "../components/Navbar";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
import ModalPage from "../components/Modal";
import TablePage from "../components/TablePage";
import moment from "moment";
import way3 from "../images/way3.jpg";
import { MDBView } from 'mdbreact';

function Member() {

    const [subs, setSubs] = useState([]);
    const [formInput, setFormInput] = useState({ type: "Streaming" });
    const { user, isAuthenticated } = useAuth0();
    const [startDate, setStartDate] = useState(new Date());
    const [dueDate, setDueDate] = useState(new Date());


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
                    userID: user.sub,
                    startDate: moment(startDate).format("MM.DD.YYYY"),
                    dueDate: moment(dueDate).format("MM.DD.YYYY")

                })
                .then(res => getSubs())
                .catch(err => console.log(err));
        }
        else {
            alert("Please answer all of the questions");
        };
    }



    return (

        <MDBView className="heroPic" src={way3}>
        <div>
            <FullPageIntroWithFixedTransparentNavbar />
            <br>
            </br>
            <br>
            </br>
            <br></br>
            <ModalPage
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                startDate={startDate}
                setStartDate={setStartDate}
                dueDate={dueDate}
                setDueDate={setDueDate} />
            <div className="row">
                <div className="col-md-6"></div>

                <div className="col-md-3 offset-3">
                    <p>Your Expenses:</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <TablePage subs={subs} />
                </div>
            </div>
            <div>
                <p>
                    name: {formInput.title}
                    type: {formInput.type}
                    amount: {formInput.amount}
                    start date: {moment(startDate).format("MM.DD.YYYY")}
                    due date: {moment(dueDate).format("MM.DD.YYYY")}
                </p>
            </div>
        </div>
 
        </MDBView>

    )
}

export default Member;