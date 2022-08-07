import { useEffect, useState } from "react";
import axios, { Canceler } from "axios";
import { serverUrl } from "../contants";

export const LazyLoaderHook = (pagenumber) => {
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(false);
    const [comments, setcomments] = useState([]);
    const [hasMore, sethasMore] = useState();

    useEffect(() => {
        // console.log("pagenumber: ", pagenumber);
        let cancel;
        setloading(true);
        seterror(false);
        axios({
            method: "GET",
            url: `${serverUrl}/getComments`,
            params: {
                pageNumber: pagenumber,
                pageOfDomain: window.location.href,
                domain: window.location.hostname,
            },
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
            .then((res) => {
                // console.log("Hook: ", res.data.hasMore);
                setcomments((comments) => {
                    // console.log(comments, res.data.comments);
                    return comments.concat(res.data.comments);
                });
                sethasMore(res.data.hasMore);
                setloading(false);
            })
            .catch((error) => {
                if (axios.isCancel(error)) {
                    return;
                }
                console.log(error);
            });
        return () => cancel();
    }, [pagenumber]);

    return { loading, error, hasMore, comments };
};
