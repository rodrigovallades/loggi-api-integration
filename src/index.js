import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

// There is a bug with Codesandbox which prevents
// the request from passing the CORS preflight check.
// So we setup a proxy to bypass the CORS block.
const proxy = "https://loggi-bypass-cors.herokuapp.com/";
// const proxy = "https://r64eqibmkk.execute-api.us-east-1.amazonaws.com/dev/?url=";
// const proxy = "http://corsproxy-env.mrwver8hr4.us-east-1.elasticbeanstalk.com/";
const endpoint = "https://staging.loggi.com/graphql";

export const url = `${proxy}${endpoint}`;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
