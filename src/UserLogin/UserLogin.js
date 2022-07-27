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

    return ReactDOM.createPortal(
        <div className="UserLoginMainDiv AnnotateJs_Component wrapper">
            <div className="UserLoginContent AnnotateJs_Component">
                <header>
                    <h1 style={{ fontWeight: "normal", fontSize: "2rem" }}>
                        Welcome to
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
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                            />
                        </div>
                        <div className="input-group">
                            <button>Login</button>
                        </div>
                    </form>
                </section>
                <footer>
                    <a href="#" title="Forgot Password">
                        Forgot Password
                    </a>
                </footer>
            </div>
        </div>,
        document.getElementById("AnnotateJs_UserLoginPage")
    );
};
