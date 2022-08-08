import React, { useState } from "react";

export const StoreContext = React.createContext(null);

export default ({ children }) => {
    const [comments, setcomments] = useState([]);

    const store = {
        comments: [comments, setcomments],
    };

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};
