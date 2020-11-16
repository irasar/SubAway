import React from "react";
import FullPageIntroWithFixedTransparentNavbarx  from "../components/HeroNav"
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import Navbar from "../components/Navbar"

function Home() {
    return (
        <div>
            <FullPageIntroWithFixedTransparentNavbarx />
            <LoginButton />
            <LogoutButton />
         
        </div>


    )
}

export default Home;