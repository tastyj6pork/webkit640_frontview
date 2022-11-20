import { React, useEffect, useState, useMemo, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { throttle } from 'lodash';
import { call } from '../../service/ApiService';
import "./Main.css"
import moment from "moment";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import ScrollNav from "../../component/MainPage/ScrollNav/ScrollNav";
import RecruitInfo from "../../component/MainPage/RecruitInfo/RecruitInfo";
import MainSchedule from "../../component/MainPage/MainSchedule/MainSchedule";
import ProcessInfo from "../../component/MainPage/ProcessInfo/ProcessInfo";
import Graduate from "../../component/MainPage/Graduate/Graduate";
import Review from "../../component/MainPage/Review/Review";
import With from "../../component/MainPage/With/With";
import Dday from "../../component/MainPage/Dday/Dday";

function Main() {
    const [isNav, setIsNav] = useState(true);
    const [isScrollNavOn, setIsScrollNavOn] = useState(false);
    const [mainPageData, setMainPageData] = useState([]);
    const mainRef = useRef(null);
    const recruitRef = useRef(null);
    const scheduleRef = useRef(null);
    const processRef = useRef(null);
    const reviewRef = useRef(null);
    const isBigScreen = useMediaQuery({query: '(min-width:1201px)'});
    const isMediumScreen = useMediaQuery({query: '(min-width:768px) and (max-width: 1200px)'});
    const isSmallScreen = useMediaQuery({query: '(max-width: 767px)'});

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
    const scrollUp = () => {
        mainRef.current?.scrollIntoView({behavior:'smooth'});
    }

    const throttledScroll = useMemo(()=>
        throttle(()=>{
            if(window.scrollY < 630){
                setIsNav(true);
                setIsScrollNavOn(false);
            }
            else {
                setIsNav(false);
                setIsScrollNavOn(true);
            }
        }, 300), [isScrollNavOn]
    );

    useEffect(()=> {
        call("/main/data", "GET").then((res)=>{
            setMainPageData(res);
        })
    },[]);

    useEffect(()=>{
        window.addEventListener('scroll', throttledScroll);
        return() => {
            window.removeEventListener('scroll', throttledScroll);
        }
    }, [throttledScroll]);

    return (
        <div className="Main" ref={mainRef}>
        {isNav && <Header isMain={true}/>}
        <div id="mainContent" className="w3-wide">
            <header id="header" className="w3-display-container">
                <div className="header-background"/>
                <div className="w3-display-middle w3-center">
                    <h2>웹킷640 {parseInt(mainPageData.completeCardinalNumber)+1}기 모집기간</h2>
                    <p>~{moment(mainPageData.recruitmentDate).format("MM")}월 {moment(mainPageData.recruitmentDate).format("DD")}일 {moment(mainPageData.recruitmentDate).format("HH")}시 까지</p>
                    <Dday endDate={mainPageData.recruitmentDate}/>
                    <button className="apply-btn"
                    onClick={()=>window.location.href="/studentapply"}>지원하기</button>
                    <button className="info-btn"
                    onClick={()=>window.location.href="/#"}>사업안내</button>
                </div>
            </header>

            {isNav && <ScrollNav isOn={isScrollNavOn}
            onRecruit={onRecruitInfoClick} onProcess={onProcessInfoClick}
            onSchedule={onMainScheduleClick} onReview={onReviewClick}/>}

            {isScrollNavOn && <ScrollNav isOn={isScrollNavOn}
            onRecruit={onRecruitInfoClick} onProcess={onProcessInfoClick}
            onSchedule={onMainScheduleClick} onReview={onReviewClick}/>}

            <RecruitInfo ref={recruitRef} mainData={mainPageData}/>
            <MainSchedule ref={scheduleRef} mainData={mainPageData}/>
            <ProcessInfo ref={processRef}/>
            <Graduate cardi={parseInt(mainPageData.completeCardinalNumber) || 10}
            graduate={parseInt(mainPageData.cumulativeStudents) || 10}
            nonmajor={parseInt(mainPageData.nonMajor) || 10}/>
            <Review ref={reviewRef}/>
            <With/>
        </div>
        <br /><br />
        <div className="outro w3-display-container">
            <div className="outro-background"/>
            <div className="w3-display-middle w3-center">
                <span>즐거운 코딩의 시작,<br/>웹킷640과 함께 하세요.</span>
                <br/><button onClick={scrollUp}>놓치지 말고 신청하세요↑</button>
            </div>
        </div>
        <Footer contact={mainPageData.contact}/>
    </div>
    )
}

export default Main;