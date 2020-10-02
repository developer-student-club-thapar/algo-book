/*
Page where all folders of "Content" would be displayed
Eg:- If we choose to visit Algothrims/Sorting then this page
would show all sorting algos like bubble, merge, quick etc

Home/Algorithms/Sorting or Home/DataStructures/LinkedList
*/

import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import Folder from "../components/Folder";
import { Grid } from "@material-ui/core";

const SubContent = () => {
    const { cat, subcat } = useParams();
    const list = ["bubble", "merge", "quick", "insertion"];
    return (
        <>
            <BreadCrumbs
                crumbs={[
                    { name: "HOME", link: "/" },
                    { name: cat.toUpperCase(), link: `/${cat}` },
                ]}
                active={subcat.toUpperCase()}
            />
            <Grid container>
                {list.map((x, index) => (
                    <Folder
                        name={x}
                        link={`/${cat}/${subcat}/${x}`}
                        key={index}
                    />
                ))}
            </Grid>
        </>
    );
};

export default SubContent;
