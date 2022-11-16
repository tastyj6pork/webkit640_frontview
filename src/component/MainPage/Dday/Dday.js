import { React, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { call } from '../../../service/ApiService';
import "./Dday.css"
import moment from "moment";

function Dday(props) {
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

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
                    return;
                }
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
        countDownTimer(props.endDate);
    })

    return (
        <div className="Dday">
            <div className="dday-box">
                <label className="day">{day}</label>
                <span className="day-span">일</span>
                <label className="hour">{hour}</label>
                <span>:</span>
                <label className="min">{min}</label>
                <span>:</span>
                <label className="sec">{sec < 10 ? `0${sec}` : sec}</label>
            </div>
        </div>
    )
}

export default Dday