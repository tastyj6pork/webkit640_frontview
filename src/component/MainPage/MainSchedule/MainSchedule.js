import { React, useEffect, useState, useMemo, forwardRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import "./MainSchedule.css"
import moment from "moment";

const MainSchedule = forwardRef((props, ref) => {
    const [recruitDate, setRecruitDate] = useState(null);
    const [additionalDate, setAdditionalDate] = useState(null);
    const [passDate, setPassDate] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const isBigScreen = useMediaQuery({query: '(min-width:1201px)'});
    const isMediumScreen = useMediaQuery({query: '(min-width:768px) and (max-width: 1200px)'});
    const isSmallScreen = useMediaQuery({query: '(max-width: 767px)'});

    useEffect(()=>{
        setRecruitDate(props.mainData.documentSubmissionPeriod);
        setAdditionalDate(props.mainData.additionalRecruitmentPeriod);
        setPassDate(props.mainData.passAnnouncementDate);
        setStartDate(props.mainData.trainingStartDate);
    })

    return(
        <div className="MainSchedule" ref={ref}>
            <div className="schedule-content w3-display-container">
                <div className="schedule-box w3-display-middle">
                    <span>
                        웹킷640 참가 신청부터<br />최종 마감까지<br />주요 일정을 확인하세요.
                    </span>
                    <div className="mini-calender w3-display-container">
                        { (isBigScreen || isMediumScreen) &&
                        <div>
                            <div className="c-bar w3-display-middle"></div>
                            <div className="row">
                                <div className="col">
                                    <h3>서류 접수</h3><br />
                                    <label>~ {moment(recruitDate).format("YYYY")}년 {moment(recruitDate).format("MM")}월{moment(recruitDate).format("DD")}일 {moment(recruitDate).format("HH")}시</label>
                                </div>
                                <div className="col">
                                    <h3>추가 모집</h3><br />
                                    { moment(additionalDate).format("YYYY") !== 'Invalid date' && 
                                        <label>
                                            ~ {moment(additionalDate).format("YYYY")}년 {moment(additionalDate).format("MM")}월{moment(additionalDate).format("DD")}일 {moment(recruitDate).format("HH")}시
                                        </label>
                                    }
                                    { moment(additionalDate).format("YYYY") === 'Invalid date' &&
                                        <label>―</label>
                                    }
                                </div>
                                <div className="col">
                                    <h3>최종 합격자 발표</h3><br />
                                    <label>{moment(passDate).format("YYYY")}년 {moment(passDate).format("MM")}월{moment(passDate).format("DD")}일 {moment(passDate).format("HH")}시</label>
                                </div>
                                <div className="col">
                                    <h3>웹킷640 시작</h3><br />
                                    <label>{moment(startDate).format("YYYY")}년 {moment(startDate).format("MM")}월{moment(startDate).format("DD")}일 ~</label>
                                </div>
                            </div>
                        </div>
                        }
                        { isSmallScreen &&
                            <div>
                                <div className="row">
                                <div className="col">
                                    <h3>서류 접수</h3>
                                    <label>~ {moment(recruitDate).format("YYYY")}년 {moment(recruitDate).format("MM")}월{moment(recruitDate).format("DD")}일 {moment(recruitDate).format("HH")}시</label>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col">
                                    <h3>추가 모집</h3>
                                    <label>~ {moment(additionalDate).format("YYYY")}년 {moment(additionalDate).format("MM")}월{moment(additionalDate).format("DD")}일 {moment(recruitDate).format("HH")}시</label>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col">
                                    <h3>최종 합격자 발표</h3>
                                    <label>{moment(passDate).format("YYYY")}년 {moment(passDate).format("MM")}월{moment(passDate).format("DD")}일 {moment(passDate).format("HH")}시</label>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col">
                                    <h3>웹킷640 시작</h3>
                                    <label>{moment(startDate).format("YYYY")}년 {moment(startDate).format("MM")}월{moment(startDate).format("DD")}일 ~</label>
                                </div>
                                </div>
                            </div>
                        }
                    </div>
                    <span className="warning">※추가 모집은 지원자 정원 미달 시에만 진행됩니다.</span>
                </div>
            </div>
        </div>
    )
});

export default MainSchedule;