import { React, useEffect, useState, useMemo, forwardRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import "./RecruitInfo.css"
import moment from "moment";

const RecruitInfo = forwardRef((props, ref) => {
    const [recruitDate, setRecruitDate] = useState(null);
    const [recruitTarget, setRecruitTarget] = useState(null);
    const [totalRecruitment, setTotalRecruitment] = useState(null);
    const [eligibility, setEligibility] = useState(null);
    const isBigScreen = useMediaQuery({query: '(min-width:1201px)'});
    const isMediumScreen = useMediaQuery({query: '(min-width:768px) and (max-width: 1200px)'});
    const isSmallScreen = useMediaQuery({query: '(max-width: 767px)'});

    useEffect(()=>{
        setRecruitDate(props.mainData.recruitmentDate);
        setRecruitTarget(props.mainData.recruitmentTarget);
        setTotalRecruitment(props.mainData.totalRecruitment);
        setEligibility(props.mainData.eligibility);
    })

    return(
        <div className="RecruitInfo" id="recruit" ref={ref}>
            <div className="recruit-content w3-display-container">
                <div className="recruit-box w3-display-middle">
                    <span>웹킷640은<br/>이런 인재를 기다립니다.</span><hr/>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="label">모집 기간
                                {isSmallScreen &&
                                    <div>
                                        <br />~ {moment(recruitDate).format("YYYY")}년 {moment(recruitDate).format("MM")}월 {moment(recruitDate).format("DD")}일(일) {moment(recruitDate).format("HH")}시
                                    </div>
                                }</td>
                                { (isBigScreen || isMediumScreen) &&
                                <td className="content">~ {moment(recruitDate).format("YYYY")}년 {moment(recruitDate).format("MM")}월 {moment(recruitDate).format("DD")}일(일) {moment(recruitDate).format("HH")}시</td>
                                }
                            </tr>
                            <tr>
                                <td className="label">모집 대상
                                {isSmallScreen &&
                                    <div>
                                        <br />{recruitTarget}
                                    </div>
                                }</td>
                                { (isBigScreen || isMediumScreen) &&
                                <td className="content">{recruitTarget}</td>
                                }
                            </tr>
                            <tr>
                                <td className="label">모집 인원
                                {isSmallScreen &&
                                    <div>
                                        <br />{totalRecruitment}
                                    </div>
                                }</td>
                                { (isBigScreen || isMediumScreen) &&
                                <td className="content">{totalRecruitment}</td>
                                }
                            </tr>
                            <tr>
                                <td className="label">지원 자격
                                {isSmallScreen &&
                                    <ul>
                                        {eligibility.split(".").map((item, i)=>(
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                }</td>
                                { (isBigScreen || isMediumScreen) &&
                                <td className="content">
                                    <ul>
                                        <li>2023년 하반기에 풀타임(09:00~18:00)으로 참여할 수 있는 학생</li>
                                        <li>640시간 동안 꾸준한 출석률을 유지할 수 있는 학생</li>
                                    </ul>
                                </td>
                                }
                            </tr>
                            <tr className="btn-row">
                                { (isBigScreen||isMediumScreen) && 
                                    <td></td>
                                }
                                <td>
                                    <button className="more-btn">MORE ></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
})

export default RecruitInfo;