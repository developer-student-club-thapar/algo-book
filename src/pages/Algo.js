/*
Tab where 2 "folders" of Algo and DS would be displayed

Home
*/
/* eslint-disable */
import React, { Fragment, useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import {
    Container,
    AppBar,
    Tab,
    Tabs,
    Paper,
    Grid,
    LinearProgress,
    makeStyles,
} from "@material-ui/core";
import BreadCrumbs from "../components/BreadCrumbs";
import Folder from "../components/Folder";
import api from "../util/api";

const Algo = () => {
    useEffect(() => {
        async function getAlgo() {
            const { data } = await api.get("/git/path/algorithms");
            console.log(data);
            setAlgos(data);
            setLoading(false);
        }
        getAlgo();
    }, []);

    const [algos, setAlgos] = useState([]);
    const [ds, setDs] = useState([]);
    const [loading, setLoading] = useState(true);

    const AlgoComponent = () => {
        return (
            <Grid container>
                {algos.map((algo, index) => (
                    <Folder
                        name={algo.name}
                        link={`/open?topic=algo&folder=${algo.name}`}
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
                    <Folder
                        name={x}
                        link={`/open?topic=ds&folder=${x}`}
                        key={index}
                    />
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
        if (loading) return <LinearProgress />;

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
                    crumbs={[{ name: "HOME", link: "/" }]}
                    active={valueToPage[tab].toUpperCase()}
                />
                <br />
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
