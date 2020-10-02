/*
Tab where 2 "folders" of Algo and DS would be displayed

Home
*/
/* eslint-disable */
import React, { Fragment, useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import {
    Container,
    AppBar,
    Tab,
    Tabs,
    Paper,
    Grid,
    makeStyles,
} from "@material-ui/core";
import BreadCrumbs from "../components/BreadCrumbs";
import Folder from "../components/Folder";
import axios from "axios";
import api from "../util/api";

const Algo = () => {
    const [algos, setAlgos] = useState([]);
    const ds = ["Linked List", "Stacks", "Queues", "Graphs", "Trees"];
    // useEffect(() => {
    //     async function getAlgos() {
    //         const { data } = await axios.get(
    //             "https://api.github.com/repos/rishabhjain-28/algo-book-test/contents/algorithms"
    //         );
    //         console.log("algo", data);
    //         setAlgos(data);
    //         getAlgosDATA(data[0]);
    //     }

    //     async function getAlgosDATA(algo) {
    //         const { data } = await axios.get(
    //             `https://api.github.com/repos/rishabhjain-28/algo-book-test/contents/algorithms/${algo.name}`
    //         );
    //         console.log("algo-data", data);
    //         // setAlgos(data);
    //         getContent(algo, data[0]);
    //     }
    //     async function getContent(algo, file) {
    //         const { data } = await axios.get(
    //             `https://api.github.com/repos/rishabhjain-28/algo-book-test/contents/algorithms/${algo.name}/${file.name}`,
    //             {
    //                 headers: {
    //                     accept: "application/vnd.github.VERSION.raw",
    //                 },
    //             }
    //         );
    //         console.log("algo-data-cpp", data);
    //     }

    //     getAlgos();
    // }, []);
    useEffect(() => {
        async function getData() {
            const { data } = await api.get("/git/contents/algorithms");
            console.log("algo", data);
            // setAlgos(data);
            setAlgos(data);
        }
        getData();
    }, []);
    const AlgoComponent = () => {
        return (
            <Grid container>
                {algos.map((element, index) => (
                    <Folder
                        name={element.name}
                        link={`/algo/${element.name}`}
                        key={index}
                    />
                ))}
            </Grid>
        );
    };

    const DsComponent = () => {
        return (
            <Grid container>
                {ds.map((x, index) => (
                    <Folder name={x} link={`/ds/${x}`} key={index} />
                ))}
            </Grid>
        );
    };

    const { page } = useParams();

    const pageToValue = {
        algo: 0,
        ds: 1,
    };

    const valueToPage = {
        0: "algo",
        1: "ds",
    };

    const [tab, setTab] = useState(pageToValue[page]);
    const history = useHistory();

    const onChange = (e, newtab) => {
        e.preventDefault();
        history.push(`/${valueToPage[newtab]}`);
        setTab(newtab);
    };

    const renderPage = () => {
        switch (page) {
            case "algo":
                return <AlgoComponent />;
            /*{Render algo}*/

            case "ds":
                return <DsComponent />;
            /*{Render ds}*/

            default:
                return <AlgoComponent />;
            /*{Render algo}*/
        }
    };
    return (
        <Fragment>
            <Container fixed>
                <BreadCrumbs
                    crumbs={[{ name: "Home", link: "/" }]}
                    active={valueToPage[tab]}
                />
                <Link to="/">BACK TO LANDING </Link>
                <Paper elevation={0} variant="outlined">
                    <AppBar position="static" color="inherit">
                        <Tabs
                            value={tab}
                            onChange={onChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                        >
                            <Tab label="Algorithms" />
                            <Tab label="Data Structures" />
                        </Tabs>
                    </AppBar>
                </Paper>
                <br />
                {renderPage()}
            </Container>
        </Fragment>
    );
};

export default Algo;
