/*
Tab where 2 "folders" of Algo and DS would be displayed

Home
*/
/* eslint-disable */
import React, { Fragment, useState } from "react";
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

const Algo = () => {
    const algo = ["Searching", "Sorting", "Traversal"];
    const ds = ["Linked List", "Stacks", "Queues", "Graphs", "Trees"];

    const AlgoComponent = () => {
        return (
            <Grid container>
                {algo.map((x, index) => (
                    <Folder name={x} link={`/algo/${x}`} key={index} />
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

// import React from "react";

// const Algo = () => {
//     return <h1>test</h1>;
// };

// export default Algo;

export default Algo;
