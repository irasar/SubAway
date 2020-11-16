import React from "react";
import Jumbotron from "../components/Jumbotron"
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import Navbar from "../components/Navbar"
import { useAuth0 } from "@auth0/auth0-react"


function Home() {

    const { user, isAuthenticated } = useAuth0();
    console.log(isAuthenticated);
    console.log(user);

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