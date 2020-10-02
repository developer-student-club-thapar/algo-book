/*
Page where all the files related to
previously selected algo/DS would be listed
like bubbleSort in C++, python, JS, Java and pseudo

Home/Algorithms/Sorting/BubbleSort
*/

import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import File from "../components/File";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const OpenFolder = () => {
    useEffect(() => {
        setList(["c++", "java", "javascript", "python", "readme"]);
    }, []);

    let query = useQuery();
    const [list, setList] = useState([]);
    return (
        <>
            <BreadCrumbs
                crumbs={[
                    { name: "HOME", link: "/" },
                    {
                        name: query.get("topic").toUpperCase(),
                        link: `/${query.get("topic")}`,
                    },
                ]}
                active={query.get("topic") && query.get("folder").toUpperCase()}
            />
            <Grid container>
                {list.map((x, index) => (
                    <File name={x} key={index} />
                ))}
            </Grid>
        </>
    );
};

export default OpenFolder;
