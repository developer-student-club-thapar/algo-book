/*
Component where md file for algo/ds would be displayed
*/

import React from "react";

const FIleViewer = ({ file: { value, type } }) => {
    function createMarkup(value) {
        return { __html: value };
    }

    return (
        <>
            <div dangerouslySetInnerHTML={createMarkup(value)} />;
        </>
    );
};

export default FIleViewer;
