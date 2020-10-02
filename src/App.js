import React, { useEffect, useState } from "react";
import "./css/App.css";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Algo from "./pages/Algo.js";
import { CssBaseline, Container } from "@material-ui/core";
import OpenFolder from "./pages/OpenFolder";

function App() {
    return (
        <>
            <CssBaseline>
                <Container fixed>
                    <Switch>
                        <Redirect exact path="/" to="/algo" />

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
                </Container>
            </CssBaseline>
        </>
    );
}

export default App;
