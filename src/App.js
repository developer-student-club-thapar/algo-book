import React, { useEffect } from "react";
import "./css/App.css";
import { Router } from "@reach/router";
import Algo from "./pages/Algo.js";
import Landing from "./pages/Landing";
import api from "./util/api";

function App() {
    useEffect(() => {
        const demoGetReq = async () => {
            const { data } = await api.get("/demo");
            console.log(data);
        };
        demoGetReq();
    });
    return (
        <div>
            {/* TEST */}
            <Router>
                <Landing path="/" />
                <Algo path="/algo" />
            </Router>
        </div>
    );
}

export default App;
