import React, { useEffect } from "react";
// import { Router } from "@reach/router";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import "./css/App.css";
import api from "./util/api";
import Algo from "./pages/Algo";

function App() {
    // useEffect(() => {
    //     const demoGetReq = async () => {
    //         const { data } = await api.get("/demo");
    //         console.log(data);
    //     };
    //     demoGetReq();
    // });
    return (
        <>
            <Router>
                <CssBaseline>
                    <Switch>
                        <Route
                            exact
                            path="/:page"
                            render={(props) => <Algo {...props} />}
                        />
                    </Switch>
                </CssBaseline>
            </Router>
        </>
    );
}

export default App;
