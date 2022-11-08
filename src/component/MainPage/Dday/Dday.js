import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dday.css"

function Dday() {
    const [masTime, setMasTime] = useState(new Date("2022-12-25"));
    const [todayTime, setTodayTime] = useState(new Date());
    const [diffTime, setDiffTime] = useState(masTime - todayTime);
    const [day, setDay] = useState(Math.floor(diffTime / (1000*60*60*24)));
    const [hour, setHour] = useState(Math.floor((diffTime / (1000*60*60)) % 24));
    const [min, setMin] = useState(Math.floor((diffTime / (1000*60)) % 60));
    const [sec, setSec] = useState(Math.floor(diffTime / 1000 % 60));

    useEffect(()=> {
        const countDown = setInterval(()=>{
            if(parseInt(sec)>0){
                setSec(parseInt(sec)-1);
            }
            if(parseInt(sec)===0){
                if(parseInt(min)===0){
                    if(parseInt(hour)===0){
                        if(parseInt(day)===0){
                            clearInterval(countDown);
                        } else {
                            setDay(parseInt(day)-1);
                            setHour(parseInt(hour-1));
                            setMin(59);
                            setSec(59);
                        }
                    }else {
                        setMin(parseInt(min)-1);
                        setSec(59);
                    }
                    }
            }
        },1000);
    }, [day, min, sec]);


    return (
        <div className="Dday">
            <div className="dday-box">
                <label className="day">{day}일</label>
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