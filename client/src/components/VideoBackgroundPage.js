import React from "react";
import { Link } from "react-router-dom";
import { MDBAnimation, MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer } from "mdbreact";
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
        <div>
          <Navbar />
          {this.state.collapseID && overlay}
        </div>
        <MDBView>
          {/* home screen animation */}
          <video className="video-intro" playsInline
            autoPlay muted="" loop>
            <source src="https://mdbootstrap.com/img/video/animation.mp4" type="video/mp4" />
          </video>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow className="home-content">
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5">
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                      Welcome to SubAway
                    </h1>
                    <hr className="hr-light" />
                    <h3 className="h3-responsive mb-4">
                      Where we manage your subscriptions so you dont have to
                    </h3>
                    <Link to="/member">
                      <MDBBtn outline color="white">Get Started</MDBBtn>
                    </Link>
                  </MDBAnimation>
                </MDBCol>
                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <img
                      src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                      alt=""
                      className="img-fluid" />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}
export default VideoBackgroundPage;