import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App.js";
import { BrowserRouter as Router } from "react-router-dom";

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
