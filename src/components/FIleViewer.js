/*
Component where md file for algo/ds would be displayed
*/

import React, { useEffect, useState } from "react";
import Editor from "rich-markdown-editor";

const FIleViewer = ({ file: { value, type } }) => {
    function createMarkup(value) {
        return { __html: value };
    }

    console.log("type", type);
    if (type.includes(".md"))
        return <div dangerouslySetInnerHTML={createMarkup(value)} />;
    return (
        <>
            <div>
                {/* <Editor value={value} readOnly /> */}
                <p style={{ whiteSpace: "pre-line" }}>{value}</p>
            </div>
        </>
    );
};

export default FIleViewer;
