import React from "react";
import { useAuth0 } from "@auth0/auth0-react"
import { MDBNavItem, MDBLink } from 'mdbreact';


function LogoutButton() {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <MDBNavItem active>
                <MDBLink to="/" id="navStyleP" onClick={() => logout()}>Log out</MDBLink>
            </MDBNavItem>
        )
    )
}

export default LogoutButton;