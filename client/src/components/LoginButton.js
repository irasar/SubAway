import React from "react";
import { useAuth0 } from "@auth0/auth0-react"
import { MDBNavItem, MDBLink } from 'mdbreact';
import { Link } from "react-router-dom";

function LoginButton() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <MDBNavItem active>
                <Link to="/member" id="navStyleP" onClick={() => loginWithRedirect()}>Login</Link>
            </MDBNavItem>
        )
    )
}

export default LoginButton;