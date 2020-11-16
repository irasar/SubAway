import React from "react";
import FullPageIntroWithFixedTransparentNavbarx  from "../components/HeroNav"
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import FullPageIntroWithFixedTransparentNavbar  from "../components/Navbar"
// import ButtonPage from "../components/Button";

function Home() {
    return (
        <div>
            {/* <ButtonPage /> */}
            {/* <Navbar /> */}
            <FullPageIntroWithFixedTransparentNavbarx />
            <LoginButton />
            <LogoutButton />
         
        </div>


    )
}

export default Home;