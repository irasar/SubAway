import React from "react";
import { useAuth0 } from "@auth0/auth0-react"
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBLink} from 'mdbreact';

function LoginButton() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <MDBNavItem>
            <MDBLink onClick={() => loginWithRedirect()}>
                Members
            </MDBLink>
            </MDBNavItem>
        )
    )
}

export default LoginButton;