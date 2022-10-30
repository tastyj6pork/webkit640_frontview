import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ScrollNav.css"

function ScrollNav(props) {
    const [isOn, setIsOn] = useState(false);
    const menuList = document.getElementById('menuList');

    const onClickEvent = (e) => {
        const lis = menuList.getElementsByTagName("li");
        for(let i=0; i<menuList.childElementCount; i++){
            lis[i].childNodes[0].style.backgroundColor = "white";
        }
        e.target.style.backgroundColor = "rgb(196, 253, 229)";
        switch(e.target.id){
            case 'recruit':
                props.onRecruit();
                break;
            case 'schedule':
                props.onSchedule();
                break;
            case 'process':
                props.onProcess();
                break;
            case 'review':
                props.onReview();
                break;
            default:
        }
    }

    useEffect(()=>{
        const navBar = document.getElementById("navBar");
        if(props.isOn){
            navBar.style.position='fixed';
        }
        else {
            //navBar.style.position='relative';
        }
        setIsOn(props.isOn);
    })

    return(
        <div className="ScrollNav">
            <div id="navBar" className="w3-bar w3-white w3-wide w3-card">
                <div className="nav-content">
                        <ul id="menuList">
                            <li><button className="w3-display-middle"
                            style={{backgroundColor:"rgb(196, 253, 229)"}}
                            onClick={onClickEvent}
                            id="recruit">모집 정보</button></li>
                            <li><button className="w3-display-middle"
                            onClick={onClickEvent}
                            id="schedule">주요 일정</button></li>
                            <li><button className="w3-display-middle" onClick={onClickEvent}
                            id="process">교육 정보</button></li>
                            <li><button className="w3-display-middle" onClick={onClickEvent}
                            id="review">수강 후기</button></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default ScrollNav;