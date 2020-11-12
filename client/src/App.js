import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Member from "./pages/Member"

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Member />
        <Login />
        <Signup />
      </div>


    );
  }
}

export default App;
