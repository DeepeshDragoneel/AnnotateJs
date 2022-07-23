import { v4 as uuidv4 } from "uuid";
import React from "react";
import ReactDOM from "react-dom/client";
import { AnnotateStartMenu } from "./AnnotateStartMenu/AnnotateStartMenu";
import { App } from "./App";
import { getStartAnnotation } from "./contants";

console.log("AnnotatorJs Loaded! ✌🏻");

let this_js_script = $("script[src*=bundle]");
var my_var_1 = this_js_script.attr("allowed-users");
console.log(my_var_1);
if (typeof my_var_1 === "undefined") {
    var my_var_1 = "some_default_value";
}
alert(my_var_1); // to view the variable value


const createSideBarForComments = () => {
    const annotateJsCommentsSideBarDiv = document.createElement("div");
    annotateJsCommentsSideBarDiv.id = "AnnotateJs_CommentsSideBarDiv";
    annotateJsCommentsSideBarDiv.className = "AnnotateJs_Component";
    annotateJsCommentsSideBarDiv.classList.add("showSideBoxAnnotateJs");
    annotateJsCommentsSideBarDiv.style.position = "fixed";
    annotateJsCommentsSideBarDiv.style.top = "0px";
    annotateJsCommentsSideBarDiv.style.right = "-100%";
    annotateJsCommentsSideBarDiv.style.overflowY = "scroll";
    // annotateJsCommentsSideBarDiv.style.transform = "translateX(100%)";
    annotateJsCommentsSideBarDiv.style.transition =
        "transform 0.5s ease-in-out";
    annotateJsCommentsSideBarDiv.style.zIndex = "99999995";
    annotateJsCommentsSideBarDiv.style.transition = "1s ease-in-out";
    annotateJsCommentsSideBarDiv.style.boxShadow = "0px 0px 10px #000000";
    const issesSideBarBackDrop = document.createElement("div");
    issesSideBarBackDrop.id = "AnnotateJs_CommentsSideBarBackDrop";
    issesSideBarBackDrop.className = "AnnotateJs_Component";
    issesSideBarBackDrop.style.position = "fixed";
    issesSideBarBackDrop.style.top = "0px";
    issesSideBarBackDrop.style.right = "0px";
    issesSideBarBackDrop.style.width = "100vw";
    issesSideBarBackDrop.style.height = "100vh";
    issesSideBarBackDrop.style.backgroundColor = "rgba(0,0,0,0.5)";
    issesSideBarBackDrop.style.zIndex = "99999994";
    issesSideBarBackDrop.style.display = "none";
    issesSideBarBackDrop.onclick = () => {
        toogleCommentSideBar();
    };
    document.body.appendChild(issesSideBarBackDrop);
    // let style = document.createElement("style");
    // style.type = "text/css";
    // let keyFrames =
    //     "\
    // @-webkit-keyframes showSideBar {\
    //     0% {\
    //         -webkit-transform: translateX(0%);\
    //         -webkit-display: none;\
    //     }\
    //     100% {\
    //         -webkit-transform: translateX(100%);\
    //         -webkit-display: block;\
    //     }\
    // }\
    // @-moz-keyframes hideSideBar {\
    //     0% {\
    //         -webkit-transform: translateX(100%);\
    //         -webkit-display: block;\
    //     }\
    //     100% {\
    //         -webkit-transform: translateX(0%);\
    //         -webkit-display: none;\
    //     }\
    // }";
    // style.innerHTML = keyFrames;
    // document.getElementsByTagName("head")[0].appendChild(style);

    if (window.innerWidth < 500) {
        annotateJsCommentsSideBarDiv.style.width = "100%";
    } else if (window.innerWidth < 1000) {
        annotateJsCommentsSideBarDiv.style.width = "40%";
    } else if (window.innerWidth < 800) {
        annotateJsCommentsSideBarDiv.style.width = "50%";
    } else {
        annotateJsCommentsSideBarDiv.style.width = "25%";
    }
    annotateJsCommentsSideBarDiv.style.height = "100vh";
    annotateJsCommentsSideBarDiv.style.backgroundColor = "white";
    // var css =
    //     ".showSideBoxAnnotateJs {   opacity:1;  visibility: visible;  transition: all 0.25s ease; transform: translateX(0); animation: fadeInRight .25s ease forwards;}\
    //     @-webkit-keyframes fadeInRight {\
    //     0% {\
    //         opacity: 0;\
    //         left: 20%;\
    //     }\
    //     100% {\
    //         opacity: 1;\
    //         left: 0;\
    //     }\
    // }";

    // document.head.appendChild(document.createElement("style")).innerHTML = css;
    // document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[1]);
    // annotateJsCommentsSideBarDiv.style.zIndex = "99999991";
    document.body.appendChild(annotateJsCommentsSideBarDiv);
};

