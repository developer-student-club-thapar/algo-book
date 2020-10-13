/*
Page where all the files related to
previously selected algo/DS would be listed
like bubbleSort in C++, python, JS, Java and pseudo

Home/Algorithms/Sorting/BubbleSort
*/

import React, { useState, useEffect } from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import File from "../components/File";
import FIleViewer from "../components/FIleViewer";
import api from "../util/api";
import CodeView from "./CodeView";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const OpenFolder = () => {
    useEffect(() => {
        async function getFiles() {
            const { data } = await api.get(
                `/local/path/${
                    query.get("topic") === "algo" ? "algorithms" : "ds"
                }/${query.get("folder")}`
            );
            setList(data);
        }
        getFiles();
    }, []);

    let query = useQuery();
    const [list, setList] = useState([]);
    const [file, setFile] = useState({
        type: "",
        value: "",
    });
    const [loading, setLoading] = useState(false);

    const handler = async (file) => {
        // console.log(file);
        setLoading(true);
        const { data } = await api.get(
            `/local/path/${
                query.get("topic") === "algo" ? "algorithms" : "ds"
            }/${query.get("folder")}/${file}`
        );
        console.log(data);
        setLoading(false);
        const checker = /(?:\.([^.]+))?$/;
        const ext =
            checker.exec(file)[1] && checker.exec(file)[1].trim().toLowerCase();
        setFile({
            type: ext,
            value: data,
        });
    };

    const renderViewer = () => {
        if (loading) return <LinearProgress />;
        else {
            if (file.type == "md") return <FIleViewer file={file} />;
            else return <CodeView file={file} />;
        }
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
                {list.map((l, index) => (
                    <File name={l.name} key={index} handler={handler} />
                ))}
            </Grid>
            <br />
            {renderViewer()}
        </>
    );
};

export default OpenFolder;
