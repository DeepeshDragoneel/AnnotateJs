import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./SIdeBar.scss";
import CloseIcon from "@mui/icons-material/Close";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as jsonData from "./tempSideBarData.json";
const data = jsonData.data;

export const SIdeBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
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
                        style={{ zIndex: "99999994" }}
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                    >
                        <MenuItem onClick={handleClose}>My Comments</MenuItem>
                        <MenuItem onClick={handleClose}>
                            Latest Comments
                        </MenuItem>
                        <MenuItem onClick={handleClose}>Resolved</MenuItem>
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
                    >
                        <CloseIcon
                            className="AnnotateJs_Component"
                            style={{ margin: "0px" }}
                        />
                    </Button>
                </div>
            </div>
            <div className="AnnotateJs_Component annotateJsSideBarBody">
                {data.map((item) => (
                    <div key={item.id} className="AnnotateJs_Component annotateJsSideBarBodyDiv">
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
                ))}
            </div>
        </div>,
        document.querySelector("#AnnotateJs_CommentsSideBarDiv")
    );
};