const startRenderingReact = () => {
    const startAnnotatorButtonDiv = document.createElement("div");
    // startAnnotatorButtonDiv.className = `AnnotateJs_StartAnnotatorButtonDiv_${uniqueClassNameGen}`;
    startAnnotatorButtonDiv.id = "AnnotateJs_StartAnnotatorButtonDiv";
    startAnnotatorButtonDiv.style.position = "fixed";
    startAnnotatorButtonDiv.style.bottom = "0px";
    startAnnotatorButtonDiv.style.right = "50%";
    startAnnotatorButtonDiv.style.transform = "translate(50%)";
    startAnnotatorButtonDiv.style.zIndex = "99999990";
    document.body.appendChild(startAnnotatorButtonDiv);
    const extraSpacingDiv = document.createElement("div");
    // extraSpacingDiv.style.height = "1rem";
    document.body.appendChild(extraSpacingDiv);

    const annotateJsCommentBoxDiv = document.createElement("div");
    annotateJsCommentBoxDiv.id = "AnnotateJs_CommentBoxDiv";
    annotateJsCommentBoxDiv.style.position = "absolute";
    annotateJsCommentBoxDiv.style.display = "none";
    annotateJsCommentBoxDiv.style.zIndex = "99999992";
    annotateJsCommentBoxDiv.style.backgroundColor = "white";
    // annotateJsCommentBoxDiv.style.display = "none";
    document.body.appendChild(annotateJsCommentBoxDiv);
    createSideBarForComments();
    ReactDOM.createRoot(startAnnotatorButtonDiv).render(<App />);
};

