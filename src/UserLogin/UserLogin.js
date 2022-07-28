import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./UserLogin.scss";

export const UserLogin = () => {
    // const [whereToRenderLoginPage, setwhereToRenderLoginPage] = useState(
    //     document.getElementById("AnnotateJs_UserLoginPage")
    // );
    // useEffect(() => {
    //     console.log(document.getElementById("AnnotateJs_UserLoginPage"));
    // }, [document.getElementById("AnnotateJs_UserLoginPage")]);
    const [login, setLogin] = useState(true);
    const [emailId, setemailId] = useState("");
    const [passWord, setpassWord] = useState("");
    const [checkPassWord, setCheckPassWord] = useState("");
    const submitLoginDetails = async () => {
        console.log(emailId);
        console.log(passWord);
    };

    return ReactDOM.createPortal(
        <div className="UserLoginMainDiv AnnotateJs_Component wrapper">
            <div className="UserLoginContent AnnotateJs_Component">
                <header>
                    <h1 style={{ fontWeight: "normal", fontSize: "2rem" }}>
                        Welcome {login ? "Back" : ""} to
                    </h1>
                    <h1 style={{ fontWeight: "700" }}>AnnotateJs</h1>
                </header>
                <section>
                    {/* <div className="social-login">
                        <button>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google"
                                width="20"
                            />
                            <span>Google</span>
                        </button>
                        <button>
                            <img
                                src="https://cdn.freebiesupply.com/logos/large/2x/facebook-2-logo-svg-vector.svg"
                                alt="facebook"
                                width="10"
                            />
                            <span>Facebook</span>
                        </button>
                    </div> */}
                    <form action="" className="login-form">
                        <div className="input-group">
                            <label htmlFor="username">Username or Email</label>
                            <input
                                type="text"
                                placeholder="Username or Email"
                                id="username"
                                value={emailId}
                                onChange={(e) => setemailId(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                                value={passWord}
                                onChange={(e) => setpassWord(e.target.value)}
                            />
                        </div>
                        {login ? null : (
                            <div className="input-group">
                                <label htmlFor="password">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    id="password"
                                    value={checkPassWord}
                                    onChange={(e) =>
                                        setCheckPassWord(e.target.value)
                                    }
                                />
                            </div>
                        )}
                        <div className="input-group">
                            <button
                                onClick={() => {
                                    submitLoginDetails();
                                }}
                            >
                                {login ? "Login" : "Signin"}
                            </button>
                        </div>
                    </form>
                </section>
                <footer>
                    <p className="UserLoginContentFooter">
                        {login ? "Don't have an account?" : "Have an account?"}
                        <span
                            style={{ fontSize: "14px", color: "#20BDFF", cursor: "pointer" }}
                            onClick={() => {
                                setLogin((prev) => !prev);
                            }}
                        >
                            {login ? " Register" : " Login"}
                        </span>
                    </p>
                </footer>
            </div>
        </div>,
        document.getElementById("AnnotateJs_UserLoginPage")
    );
};
