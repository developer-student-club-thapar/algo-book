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
import FIleViewer from "../components/FIleViewer";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const OpenFolder = () => {
    useEffect(() => {
        setList(["readme", "c++", "java", "javascript", "python"]);
    }, []);

    let query = useQuery();
    const [list, setList] = useState([]);
    const [file, setFile] = useState({
        type: "",
        value: "",
    });

    const handler = (type) => {
        console.log(type);
        // get content of file
        const content = `## This is a ${type} file.`;
        setFile({
            type: type,
            value: content,
        });
    };

    const renderViewer = () => {
        // ! Check file.type and add code editor
        return <FIleViewer value={file.value} />;
    };

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
                    <File name={x} key={index} handler={handler} />
                ))}
            </Grid>
            <br />
            {renderViewer()}
        </>
    );
};

export default OpenFolder;
