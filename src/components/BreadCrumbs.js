/*
Desc:- BreadCrumbs to show the current directory
Eg :- Home/Algorithms/Sorting/Bubble/C++
*/
/* eslint-disable */
import React, { Fragment } from "react";
import { Breadcrumbs, Typography, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import NavigateNext from "@material-ui/icons/NavigateNext";

const BreadCrumbs = ({ crumbs, active }) => {
    return (
        <Fragment>
            <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
                {crumbs.map((item, index) => {
                    return (
                        <Link
                            component={RouterLink}
                            color="inherit"
                            to={item.link}
                            key={index}
                        >
                            {item.name}
                        </Link>
                    );
                })}
                <Typography color="textPrimary">{active}</Typography>
            </Breadcrumbs>
        </Fragment>
    );
};

export default BreadCrumbs;
