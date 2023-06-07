import React from "react";

function Header() {

    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="header-info">
                        <div>
                            <div class="talk-bubble rounded-pill">
                                <div class="talktext">
                                    <p className="p-3">Hello, I'm</p>
                                </div>
                            </div>
                            <h1 class="display-1">Sonali Kushwaha</h1>  
                            <h2>Front End Developer</h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
