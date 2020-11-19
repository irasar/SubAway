import React, { useState, useEffect } from "react";
import FullPageIntroWithFixedTransparentNavbar from "../components/Navbar";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "../components/Modal";
import TablePage from "../components/TablePage";
import moment from "moment"
import Input from "../components/Input"
import way3 from "../images/way3.jpg";
import { MDBView } from 'mdbreact';


function Member() {

    const [subs, setSubs] = useState([]);
    const [formInput, setFormInput] = useState({ type: "Streaming" });
    const { user, isAuthenticated } = useAuth0();
    const [startDate, setStartDate] = useState(new Date());
    const [dueDate, setDueDate] = useState(new Date());
    const [expenses, setExpenses] = useState(0)


    useEffect(() => {
        if (isAuthenticated) {
            getSubs();
            getUser(user.sub);
        }
    }, [isAuthenticated])

    function createUser(id) {
        API.createUser(id)
            .then(res => {
                console.log("created user " + res.data.auth0ID);
            })
            .catch(err => console.log(err));
    }

    function getUser(id) {
        console.log(id);
        API.findUser(id)
            .then(res => {
                if(res.data === null){
                    createUser(id)
                }
                else{
                    console.log("found user " + res.data.auth0ID);
                }
            })
            .catch(err => console.log(err));
    }

    function getSubs() {
        API.findAllSubs(user.sub)
            .then(res => {
                sortDates(res.data);
            })
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormInput({ ...formInput, [name]: value })
    };

    function handleExpenses(event) {
        event.preventDefault();
        setExpenses(document.getElementById("formGroupExampleInput").value)
    }

    function sortDates(data) {
        const tempArray = data;
        const sortedArray = tempArray.sort((a, b) => new moment(b.dueDate).format('YYYYMMDD') - new moment(a.dueDate).format('YYYYMMDD'))
        setSubs(sortedArray);
    }

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

        // <MDBView className="heroPic" src={way3}>
        <div>
            <FullPageIntroWithFixedTransparentNavbar />
            <br>
            </br>
            <br>
            </br>
            <br></br>
            <div className="row">
                <div className="col-md-5 offset-7">
                    <div>
                        <Modal handleFormSubmit={handleExpenses} buttonName="Edit Expenses" title="Expenses">
                            <Input>Expenses</Input>
                        </Modal>
                        <p>My Expenses: {expenses}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <TablePage
                        handleInputChange={handleInputChange}
                        handleFormSubmit={handleFormSubmit}
                        startDate={startDate}
                        setStartDate={setStartDate}
                        dueDate={dueDate}
                        setDueDate={setDueDate}
                        subs={subs} />
                </div>
            </div>
        </div>
        // </MDBView>

    )
}

export default Member;