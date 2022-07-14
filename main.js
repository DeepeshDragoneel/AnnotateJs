console.log("Hello, World!");

const allDiv = document.querySelectorAll("div");
console.log(allDiv);

let tempZIndex = 0;

for (let i = 0; i < allDiv.length; i++) {
    // allDiv[i].onmouseenter = function (event) {
    // event.stopPropagation();
    // this.style.border = "1px solid red";
    allDiv[i].style.position = "relative";
    tempZIndex = Math.max(tempZIndex + 1, allDiv[i].style.zIndex + 1);
    tempZIndex = Math.max(tempZIndex, allDiv[i].parentElement.style.zIndex + 1);
    var annotateJsDiv = document.createElement("div");
    annotateJsDiv.className = "annotateJsDiv";
    annotateJsDiv.style.cssText = `position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.5;
    boxSizing: border-box; z-index: ${tempZIndex};`;
    {
        // annotateJsDiv.style = {
        //     ...annotateJsDiv.style,
        //     position: "absolute",
        //     top: "0",
        //     left: "0",
        //     width: "100%",
        //     height: "100%",
        //     background-color: rgba(0, 0, 0, 0.5);
        //     zIndex: "1"
        // };
    }
    allDiv[i].appendChild(annotateJsDiv);
    {
        // annotateJsDiv.onmouseleave = function (event) {
        //     // event.stopPropagation();
        //     this.parentElement.removeChild(this);
        //     this.parentElement.style.border = "none";
        // }
        // };
        // allDiv[i].onmouseout = function () {
        //     this.style.border = "";
        // //     // this.removeChild(this.lastChild);
        // };
    }
}

const allCustomAnnotationJsDivs = document.querySelectorAll(".annotateJsDiv");
for (let i = 0; i < allCustomAnnotationJsDivs.length; i++) {
    allCustomAnnotationJsDivs[i].onmouseenter = function (event) {
        event.stopPropagation();
        this.style.backgroundColor = "aqua";
        this.style.boxSizing = "border-box";
        this.style.border = "1px solid blue";
    };
    allCustomAnnotationJsDivs[i].onmouseleave = function (event) {
        event.stopPropagation();
        this.style.backgroundColor = "";
        this.style.border = "";
    };
}

//Text Elements
const allTextElements = document.querySelectorAll(
    "h1, h2, h3, h4, h5, h6, p, span, li, a, button, input, textarea"
);
for (let i = 0; i < allTextElements.length; i++) {
    console.log(allTextElements[i]);
    tempZIndex = Math.max(tempZIndex + 1, allTextElements[i].style.zIndex + 1);
    allTextElements[i].style.position = "relative";
    allTextElements[i].style.zIndex = tempZIndex;
    allTextElements[i].onmouseenter = function (event) {
        event.stopPropagation();
        allTextElements[i].style.backgroundColor = "#A6FFFF";
        allTextElements[i].style.boxSizing = "border-box";
        allTextElements[i].style.border = "1px solid blue";
    };
    allTextElements[i].onmouseleave = function (event) {
        event.stopPropagation();
        allTextElements[i].style.backgroundColor = "";
        allTextElements[i].style.border = "";
    };
}
