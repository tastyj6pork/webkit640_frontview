import { React, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { throttle, debounce } from 'lodash';
import "./Main.css"
import Header from "../../component/Header/Header";
import ScrollNav from "../../component/MainPage/ScrollNav/ScrollNav";
import RecruitInfo from "../../component/MainPage/RecruitInfo/RecruitInfo";
import MainSchedule from "../../component/MainPage/MainSchedule/MainSchedule";

function Main() {
    const [isNav, setIsNav] = useState(true);
    const [isScrollNavOn, setIsScrollNavOn] = useState(false);

    const handleScroll = () => {
        if(window.scrollY < 860){
            setIsNav(true);
            setIsScrollNavOn(false);
        }
        else {
            setIsNav(false);
            setIsScrollNavOn(true);
        }
    }
    /*
    const throttleScroll  = useMemo(()=>
        throttle(()=>{
            console.log("scroll");
        }, 300),
    );
        */
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    return (
        <div className="Main">
        {isNav && <Header/>}
        <div id="mainContent" className="w3-wide">
            <header id="header" className="w3-display-container">
                <div className="header-background"/>
                <div className="w3-display-middle w3-center">
                    <div>카운트다운</div>
                    <button className="apply-btn"
                    onClick={()=>window.location.href="/studentapply"}>지원하기</button>
                </div>
            </header>
            <div style={{height:"60px"}}></div>
            {isNav && <ScrollNav isOn={isScrollNavOn}/>}
            {isScrollNavOn && <ScrollNav isOn={isScrollNavOn}/>}
            <RecruitInfo/>
            <MainSchedule/>
        </div>
    </div>
    )
}

export default Main;