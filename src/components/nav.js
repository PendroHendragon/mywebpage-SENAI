import { useState } from "react";
import Logo from "./svg-logo";

export default function Nav() {
    const [clicked, setClicked] = useState(false)
    const style = {
        backgroundColor: "#381fd1",
        color: "white"
    }
    const navColor = {
        backgroundColor: "#f6f6eb",
        borderRadius: "5px"

    }
    const buttonColor = {
        backgroundColor: "#381fd1",
        color: "white"
    }


    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">

                <a className="navbar-item" href="#">
                    <Logo />
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => { setClicked(!clicked) }}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={clicked === true ? "navbar-menu is-active" : "navbar-menu"} style={navColor}>
                <div className="navbar-start">
                    <a className="navbar-item">
                        PRICING
                    </a>

                    <a className="navbar-item">
                        BLOG
                    </a>
                    <a className="navbar-item">
                        COMMUNITY
                    </a>
                    <a className="navbar-item">
                        LIBRARY
                    </a>
                    <a className="navbar-item">
                        SUPPORT
                    </a>
                    <a className="navbar-item">
                        MAC BETA
                    </a>


                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button" style={buttonColor}>
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>


            </div>

        </nav>
    );
}