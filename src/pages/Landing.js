import React from "react";
import { Link } from "@reach/router";

export default function Welcome() {
    return (
        <div className="App-link">
            <p>Landing page (app-link class is just to test css imports) </p>
            <Link to="/algo">algo</Link>
        </div>
    );
}
