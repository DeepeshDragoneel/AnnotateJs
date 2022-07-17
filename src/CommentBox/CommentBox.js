import React, { useState } from "react";
import ReactDom from "react-dom";
import Avatar from "@mui/material/Avatar";
import "./CommentBox.scss";

export const CommentBox = () => {
    const [Comment, setComment] = useState("");

    return ReactDom.createPortal(
        <div className="AnnotateJs_Component CommentBoxMainDiv">
            <div className="AnnotateJs_Component CommentBoxUserDetailsDiv">
                <img
                    className="AnnotateJs_Component CommentBoxUserDetailsAvatar"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                />
                <div className="AnnotateJs_Component CommentBoxUserDetailsDiv">
                    <p className="AnnotateJs_Component CommentBoxUserDetailsP">
                        User Name
                    </p>
                </div>
            </div>
            {/* <hr
                className="AnnotateJs_Component"
                style={{ border: "1px solid black", margin: "2px" }}
            /> */}
            <textarea
                className="AnnotateJs_Component commentBoxTextarea"
                rows="3"
                value={Comment}
                onChange={(e) => {
                    setComment(e.target.value);
                }}
            ></textarea>
            <div className="AnnotateJs_Component commentBoxButtonDiv">
                <button
                    className="AnnotateJs_Component commentBoxSubmitButton"
                    onClick={() => {
                        console.log("Comment: ", Comment);
                        setComment("");
                    }}
                >
                    Comment
                </button>
                <button
                    className="AnnotateJs_Component commentBoxCancelButton"
                    onClick={() => {
                        setComment("");
                    }}
                >
                    Cancel
                </button>
            </div>
        </div>,
        document.getElementById("AnnotateJs_CommentBoxDiv")
    );
};
