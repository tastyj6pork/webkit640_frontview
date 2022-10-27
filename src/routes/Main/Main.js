import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Main.css"
import Header from "../../component/Header/Header";
import ScrollHeader from "../../component/Header/ScrollHeader";

function Main() {
    const [isNav, setIsNav] = useState(true);
    const [isScrollNav, setIsScrollNav] = useState(false);

    const handleScroll = () => {
        if(window.scrollY < 800){
            setIsNav(true);
            setIsScrollNav(false);
        }
        else {
            setIsNav(false);
            setIsScrollNav(true);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className="Main">
        {isNav && <Header/>}
        {isScrollNav && <ScrollHeader/>}
        <div id="mainContent" className="w3-display-container w3-wide">
            <header id="header" >
                <div className="header-background"/>
                <div className="w3-display-middle w3-margin-top w3-center">
                    <div>카운트다운</div>
                    <button className="apply-btn"
                    onClick={()=>window.location.href="/studentapply"}>지원하기</button>
                </div>
            </header>
            <ScrollHeader/>
        </div>
    </div>
    )
}

export default Main;