import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "../components/Modal";
import TablePage from "../components/TablePage";
import Table from "../components/Table";
import moment from "moment";
import Input from "../components/Input";
import CoolBackground from "../components/CoolBackground";
import "./Member.css"


function Member() {
    const [subs, setSubs] = useState([]);
    const [formInput, setFormInput] = useState({ type: "Streaming" });
    const { user, isAuthenticated } = useAuth0();
    const [startDate, setStartDate] = useState(new Date());
    const [dueDate, setDueDate] = useState(new Date());
    const [budget, setBudget] = useState(0);
    const [expenses, setExpenses] = useState(0);


    useEffect(() => {
        if (isAuthenticated) {
            getSubs();
            getUser(user.sub);
        }
    }, [isAuthenticated])

    useEffect(() => {
        addExpenses();
    }, [subs])

    function addExpenses() {
        const newExpenses = [];
        let total = 0;
        subs.forEach(sub => {
            newExpenses.push(parseFloat(sub.amount))
        });
        total = newExpenses.reduce((a, b) => a + b, 0);
        setExpenses(total);
    }

    // function

    function createUser(id) {
        API.createUser(id)
            .then(res => {
                console.log("created user " + res.data.auth0ID);
                setBudget(res.data.budget);
            })
            .catch(err => console.log(err));
    }

    function getUser(id) {
        console.log(id);
        API.findUser(id)
            .then(res => {
                if (res.data === null) {
                    createUser({ auth0ID: id, budget: budget })
                }
                else {
                    console.log("found user " + res.data.auth0ID)
                    setBudget(res.data.budget);
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

    function deleteSub(id) {
        API.removeSub(id)
            .then(res => getSubs())
            .catch(err => console.log(err));
    }

    function handleBudget(event) {
        event.preventDefault();
        setBudget(document.getElementById("formGroupExampleInput").value)
        updateBudget(document.getElementById("formGroupExampleInput").value);
    }

    function updateBudget(newBudget) {
        console.log(user.sub + " " + newBudget);
        API.updateUser({ auth0ID: user.sub, budget: newBudget })
            .then(res => console.log("updated budget"))
            .catch(err => console.log(err));
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

        <div className="wrapper">
            <div className="container">
                <Navbar />
                <br>
                </br>
                <br>
                </br>
                <br></br>
                <div className="row">
                    <div className="col-md-5 offset-7">
                        <div>
                            <Modal padding="px-1" handleFormSubmit={handleBudget} buttonName="Edit budget" title="budget">
                                <Input>budget</Input>
                            </Modal>
                            <p>My Budget: {budget}</p>
                            <p>Money left: {(parseFloat(budget) - expenses).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="table" className="col-md-6 mx-auto">
                        <Table
                            deleteSub={deleteSub}
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
            <ul className="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Member;