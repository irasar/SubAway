import React, { useState, useEffect } from "react";
import FullPageIntroWithFixedTransparentNavbar from "../components/Navbar";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "../components/Modal";
import TablePage from "../components/TablePage";
import moment from "moment";
import Input from "../components/Input"

function Member() {

    const [subs, setSubs] = useState([]);
    const [formInput, setFormInput] = useState({ type: "Streaming" });
    const { user, isAuthenticated } = useAuth0();
    const [startDate, setStartDate] = useState(new Date());
    const [dueDate, setDueDate] = useState(new Date());
    const [expenses, setExpenses] = useState(0)


    useEffect(() => {
        if (isAuthenticated) {
            console.log(user.sub);
            getSubs();
        }
    }, [isAuthenticated])

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


    )
}

export default Member;