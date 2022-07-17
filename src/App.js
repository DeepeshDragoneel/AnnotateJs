import React from "react";
import ReactDom from "react-dom";
import { AnnotateStartMenu } from "./AnnotateStartMenu/AnnotateStartMenu";
import { CommentBox } from "./CommentBox/CommentBox";

export const App = () => {
    return (
        <>
            <AnnotateStartMenu />
            <CommentBox />
        </>
    );
};

// export default AnnotateStartMenu;
