import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBLink } from 'mdbreact';
import logoi from "../images/logo-subaway.png";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <header>
        <MDBNavbar color="" fixed="top" dark expand="md" scrolling transparent>
          <MDBNavbarBrand href="/">
            <img className="subLogo" src={logoi} alt="subawaylogo" />
          </MDBNavbarBrand>
          {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
          <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <a id="navStyle" href="/">Home</a>
              </MDBNavItem>
              <MDBNavItem active>
                <a id="navStyle" href="/member">Member</a>
              </MDBNavItem>
              <LogoutButton />
              <LoginButton />
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
    );
  }
}

export default Navbar;