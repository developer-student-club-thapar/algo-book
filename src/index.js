import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App.js";

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(<App />, document.getElementById("root"));
