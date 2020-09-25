/*
Page where 2 "folders" of Algo and DS would be displayed

Home
*/

import React from "react";
import { Link } from "@reach/router";

export default function Algo() {
    return (
        <div>
            <p>Algo page</p>
            <Link to="/">back to landing</Link>
        </div>
    );
}
