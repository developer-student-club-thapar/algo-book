import React, { useEffect } from "react";
import "./css/App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { CssBaseline, Container } from "@material-ui/core";
import Algo from "./pages/Algo.js";
import OpenFolder from "./pages/OpenFolder";
function App() {
    useEffect(() => {
        const server_side_css = document.querySelector("#jss-server-side");
        if (server_side_css) {
            server_side_css.parentElement.removeChild(server_side_css);
        }
    }, []);

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
