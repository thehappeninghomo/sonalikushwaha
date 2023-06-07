import React from "react";

function Nav({profileImage}) {

    return (
        <div className="sticky-top" id="navbarSection">
            <nav className="navbar navbar-expand-lg navbar-light w-100 shadow" data-spy="affix" data-offset-top="197">
                <div className="container">
                    <a className="navbar-brand" href="#home">
                        <img src={profileImage} className="img-fluid rounded-pill d-inline-block align-top me-2" alt="avatar" width="50" height="50"/>
                        SonaliK
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>   
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#aboutSection">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#resumeSection">Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contactSection">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
