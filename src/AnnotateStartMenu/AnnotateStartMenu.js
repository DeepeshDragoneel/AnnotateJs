import React from "react";
import ReactDom from "react-dom";

export const AnnotateStartMenu = () => {
    return ReactDom.createPortal(
        <div>
            <h1>Start Annotator: </h1>
        </div>,
        document.getElementById("AnnotateJs_StartAnnotatorButtonDiv")
    );
};

// export default AnnotateStartMenu;
