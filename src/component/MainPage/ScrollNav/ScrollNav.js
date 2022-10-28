import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ScrollNav.css"

function ScrollNav(props) {
    const [isOn, setIsOn] = useState(false);

    useEffect(()=>{
        const navBar = document.getElementById("navBar");
        if(props.isOn){
            navBar.style.position='fixed';
            navBar.style.top='0px';
        }
        setIsOn(props.isOn);
    })

    return(
        <div className="ScrollNav">
            <div id="navBar" className="w3-bar w3-white w3-wide w3-card">
                <div className="nav-content">
                    <div id="menuList" className="w3-hide-small">
                        <ul>
                            <li><a className="w3-display-middle" href="/"
                            style={{backgroundColor:"rgb(196, 253, 229)"}}>모집 정보</a></li>
                            <li><a className="w3-display-middle" href="/">주요 일정</a></li>
                            <li><a className="w3-display-middle" href="/">교육 정보</a></li>
                            <li><a className="w3-display-middle" href="/">수강 후기</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrollNav;