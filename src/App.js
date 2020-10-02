import React, { useEffect, useState } from "react";
import "./css/App.css";
import { Route, Switch } from "react-router-dom";
import Algo from "./pages/Algo.js";
import Landing from "./pages/Landing";
import api from "./util/api";

function App() {
    // useEffect(() => {
    //     const demoGetReq = async () => {
    //         const { data } = await api.get("/demo");
    //         console.log(data);
    //     };
    //     demoGetReq();
    // });
    return (
        <div>
            TEST
            <Switch>
                <Route exact path="/algo" component={Algo} />
                <Route exact path="/" component={Landing} />
            </Switch>
        </div>
    );
}

export default App;
