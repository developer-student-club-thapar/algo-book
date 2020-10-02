/*
Page where code in some language of the previously
selected algo/DS would be displayed

Home/Algorithms/Sorting/BubbleSort/C++
*/

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeView = ({ file: { value, type } }) => {
    return (
        <>
            <SyntaxHighlighter language={type} showLineNumbers>
                {value}
            </SyntaxHighlighter>
        </>
    );
};

export default CodeView;
