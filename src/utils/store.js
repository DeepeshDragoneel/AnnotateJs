import React, { useState, createContext } from "react";

export const StoreContext = createContext();

export default ({ children }) => {
    const [comments, setcomments] = useState([]);

    const addComments = (comments) => {
        setcomments((comments) => {
            // console.log(comments, res.data.comments);
            return comments.concat(res.data.comments);
        });
    };

    const store = {
        comments: comments,
        setcomments: setcomments,
        addComments: addComments,
    };

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};
