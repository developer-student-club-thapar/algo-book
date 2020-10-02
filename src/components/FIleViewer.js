/*
Component where md file for algo/ds would be displayed
*/

import React, { useEffect, useState } from "react";
import Editor from "rich-markdown-editor";

const FIleViewer = ({ value }) => {
    return (
        <>
            <Editor value={value} readOnly />
        </>
    );
};

export default FIleViewer;
