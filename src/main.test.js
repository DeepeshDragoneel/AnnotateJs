import {
    startRenderingReact,
    initializeAnnotateJs,
    closeAnnotateJsCommentBox,
    stopAnnotation,
    displayHelpDiv,
    closeAnnotateJsHelpDiv,
    toogleCommentSideBar,
} from "./main.js";
import "@testing-library/jest-native/extend-expect";
import { toHaveStyle } from "@testing-library/jest-native/dist/to-have-style";
import { App } from "./App.js";
import { createRoot } from "react-dom/client";
expect.extend({ toHaveStyle });

test("React has started Rendering", () => {
    startRenderingReact();
    const helpDiv = document.getElementById("AnnotateJs_HelpDiv");
    expect(helpDiv).toBeTruthy();
    expect(helpDiv.style.display).toBe("none");
    expect(helpDiv.style.position).toBe("fixed");
    expect(helpDiv.style.top).toBe("0px");
    expect(helpDiv.style.left).toBe("0px");
    expect(helpDiv.style.width).toBe("100vw");
    expect(helpDiv.style.height).toBe("100vh");
    expect(helpDiv.style.backgroundColor).toBe("rgba(0, 0, 0, 0.3)");
    expect(helpDiv.style.zIndex).toBe("99999991");
    const commentBoxDiv = document.getElementById("AnnotateJs_CommentBoxDiv");
    expect(commentBoxDiv).toBeTruthy();
    expect(commentBoxDiv.style.position).toBe("absolute");
    expect(commentBoxDiv.style.display).toBe("none");
    expect(commentBoxDiv.style.zIndex).toBe("99999992");
    expect(commentBoxDiv.style.backgroundColor).toBe("white");

    const annotatorMenuDiv = document.getElementById(
        "AnnotateJs_StartAnnotatorButtonDiv"
    );
    expect(annotatorMenuDiv).toBeTruthy();
    expect(annotatorMenuDiv.style.position).toBe("fixed");
    expect(annotatorMenuDiv.style.bottom).toBe("0px");
    expect(annotatorMenuDiv.style.right).toBe("50%");
    expect(annotatorMenuDiv.style.transform).toBe("translate(50%)");
    expect(annotatorMenuDiv.style.zIndex).toBe("99999990");
});

test("Close AnnotateJs Comment Box", () => {
    closeAnnotateJsCommentBox();
    const commentBoxDiv = document.getElementById("AnnotateJs_CommentBoxDiv");
    expect(commentBoxDiv).toBeTruthy();
    expect(commentBoxDiv.style.display).toBe("none");
});

test("Display Help Div", () => {
    displayHelpDiv();
    const helpDiv = document.getElementById("AnnotateJs_HelpDiv");
    expect(helpDiv).toBeTruthy();
    expect(helpDiv.style.display).toBe("flex");
    expect(helpDiv.style.justifyContent).toBe("center");
    expect(helpDiv.style.alignItems).toBe("center");
});

test("Close AnnotateJs Help Div", () => {
    closeAnnotateJsHelpDiv();
    const helpDiv = document.getElementById("AnnotateJs_HelpDiv");
    expect(helpDiv).toBeTruthy();
    expect(helpDiv.style.display).toBe("none");
});

test("Stop Annotation", () => {
    stopAnnotation();
    expect(document.body.style.userSelect).toBe("auto");
    expect(document.onclick).toEqual(null);
});

test("App Renders without Crashing", () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(<App />);
    root.unmount();
});

test("Toggling of comments bar", () => {
    toogleCommentSideBar();
    const annotateJsCommentBoxDiv = document.getElementById(
        "AnnotateJs_CommentsSideBarDiv"
    );
    const annotateJsCommentsSideBarBackDropDiv = document.getElementById(
        "AnnotateJs_CommentsSideBarBackDrop"
    );
    expect(annotateJsCommentBoxDiv).toBeTruthy();
    expect(
        annotateJsCommentBoxDiv.classList.contains("showSideBoxAnnotateJs")
    ).toBeFalsy();
    expect(annotateJsCommentsSideBarBackDropDiv).toBeTruthy();
    expect(annotateJsCommentsSideBarBackDropDiv.style.display).toBe("block");
    toogleCommentSideBar();
    expect(
        annotateJsCommentBoxDiv.classList.contains("showSideBoxAnnotateJs")
    ).toBeTruthy();
    expect(annotateJsCommentsSideBarBackDropDiv.style.display).toBe("none");
});
