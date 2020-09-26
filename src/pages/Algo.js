/*
Page where 2 "folders" of Algo and DS would be displayed

Home
*/

import React, { Fragment } from "react";
import Folder from "../components/Folder";
import BreadCrumbs from "../components/BreadCrumbs";

export default function Algo() {
    return (
        <Fragment>
            <BreadCrumbs
                crumbs={[
                    { name: "Home", link: "/" },
                    { name: "Algorithms", link: "/algo" },
                    { name: "Sorting", link: "/algo/sorting" },
                ]}
                active="Active Link"
            />
            <br />
            <Folder name="Algorithms" link="algo" />
            <Folder name="Data Structures" link="ds" />
        </Fragment>
    );
}
