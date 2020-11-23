import React from "react";
import { useAuth0 } from "@auth0/auth0-react"
import { MDBNavItem } from 'mdbreact';
import { Link } from "react-router-dom";

function LogoutButton() {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <MDBNavItem active>
                <Link to="/" id="navStyleP" onClick={() => logout()}>Log out</Link>
            </MDBNavItem>
        )
    )
}
export default LogoutButton;