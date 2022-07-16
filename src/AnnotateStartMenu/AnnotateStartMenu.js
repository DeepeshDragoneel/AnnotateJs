import React, { useState } from "react";
import ReactDom from "react-dom";
import "./AnnotateStartMenu.scss";
import { PlayArrowIcon } from "@mui/icons-material";

export const AnnotateStartMenu = () => {
    const [startAnnotateButtonClicked, setStartAnnotateButtonClicked] =
        useState("");
    const [startAnnotateButtonClicked2, setStartAnnotateButtonClicked2] =
        useState("");

    const handleClick = () => {
        console.log("handleClick");
        if (startAnnotateButtonClicked === "") {
            setStartAnnotateButtonClicked("clickedTheAnnotatorButton");
            setStartAnnotateButtonClicked2(
                "clickedTheAnnotatorButtonTransition"
            );
        } else {
            setStartAnnotateButtonClicked("");
            setStartAnnotateButtonClicked2("");
        }
    };

    return ReactDom.createPortal(
        <div className="AnnotateStartMenuMainDiv">
            <p className="AnnotateStartMenuMainDivPTag">
                {startAnnotateButtonClicked === "" ? "Start" : "Stop"}{" "}
                Annotation:
            </p>
            <div
                className={`switch-container switch-flat ${startAnnotateButtonClicked}`}
            >
                <div
                    className={`flat-container ${startAnnotateButtonClicked2}`}
                    onClick={handleClick}
                >
                    {/* <div className="flat flat-off">{PlayArrowIcon}</div> */}
                    <div className={`flat flat-off `}>&#x25B6;</div>
                    <div className={`flat flat-on`}>&#9634;</div>
                </div>
            </div>
            <div>
                <div className="AnnotateStartMenuMainDivHelp">&#x3F;</div>
            </div>
        </div>,
        document.getElementById("AnnotateJs_StartAnnotatorButtonDiv")
    );
};

// export default AnnotateStartMenu;
