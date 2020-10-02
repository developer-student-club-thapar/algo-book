import React, { useEffect, useState } from "react";
import "./css/App.css";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Algo from "./pages/Algo.js";
import { CssBaseline } from "@material-ui/core";
import OpenFolder from "./pages/OpenFolder";

function App() {
    return (
        <>
            <CssBaseline>
                <Switch>
                    <Route
                        exact
                        path="/:page(algo|ds)"
                        render={(props) => <Algo {...props} />}
                    />

                    <Route
                        exact
                        path="/open"
                        render={(props) => <OpenFolder {...props} />}
                    />
                </Switch>
            </CssBaseline>
        </>
    );
}

export default App;