const uniqueClassNameGen = uuidv4();
{
    // const allDiv = document.querySelectorAll("div");
    // // console.log(allDiv);
    // let tempZIndex = 0;
    // for (let i = 0; i < allDiv.length; i++) {
    // allDiv[i].onmouseenter = function (event) {
    // event.stopPropagation();
    // this.style.border = "1px solid red";
    // if (
    //     allDiv[i].style.position === null ||
    //     allDiv[i].style.position === "" ||
    //     allDiv[i].style.position === "static"
    // ) {
    //     allDiv[i].style.position = "relative";
    // }
    // tempZIndex = Math.max(tempZIndex + 1, parseInt(allDiv[i].style.zIndex + 1));
    // tempZIndex = Math.max(
    //     tempZIndex,
    //     parseInt(allDiv[i].parentElement.style.zIndex + 1)
    // );
    // var annotateJsDiv = document.createElement("div");
    // annotateJsDiv.className = "annotateJsDiv";
    // annotateJsDiv.style.cssText = `position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.5;
    // boxSizing: border-box`;
    // //     {
    // //         // annotateJsDiv.style = {
    // //         //     ...annotateJsDiv.style,
    // //         //     position: "absolute",
    // //         //     top: "0",
    // //         //     left: "0",
    // //         //     width: "100%",
    // //         //     height: "100%",
    // //         //     background-color: rgba(0, 0, 0, 0.5);
    // //         //     zIndex: "1"
    // //         // };
    // //     }
    // //     allDiv[i].appendChild(annotateJsDiv);
    // //     {
    // //         // annotateJsDiv.onmouseleave = function (event) {
    // //         //     // event.stopPropagation();
    // //         //     this.parentElement.removeChild(this);
    // //         //     this.parentElement.style.border = "none";
    // //         // }
    // //         // };
    // //         // allDiv[i].onmouseout = function () {
    // //         //     this.style.border = "";
    // //         // //     // this.removeChild(this.lastChild);
    // //         // };
    // //     }
    // }
    // const allCustomAnnotationJsDivs = document.querySelectorAll(".annotateJsDiv");
    // for (let i = 0; i < allDiv.length; i++) {
    //     if (
    //         allDiv[i].style.position === null ||
    //         allDiv[i].style.position === "" ||
    //         allDiv[i].style.position === "static"
    //     ) {
    //         allDiv[i].style.position = "relative";
    //     }
    //     var annotateJsDiv = document.createElement("div");
    //     annotateJsDiv.className = "annotateJsDiv";
    //     annotateJsDiv.style.cssText = `position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.5;
    //     boxSizing: border-box; background-color: aqua; box-sizeing: border-box; border: 1px solid blue; z-index: ${
    //         allDiv[i].style.zIndex + 1
    //     }`;
    //     allDiv[i].onmouseenter = function (event) {
    //         event.stopPropagation();
    //         this.appendChild(annotateJsDiv);
    //         // this.style.backgroundColor = "aqua";
    //         // this.style.boxSizing = "border-box";
    //         // this.style.border = "1px solid blue";
    //     };
    //     annotateJsDiv.onmouseleave = function (event) {
    //         event.stopPropagation();
    //         // this.style.backgroundColor = "";
    //         // this.style.border = "";
    //         allDiv[i].removeChild(this.lastChild);
    //     };
    // }
    // //Text Elements
    // const allTextElements = document.querySelectorAll(
    //     "h1, h2, h3, h4, h5, h6, p, span, li, a, button, input, textarea"
    // );
    // for (let i = 0; i < allTextElements.length; i++) {
    //     // console.log(allTextElements[i]);
    //     tempZIndex = Math.max(
    //         tempZIndex + 1,
    //         parseInt(allTextElements[i].style.zIndex + 1)
    //     );
    //     if (
    //         allTextElements[i].style.position === null ||
    //         allTextElements[i].style.position === "" ||
    //         allTextElements[i].style.position === "static"
    //     ) {
    //         allTextElements[i].style.position = "relative";
    //     }
    //     allTextElements[i].style.zIndex = tempZIndex;
    //     allTextElements[i].onmouseenter = function (event) {
    //         event.stopPropagation();
    //         allTextElements[i].style.backgroundColor = "#A6FFFF";
    //         allTextElements[i].style.boxSizing = "border-box";
    //         allTextElements[i].style.border = "1px solid blue";
    //     };
    //     allTextElements[i].onmouseleave = function (event) {
    //         event.stopPropagation();
    //         allTextElements[i].style.backgroundColor = "";
    //         allTextElements[i].style.border = "";
    //     };
    // }
    // window.onload = function () {
    // }
    // let testDiv = document.querySelector(".mainSection5");
    // let testVec = [testDiv];
    // let currHighlightedDiv;
    // let testDivClone = testDiv.cloneNode(true);
    // console.log(testDivClone);
    // testDivClone.style.position = "absolute";
    // testDivClone.style.top = "0";
    // testDivClone.style.left = "0";
    // testDivClone.style.width = "100%";
    // testDivClone.style.height = "100%";
    // testDivClone.style.backgroundColor = "aqua";
    // testDivClone.style.zIndex = "9999999";
    // testDiv.appendChild(testDivClone);
    // testDiv.parentElement.insertBefore(testDivClone, testDiv.nextSibling);
    // while (testVec.length > 0) {
    // let currDiv = testVec[0];
    // testVec.shift();
    // if (
    //     window.getComputedStyle(currDiv).position === null ||
    //     window.getComputedStyle(currDiv).position === "" ||
    //     window.getComputedStyle(currDiv).position === "static"
    // ) {
    //     // console.log(currDiv.className, currDiv.style.position);
    //     currDiv.style.position = "relative";
    // }
    // let maxZIndex = 0;
    // for (let i = 0; i < currDiv.children.length; i++) {
    //     if (currDiv.children[i].tagName === "DIV") {
    //         // currDiv.children[i].style.border = "1px solid red";
    //         testVec.push(currDiv.children[i]);
    //     }
    //     if (currDiv.children[i].style.zIndex > maxZIndex) {
    //         maxZIndex = currDiv.children[i].style.zIndex;
    //     }
    // }
    // // console.log(currDiv.children);
    // var annotateJsDiv = document.createElement("div");
    // annotateJsDiv.className = "annotateJsDiv";
    // annotateJsDiv.style.cssText = `position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.5;
    //     boxSizing: border-box; z-index: ${maxZIndex + 1}`;
    // currDiv.appendChild(annotateJsDiv);
    // annotateJsDiv.onmouseenter = function (event) {
    //     event.stopPropagation();
    //     if (currHighlightedDiv !== undefined && currHighlightedDiv !== null) {
    //         currHighlightedDiv.style.backgroundColor = "";
    //         currHighlightedDiv.style.border = "";
    //     }
    //     currHighlightedDiv = this;
    //     this.style.backgroundColor = "aqua";
    //     this.style.boxSizing = "border-box";
    //     this.style.border = "1px solid blue";
    // };
    // annotateJsDiv.onmouseleave = function (event) {
    //     event.stopPropagation();
    //     currHighlightedDiv = undefined;
    //     this.style.backgroundColor = "";
    //     this.style.border = "";
    // };
    // console.log(testVec.length);
    // }
    // function highlightElement(event){
    //   const hoverableElements = document.querySelectorAll('[data-attr]');
    //   for(let elm of hoverableElements){
    //     const styles = elm.getBoundingClientRect()
    //       if(event.currentTarget.textContent === elm.dataset.dataAttr) {
    //         let div = document.createElement('div');
    //         div.className = 'anotherClass';
    //         div.style.position = 'absolute';
    //         div.style.content = '';
    //         div.style.height = `${styles.height}px`;
    //         div.style.width = `${styles.width}px`;
    //         div.style.top = `${styles.top}px`;
    //         div.style.right = `${styles.right}px`;
    //         div.style.bottom = `${styles.bottom}px`;
    //         div.style.left = `${styles.left}px`;
    //         div.style.background = '#05f';
    //         div.style.opacity = '0.25';
    //         document.body.appendChild(div);
    //     }
    //   }
    // }
    // const allDiv = document.querySelectorAll("div");
}

