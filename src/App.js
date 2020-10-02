import React, { useEffect, useState } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Algo from "./pages/Algo.js";
import { CssBaseline } from "@material-ui/core";
import OpenFolder from "./pages/OpenFolder";

function App() {
    // useEffect(() => {
    //     const demoGetReq = async () => {
    //         const { data } = await api.get("/demo");
    //         console.log(data);
    //     };
    //     demoGetReq();
    // });
    return (
        // <div>
        //     TEST
        //     <Switch>
        //         <Route exact path="/algo" component={Algo} />
        //         <Route exact path="/" component={Landing} />
        //     </Switch>
        // </div>
        <>
            <Router>
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
                            // /open?topic=&folder=
                            render={(props) => <OpenFolder {...props} />}
                        />
                    </Switch>
                </CssBaseline>
            </Router>
        </>
    );
}

export default App;
