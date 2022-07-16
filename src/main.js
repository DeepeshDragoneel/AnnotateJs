import { v4 as uuidv4 } from "uuid";
import React from "react";
import ReactDOM from "react-dom/client";
import { AnnotateStartMenu } from "./AnnotateStartMenu/AnnotateStartMenu";
import { App } from "./App";
// const uuid = require("uuid");
// import v4 from "uuid/v4";

console.log("AnnotatorJs Loaded! ✌🏻");

const startAnnotatorButtonDiv = document.createElement("div");
// startAnnotatorButtonDiv.className = `AnnotateJs_StartAnnotatorButtonDiv_${uniqueClassNameGen}`;
startAnnotatorButtonDiv.id = "AnnotateJs_StartAnnotatorButtonDiv";
startAnnotatorButtonDiv.style.position = "fixed";
startAnnotatorButtonDiv.style.bottom = "0px";
startAnnotatorButtonDiv.style.right = "50%";
// startAnnotatorButtonDiv.style.width = "100px";
// startAnnotatorButtonDiv.style.height = "100px";
// startAnnotatorButtonDiv.style.border = "1px solid blue";
startAnnotatorButtonDiv.style.transform = "translate(50%)";
// body.appendChild(startAnnotatorButtonDiv);
document.body.appendChild(startAnnotatorButtonDiv);
// const tempppp = document.createElement("div");
// tempppp.className = `AnnotateJs_StartAnnotatorButtonDiv_${uniqueClassNameGen}`;
// tempppp.style.position = "fixed";
// tempppp.style.top = "50%";
// tempppp.style.right = "50%";
// tempppp.style.width = "100px";
// tempppp.style.height = "100px";
// tempppp.style.border = "1px solid blue";
// tempppp.style.transform = "translate(0%, -50%)";
// // body.appendChild(startAnnotatorButtonDiv);
// document.body.appendChild(tempppp);

// ReactDOM.render(<AnnotateStartMenu />, tempppp);
// ReactDOM.createPortal(<AnnotateStartMenu />, startAnnotatorButtonDiv);
// ReactDOM.createPortal(<AnnotateStartMenu />, startAnnotatorButtonDiv);
// ReactDOM.createRoot(startAnnotatorButtonDiv).render(<App/>);
ReactDOM.createRoot(startAnnotatorButtonDiv).render(<App />);

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

const startAnnonatation = () => {
    // document.pointerEvents = "none";
    // document.body.style.pointerEvents = "none";
    document.body.style.userSelect = "none";
    window.addEventListener("mouseover", function (e) {
        updateMask(e.target);
    });

    window.addEventListener("mousedown", function (e) {
        console.log(e.target);
    });

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
                console.log("mousedown");
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
