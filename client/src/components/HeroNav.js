import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBAnimation, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
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
      {<MDBContainer>
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Welcome to SubAway
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4">
                    Where we manage your subscriptions so you dont have to.
                    </h6>
                 
                    <MDBBtn outline color="white">
                     Get Started
                    </MDBBtn>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <img
                      src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                      alt=""
                      className="img-fluid"
                    />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>}
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