import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Member from "./pages/Member";
import Loading from "./components/loading";
import PrivateRoute from "./components/private-route";
import { useAuth0 } from "@auth0/auth0-react";


function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/member" component={Member} />
      </Switch>
    </Router>
  );
}

export default App;
