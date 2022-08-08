import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import "./SIdeBar.scss";
import CloseIcon from "@mui/icons-material/Close";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as jsonData from "./tempSideBarData.json";
import { toogleCommentSideBar } from "../main";
import { LazyLoaderHook } from "../hooks/lazyloader";
import { elementIdentifier } from "../contants";
const data = jsonData.data;

export const SIdeBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [commentsData, setcommentsData] = useState([]);
    const [commentData, setcommentData] = useState([]);
    const [pagenumber, setPagenumber] = useState(0);
    const [idx, setidx] = useState(0);
    function updateMask(target) {
        let elements = document.getElementsByClassName("highlight-wrap");
        let hObj;
        if (elements.length !== 0) {
            hObj = elements[0];
        } else {
            hObj = document.createElement("div");
            hObj.className = "highlight-wrap";
            hObj.style.position = "absolute";
            hObj.style.backgroundColor = "aqua";
            hObj.style.opacity = "0.5";
            hObj.style.cursor = "default";
            hObj.style.transition = "transform 1s ease-in-out";
            hObj.style.transform = "scale(1.3)";
            setTimeout(() => {
                hObj.style.transform = "scale(1)";
            }, 1000);
            // hObj.style.pointerEvents = "auto";
            hObj.style.pointerEvents = "none";
            hObj.onmousedown = function (e) {
                // console.log("mousedown");
            };
            hObj.style.zIndex = "9999999";
            hObj.style.boxSizing = "border-box";
            hObj.style.border = "1px solid blue";
            document.body.appendChild(hObj);
        }
        let rect = target.getBoundingClientRect();
        // target.style.pointerEvents = "none";
        hObj.style.left = rect.left + window.scrollX + "px";
        hObj.style.top = rect.top + window.scrollY + "px";
        hObj.style.width = rect.width + "px";
        hObj.style.height = rect.height + "px";
    }
    function removeMask() {
        let elements = document.getElementsByClassName("highlight-wrap");
        if (elements.length !== 0) {
            elements[0].remove();
        }
    }
    // useEffect(() => {
    //     setcommentsData(data);
    //     // for(let i = 0; i < commentsData.length; i++){
    //     //     commentsData[i].createdAt = formatTheDate(commentsData[i].createdAt);
    //     // }
    //     setcommentsData((prevState) => {
    //         return prevState.map((comment) => {
    //             // console.log(comment);
    //             // console.log(formatTheDate(comment.createdAt));
    //             const temp = {
    //                 ...comment,
    //                 createdAt: formatTheDate(comment.createdAt),
    //             };
    //             // console.log(temp);
    //             return temp;
    //         });
    //     });
    // }, []);

    const { loading, error, hasMore, comments } = LazyLoaderHook(
        pagenumber,
        idx
    );

    useEffect(() => {
        console.log("comments: ", comments);
    }, [comments]);

    const lastCommentRef = useRef();
    const lastCommentElement = useCallback(
        (comment) => {
            // console.log("loading: ", loading);
            if (loading) return;
            if (lastCommentRef.current) {
                lastCommentRef.current.disconnect();
            }
            lastCommentRef.current = new IntersectionObserver((entries) => {
                // console.log(hasMore, pagenumber, hasMore!>0);
                // console.log(hasMore);
                if (
                    hasMore !== undefined &&
                    hasMore > 0 &&
                    entries[0].isIntersecting
                ) {
                    // console.log("lastCommentElement: ", comment);
                    // console.log("visible");
                    setPagenumber((pagenumber) => pagenumber + 1);
                }
            });
            if (comment) {
                lastCommentRef.current.observe(comment);
            }
        },
        [loading, hasMore]
    );

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (idx) => {
        setidx(idx);
        setPagenumber(0);
        setAnchorEl(null);
    };
    Date.prototype.addHours = function (h) {
        this.setTime(this.getTime() + h * 60 * 60 * 1000);
        return this;
    };

    Date.prototype.addHoursAndMinutes = function (h, m) {
        this.setTime(this.getTime() + h * 60 * 60 * 1000 + m * 60 * 1000);
        return this;
    };

    const formatTheDate = (time) => {
        var date = new Date(time).addHoursAndMinutes(5, 30),
            diff = (new Date().getTime() - date.getTime()) / 1000,
            day_diff = Math.floor(diff / 86400);
        // console.log(new Date().getTime() - date.getTime());
        // console.log("res: ", date, "day_diff: ", day_diff, "diff: ", diff);
        if (isNaN(day_diff) || day_diff < 0) return;
        const res =
            (day_diff == 0 &&
                ((diff < 60 && "just now") ||
                    (diff < 120 && "1 minute ago") ||
                    (diff < 3600 && Math.floor(diff / 60) + " minutes ago") ||
                    (diff < 7200 && "1 hour ago") ||
                    (diff < 86400 &&
                        Math.floor(diff / 3600) + " hours ago"))) ||
            (day_diff == 1 && "Yesterday") ||
            (day_diff < 7 && day_diff + " days ago") ||
            (day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago") ||
            (day_diff < 60 && Math.ceil(day_diff / 31) + " months ago") ||
            Math.ceil(day_diff / 365) + " years ago";
        return res;
    };

    return ReactDOM.createPortal(
        <div className="AnnotateJs_Component annotateJsSideBarMainDiv">
            <div className="AnnotateJs_Component annotateJsSideBarHeader">
                <h1 className="AnnotateJs_Component annotateJsSideBarH1">
                    Issues:
                </h1>
                <div className="AnnotateJs_Component annotateJsSideBarButtonDiv">
                    <Button
                        className="AnnotateJs_Component annotateJsSideBarButton"
                        variant="text"
                        style={{
                            // borderRadius: "50%",
                            color: "black",
                            padding: "0px",
                            width: "1rem !important",
                        }}
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                    >
                        <FilterAltIcon
                            className="AnnotateJs_Component"
                            style={{ margin: "0px" }}
                        />
                    </Button>
                    <Menu
                        style={{ zIndex: "99999999" }}
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={() => handleClose(-1)}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                    >
                        <MenuItem onClick={() => handleClose(0)}>
                            Latest Comments
                        </MenuItem>
                        <MenuItem onClick={() => handleClose(1)}>
                            My Comments
                        </MenuItem>
                        <MenuItem onClick={() => handleClose(2)}>
                            Resolved
                        </MenuItem>
                    </Menu>
                    <Button
                        className="AnnotateJs_Component annotateJsSideBarButton"
                        variant="text"
                        style={{
                            // borderRadius: "50%",
                            color: "black",
                            padding: "0px",
                            width: "1rem !important",
                        }}
                        onClick={toogleCommentSideBar}
                    >
                        <CloseIcon
                            className="AnnotateJs_Component"
                            style={{ margin: "0px" }}
                        />
                    </Button>
                </div>
            </div>
            <hr className="AnnotateJs_Component" style={{ color: "black" }} />
            <div className="AnnotateJs_Component annotateJsSideBarBody">
                {/* {commentsData !== null &&
                commentsData !== undefined &&
                commentsData.length > 0 ? (
                    commentsData.map((item) => (
                        <div
                            key={item.id}
                            className="AnnotateJs_Component annotateJsSideBarBodyDiv"
                        >
                            <div className="AnnotateJs_Component annotateJsSideBarBodyDivProfile">
                                <img
                                    className="AnnotateJs_Component annotateJsSideBarBodyDivProfileImg"
                                    src="https://material-ui.com/static/images/avatar/1.jpg"
                                />
                                <div className="AnnotateJs_Component annotateJsSideBarBodyDivProfileName">
                                    <p className="AnnotateJs_Component annotateJsSideBarBodyDivProfileNameP">
                                        {item.name}
                                    </p>
                                    <p className="AnnotateJs_Component annotateJsSideBarBodyDivTime">
                                        {item.createdAt}
                                    </p>
                                </div>
                            </div>
                            <div className="AnnotateJs_Component annotateJsSideBarBodyDivComment">
                                <p className="AnnotateJs_Component annotateJsSideBarBodyDivCommentP">
                                    {item.comment}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="AnnotateJs_Component noResultsFoundPage">
                        No Issues Found
                    </p>
                )} */}
                {comments !== undefined &&
                comments.length !== null &&
                comments.length > 0 ? (
                    comments.map((item, idx) =>
                        idx < comments.length - 1 ? (
                            <div
                                key={idx}
                                className="AnnotateJs_Component annotateJsSideBarBodyDiv"
                                onClick={() => {
                                    toogleCommentSideBar();
                                    const element = document.querySelector(
                                        `[${elementIdentifier}="${item.elementIdentifier}"]`
                                    );
                                    console.log(
                                        `[${elementIdentifier}="${item.elementIdentifier}"]`
                                    );
                                    element.scrollIntoView({
                                        behavior: "smooth",
                                        block: "center",
                                    });
                                    element.style.transition =
                                        "transform 1s ease-in-out";
                                    element.style.transform = "scale(1.3)";
                                    setTimeout(() => {
                                        element.style.transform = "scale(1)";
                                    }, 1000);
                                    updateMask(element);
                                    setTimeout(() => {
                                        removeMask();
                                    }, 2000);
                                }}
                            >
                                <div className="AnnotateJs_Component annotateJsSideBarBodyDivProfile">
                                    <img
                                        className="AnnotateJs_Component annotateJsSideBarBodyDivProfileImg"
                                        src="https://material-ui.com/static/images/avatar/1.jpg"
                                    />
                                    <div className="AnnotateJs_Component annotateJsSideBarBodyDivProfileName">
                                        <p className="AnnotateJs_Component annotateJsSideBarBodyDivProfileNameP">
                                            {item.userName}
                                        </p>
                                        <p className="AnnotateJs_Component annotateJsSideBarBodyDivTime">
                                            {formatTheDate(item.created_at)}
                                        </p>
                                    </div>
                                </div>
                                <div className="AnnotateJs_Component annotateJsSideBarBodyDivComment">
                                    <p className="AnnotateJs_Component annotateJsSideBarBodyDivCommentP">
                                        {item.message}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div
                                key={idx}
                                ref={lastCommentElement}
                                className="AnnotateJs_Component annotateJsSideBarBodyDiv"
                            >
                                <div className="AnnotateJs_Component annotateJsSideBarBodyDivProfile">
                                    <img
                                        className="AnnotateJs_Component annotateJsSideBarBodyDivProfileImg"
                                        src="https://material-ui.com/static/images/avatar/1.jpg"
                                    />
                                    <div className="AnnotateJs_Component annotateJsSideBarBodyDivProfileName">
                                        <p className="AnnotateJs_Component annotateJsSideBarBodyDivProfileNameP">
                                            {item.userName}
                                        </p>
                                        <p className="AnnotateJs_Component annotateJsSideBarBodyDivTime">
                                            {formatTheDate(item.created_at)}
                                        </p>
                                    </div>
                                </div>
                                <div className="AnnotateJs_Component annotateJsSideBarBodyDivComment">
                                    <p className="AnnotateJs_Component annotateJsSideBarBodyDivCommentP">
                                        {item.message}
                                    </p>
                                </div>
                            </div>
                        )
                    )
                ) : (
                    <p className="AnnotateJs_Component noResultsFoundPage">
                        No Issues Found
                    </p>
                )}
                {loading ? <p>Loading...</p> : null}
                {error && <p>Error :</p>}
            </div>
        </div>,
        document.querySelector("#AnnotateJs_CommentsSideBarDiv")
    );
};