//generating unique Class name to each and every element in the DOM

const assignUniqueClasses = () => {
    let allElements = document.querySelectorAll("*");
    for (let i = 0; i < allElements.length; i++) {
        allElements[i].classList.add(`AnnotateJs_${uniqueClassNameGen}_${i}`);
    }
};

assignUniqueClasses();
startRenderingReact();

let windowOnMouseOverPrevFunc, windowOnMouseDownPrevFunc;

export const closeAnnotateJsCommentBox = () => {
    // console.log("closeAnnotateJsCommentBox");
    if (document.querySelector("#AnnotateJs_CommentBoxDiv") !== null) {
        document.querySelector("#AnnotateJs_CommentBoxDiv").style.display =
            "none";
    }
    const backDropDisplayDiv = document.getElementById(
        "AnnotateJs_BackDropDisplayDiv"
    );
    backDropDisplayDiv.remove();
    enableScroll();
};

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
var supportsPassive = false;
try {
    window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
            get: function () {
                supportsPassive = true;
            },
        })
    );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

function disableScroll() {
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

function enableScroll() {
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener("touchmove", preventDefault, wheelOpt);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}

export const startAnnotation = () => {
    document.body.style.userSelect = "none";
    // window.addEventListener("mouseover", function (e) {
    //     updateMask(e.target);
    // });
    // window.addEventListener("mousedown", function (e) {
    //     console.log(e.target);
    // });
    windowOnMouseOverPrevFunc = window.onmouseover;
    windowOnMouseDownPrevFunc = window.onmousedown;
    const buttonAndLinks = document.querySelectorAll("a, button, li");
    for (let i = 0; i < buttonAndLinks.length; i++) {
        // console.log(buttonAndLinks[i]);
        buttonAndLinks[i].addEventListener("click", function (e) {
            e.preventDefault();
        });
    }
    window.onmouseover = function (e) {
        if (e.target.id === "AnnotateJs_Container") {
            return;
        }
        if (e.target.classList.contains("AnnotateJs_Component")) return;
        updateMask(e.target);
    };

    document.onclick = function (e) {
        if (e.target.classList.contains("AnnotateJs_Component")) return;
        const annotateJsCommentBoxDiv = document.getElementById(
            "AnnotateJs_CommentBoxDiv"
        );
        annotateJsCommentBoxDiv.style.display = "block";
        annotateJsCommentBoxDiv.style.transform = "translate(-50%, -50%)";
        let xPos = e.pageY;
        let yPos = e.pageX;
        if (yPos + 250 > window.innerWidth) {
            yPos -= 150;
        }
        if (yPos - 250 < 0) {
            yPos += 250;
        }
        if (e.offsetY + 200 > window.innerHeight) {
            xPos -= 100;
        }
        if (e.offsetY - 100 <= 0) {
            xPos += 100;
        }
        annotateJsCommentBoxDiv.style.top = xPos + "px";
        annotateJsCommentBoxDiv.style.left = yPos + "px";
        // console.log(e.target);
        // console.log(e.offsetY, window.innerHeight);
        // console.log(e.target.id);
        const backDropDisplayDiv = document.createElement("div");
        backDropDisplayDiv.id = "AnnotateJs_BackDropDisplayDiv";
        backDropDisplayDiv.className = "AnnotateJs_Component";
        backDropDisplayDiv.style.position = "fixed";
        backDropDisplayDiv.style.top = "0";
        backDropDisplayDiv.style.left = "0";
        backDropDisplayDiv.style.width = "100vw";
        backDropDisplayDiv.style.height = "100vh";
        backDropDisplayDiv.style.backgroundColor = "rgba(0,0,0,0.3)";
        backDropDisplayDiv.style.zIndex = "99999910";
        document.body.appendChild(backDropDisplayDiv);
        disableScroll();
    };

    window.onmousedown = function (e) {
        // e.preventDefault();
        if (e.target.classList.contains("AnnotateJs_Component")) return;
    };

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
};

export const stopAnnotation = () => {
    document.body.style.userSelect = "auto";
    window.onmouseover = windowOnMouseOverPrevFunc;
    window.onmousedown = windowOnMouseDownPrevFunc;
    let elements = document.getElementsByClassName("highlight-wrap");
    if (elements.length !== 0) {
        elements[0].remove();
    }
};

export const toogleCommentSideBar = () => {
    // console.log("toogleCommentSideBar");
    const annotateJsCommentBoxDiv = document.getElementById(
        "AnnotateJs_CommentsSideBarDiv"
    );
    const annotateJsCommentsSideBarBackDropDiv = document.getElementById(
        "AnnotateJs_CommentsSideBarBackDrop"
    );
    // console.log(annotateJsCommentBoxDiv);
    if (annotateJsCommentBoxDiv.classList.contains("showSideBoxAnnotateJs")) {
        annotateJsCommentBoxDiv.classList.remove("showSideBoxAnnotateJs");
        annotateJsCommentBoxDiv.style.right = "0";
        annotateJsCommentsSideBarBackDropDiv.style.display = "block";
    } else {
        annotateJsCommentBoxDiv.classList.add("showSideBoxAnnotateJs");
        annotateJsCommentBoxDiv.style.right = "-100%";
        annotateJsCommentsSideBarBackDropDiv.style.display = "none";
    }
};

// startAnnonatation();
