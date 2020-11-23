import React from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Auth0Provider } from "@auth0/auth0-react"

const domain = process.env.AUTH0_DOMAIN;
const clientId = process.env.AUTH0_CLIENT_ID;

ReactDOM.render(
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri="https://subaway.herokuapp.com/member">
        <App />
    </Auth0Provider>,
    document.getElementById("root"));
registerServiceWorker();
