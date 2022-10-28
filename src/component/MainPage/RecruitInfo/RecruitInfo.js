import { React, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./RecruitInfo.css"

function RecruitInfo() {
    return(
        <div className="RecruitInfo">
            <div className="recruit-content w3-display-container">
                <div className="recruit-box w3-display-middle">
                    <span>웹킷640은<br/>이런 인재를 기다립니다.</span><hr/>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="label">모집 기간</td>
                                <td className="content">2023년 -월 -일(월) ~ 2023 -월 -일(일) 오후6시</td>
                            </tr>
                            <tr>
                                <td className="label">모집 대상</td>
                                <td className="content">금오공과대학교 재학생, 휴학생, 졸업생</td>
                            </tr>
                            <tr>
                                <td className="label">모집 인원</td>
                                <td className="content">25명</td>
                            </tr>
                            <tr>
                                <td className="label">지원 자격</td>
                                <td className="content">
                                    <ul>
                                        <li>2023년 하반기에 풀타임(09:00~18:00)으로 참여할 수 있는 학생</li>
                                        <li>640시간 동안 꾸준한 출석률을 유지할 수 있는 학생</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default RecruitInfo;