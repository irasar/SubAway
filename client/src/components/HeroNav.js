import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer } from "mdbreact";
import Navbar from "./Navbar";
 
class VideoBackgroundPage extends React.Component {
state = {
collapseID: ""
};

toggleCollapse = collapseID => () =>
this.setState(prevState => ({
collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

render() {
const overlay = (
<div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.toggleCollapse("navbarCollapse")} />
);
return (
<div id="videobackground">
  <Router>
    <div>
<Navbar />
      {this.state.collapseID && overlay}
    </div>
  </Router>

  <MDBView>
    <video className="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsInline
      autoPlay muted="" loop>
      <source src="https://mdbootstrap.com/img/video/animation.mp4" type="video/mp4" />
    </video>
    <MDBMask className="d-flex justify-content-center align-items-center gradient">
      <MDBContainer className="px-md-3 px-sm-0">
        <MDBRow>
          <MDBCol md="12" className="mb-4 white-text text-center">
            <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
            Welcome to SubAway{" "}
            </h3>
            <hr className="hr-light my-4 w-75" />
            <h4 className="subtext-header mt-2 mb-4">
            Where we manage your subscriptions so you dont have to.
            </h4>
            <MDBBtn outline rounded color="white">
              <MDBIcon icon="home" /> Get Started
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBMask>
  </MDBView>

  <MDBContainer>
    <MDBRow className="pt-5 pb-4">
      <MDBCol md="12" className="text-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</div>
);
}
}

export default VideoBackgroundPage;