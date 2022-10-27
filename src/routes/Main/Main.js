import { React, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { throttle, debounce } from 'lodash';
import "./Main.css"
import Header from "../../component/Header/Header";
import ScrollHeader from "../../component/Header/ScrollHeader";

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
            {isNav && <ScrollHeader isOn={isScrollNavOn}/>}
            {isScrollNavOn && <ScrollHeader isOn={isScrollNavOn}/>}
        </div>
    </div>
    )
}

export default Main;