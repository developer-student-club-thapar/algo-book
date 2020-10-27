/*
Page where code in some language of the previously
selected algo/DS would be displayed

Home/Algorithms/Sorting/BubbleSort/C++
*/

import React, { useEffect } from "react";
import Prism from "prismjs";

const CodeView = ({ file: { value, type } }) => {
    useEffect(() => {
        console.log("useEffect run");
        Prism.highlightAll();
    });

    return (
        <>
            <pre className="line-numbers">
                <code className={`language-${type}`}>{value}</code>
            </pre>
        </>
    );
};

export default CodeView;
