import { React, useEffect, useState, useCallback } from "react";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import { call } from '../../../service/ApiService';
import "./Dday.css"
import moment from "moment";

function Dday(props) {
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [isStartEdu, setIsStartEdu] = useState(false);
    const isSmallScreen = useMediaQuery({query: '(max-width: 767px)'});

    const countDownTimer = useCallback((date)=>{
        let endDate = moment(date);
        let timer;

        function showTimer() {
            try {
                let todayDate = moment();
                let diffDate = endDate - todayDate;
                if(diffDate < 0){
                    clearInterval(timer);
                    setDay(0);
                    setHour(0);
                    setMin(0);
                    setSec(0);
                    setIsStartEdu(true);
                    return;
                }
                setIsStartEdu(false);
                setDay(Math.floor(diffDate / (1000*60*60*24)));
                if(Math.floor((diffDate / (1000*60*60)) % 24) < 10) setHour("0"+Math.floor((diffDate / (1000*60*60)) % 24));
                else setHour(Math.floor((diffDate / (1000*60*60)) % 24));
                if(Math.floor((diffDate / (1000*60)) % 60) < 10) setMin("0"+Math.floor((diffDate / (1000*60)) % 60))
                else setMin(Math.floor((diffDate / (1000*60)) % 60));
                setSec(Math.floor(diffDate / 1000 % 60));
            } catch(e) {console.log(e)}
        }
        timer = setInterval(showTimer,1000);
    }, [day, hour, min, sec]);

    useEffect(()=>{
        countDownTimer(props.mainData.recruitmentDate);
    })

    return (
        <div className="Dday">
            {!isStartEdu &&
                <div>
                <h2>웹킷640 {parseInt(props.mainData.completeCardinalNumber)+1}기 모집기간</h2>
                <p>~{moment(props.mainData.recruitmentDate).format("MM")}월 {moment(props.mainData.recruitmentDate).format("DD")}일 {moment(props.mainData.recruitmentDate).format("HH")}시 까지</p>
                </div>
            }
            {isStartEdu &&
                <div>
                <h2>웹킷640 {parseInt(props.mainData.completeCardinalNumber)+1}기 교육 중</h2>
                <p>다음 기수에서 만나요!</p>
                </div>
            }
            <div className="dday-box">
                <label className="day">{day}</label>
                <span className="day-span">일</span>
                <label className="hour">{hour}</label>
                <span>:</span>
                <label className="min">{min}</label>
                <span>:</span>
                <label className="sec">{sec < 10 ? `0${sec}` : sec}</label>
                {!isStartEdu && <span> 남음</span>}
            </div>
            {!isStartEdu &&
                <div>
                    <button className="apply-btn"
                    onClick={()=>window.location.href="/studentapply"}>지원하기</button>
                    {isSmallScreen && <br/>}
                    <button className="info-btn"
                    onClick={props.showModal}>사업안내</button>
                </div>
            }

        </div>
    )
}

export default Dday