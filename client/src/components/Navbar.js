import React from 'react';
import { Link } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem } from 'mdbreact';
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
        <MDBNavbar className="p-0" color="" fixed="top" dark expand="md" scrolling transparent>
          <MDBNavbarBrand href="/">
            <img className="subLogo" src={logoi} alt="subawaylogo" />
          </MDBNavbarBrand>
          {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
          <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <Link id="navStyle" to="/">Home</Link>
              </MDBNavItem>
              <MDBNavItem active>
                <Link id="navStyle" to="/member">Member</Link>
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