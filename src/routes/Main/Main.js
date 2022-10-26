import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Main.css"
import Header from "../../component/Header/Header";

function Main() {

    return (
        <div className="Main">
            <Header/>
            <div id="mainContent" className="w3-display-container w3-wide">
                <header id="header" >
                    <div className="header-background"/>
                    <div className="w3-display-middle w3-margin-top w3-center">
                        <div>카운트다운</div>
                        <button className="apply-btn" href="/studentapply">지원하기</button>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Main;