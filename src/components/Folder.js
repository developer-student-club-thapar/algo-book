/*
Component to be displayed as folder
*/
/* eslint-disable */
import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import FolderIcon from "@material-ui/icons/Folder";
import {
    makeStyles,
    Button,
    Grid,
    Typography,
    Tooltip,
} from "@material-ui/core";

const useStyles = makeStyles({
    folder: {
        fontSize: "6",
        color: "grey",
    },
    txt: {
        fontSize: "100px",
    },
});

const Folder = ({ name, link }) => {
    const history = useHistory();
    const classes = useStyles();

    const clickHandler = (e) => {
      
        history.push(link);
    };

    return (
        <Fragment>
            <Tooltip title={name} arrow>
                <Button onClick={clickHandler}>
                    <Grid
                        container
                        direction="column"
                        justify-content="center"
                        alignItems="stretch"
                        spacing={0}
                    >
                        <Grid item>
                            <FolderIcon className={classes.folder} />
                        </Grid>
                        <Grid item className={classes.txt}>
                            <Typography variant="button" display="block" noWrap>
                                {name}
                            </Typography>
                        </Grid>
                    </Grid>
                </Button>
            </Tooltip>
        </Fragment>
    );
};

export default Folder;
