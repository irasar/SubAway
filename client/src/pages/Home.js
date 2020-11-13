import React from "react";
import Jumbotron from "../components/Jumbotron"
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import Navbar from "../components/Navbar"

function Home() {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <LoginButton />
            <LogoutButton />
        </div>


    )
}

export default Home;