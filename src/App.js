import React from "react";
import ReactDom from "react-dom";
import { AnnotateStartMenu } from "./AnnotateStartMenu/AnnotateStartMenu";
import { CommentBox } from "./CommentBox/CommentBox";
import { SIdeBar } from "./SIdeBar/SIdeBar";
import { UserLogin } from "./UserLogin/UserLogin";

export const App = () => {
    return (
        <>
            <AnnotateStartMenu />
            <CommentBox />
            <SIdeBar/>
            <UserLogin/>
        </>
    );
};

// export default AnnotateStartMenu;
