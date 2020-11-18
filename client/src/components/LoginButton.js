import React from "react";
import { useAuth0 } from "@auth0/auth0-react"
import { MDBNavItem, MDBLink } from 'mdbreact';

function LoginButton() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <MDBNavItem active>
                <MDBLink id="navStyleP" onClick={() => loginWithRedirect()}>Login</MDBLink>
            </MDBNavItem>
        )
    )
}

export default LoginButton;