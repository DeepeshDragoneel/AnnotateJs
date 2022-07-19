import React from "react";
import ReactDOM from "react-dom";

export const SIdeBar = () => {
    return ReactDOM.createPortal(
        <div className="AnnotateJs_Component"></div>,
        document.querySelector("#AnnotateJs_CommentsSideBarDiv")
    );
};
