import React from 'react';
import { MDBBtn, MDBIcon, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import FullPageIntroWithFixedTransparentNavbar from "./Navbar";
import way from "../images/subsad.jpg";
import way2 from "../images/wood_2x.png";


class FullPageIntroWithFixedTransparentNavbarx extends React.Component {
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
      <div>
        <header>
          <FullPageIntroWithFixedTransparentNavbar />

          <MDBView className="heroPic" src={way}>
            <MDBMask className="flex-center flex-column text-white text-center">
              <h1 className="welcome"> Welcome to SubAway</h1>
              <h2 className="secondWelcome"> Where we manage your subscriptions so you dont have to.</h2>
         
                <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon>Get Started</MDBBtn>
        
            </MDBMask>

          </MDBView>

        </header>

        <main>
          <MDBView className="heroPic" src={way2}>
            <MDBMask className="text-white">
              <MDBContainer className="text-center my-5">
                <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </main>
      </div>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbarx;