import { React, useEffect, useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { throttle, debounce } from 'lodash';
import "./Main.css"
import Header from "../../component/Header/Header";
import ScrollNav from "../../component/MainPage/ScrollNav/ScrollNav";
import RecruitInfo from "../../component/MainPage/RecruitInfo/RecruitInfo";
import MainSchedule from "../../component/MainPage/MainSchedule/MainSchedule";
import ProcessInfo from "../../component/MainPage/ProcessInfo/ProcessInfo";
import Graduate from "../../component/MainPage/Graduate/Graduate";
import Review from "../../component/MainPage/Review/Review";
import With from "../../component/MainPage/With/With";
import Footer from "../../component/Footer/Footer";

function Main() {
    const [isNav, setIsNav] = useState(true);
    const [isScrollNavOn, setIsScrollNavOn] = useState(false);
    //const [scrollY, setScrollY] = useState(window.scrollY);
    const recruitRef = useRef(null);
    const scheduleRef = useRef(null);
    const processRef = useRef(null);
    const reviewRef = useRef(null);

    const handleScroll = () => {
        //setScrollY(window.scrollY);
        if(window.scrollY < 800){
            setIsNav(true);
            setIsScrollNavOn(false);
        }
        else {
            setIsNav(false);
            setIsScrollNavOn(true);
        }
    }
    /* [김다함]: Scroll Event 함수 실행 최소화 방법... 추가 공부 필요
    const throttleScroll  = useMemo(()=>
        throttle(()=>{
            console.log("scroll");
        }, 300),
    );
        */

    const onRecruitInfoClick = () => {
        recruitRef.current?.scrollIntoView({behavior:'smooth'});
    }

    const onMainScheduleClick = () => {
        scheduleRef.current?.scrollIntoView({behavior:'smooth'});
    }

    const onProcessInfoClick = () => {
        processRef.current?.scrollIntoView({behavior:'smooth'});
    }

    const onReviewClick = () => {
        reviewRef.current?.scrollIntoView({behavior:'smooth'});
    }

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

            {isNav && <ScrollNav isOn={isScrollNavOn}
            onRecruit={onRecruitInfoClick} onProcess={onProcessInfoClick}
            onSchedule={onMainScheduleClick} onReview={onReviewClick}/>}

            {isScrollNavOn && <ScrollNav isOn={isScrollNavOn}
            onRecruit={onRecruitInfoClick} onProcess={onProcessInfoClick}
            onSchedule={onMainScheduleClick} onReview={onReviewClick}/>}

            <RecruitInfo ref={recruitRef}/>
            <MainSchedule ref={scheduleRef}/>
            <ProcessInfo ref={processRef}/>
            <Graduate/>
            <Review ref={reviewRef}/>
            <With/>
        </div>
        <div className="empty-space"></div>
        <Footer/>
    </div>
    )
}

export default Main;