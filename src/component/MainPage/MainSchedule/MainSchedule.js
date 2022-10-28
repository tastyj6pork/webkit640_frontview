import { React, useEffect, useState, useMemo, forwardRef } from "react";
import { Link } from "react-router-dom";
import "./MainSchedule.css"

const MainSchedule = forwardRef((props, ref) => {
    return(
        <div className="MainSchedule" ref={ref}>
            <div className="schedule-content w3-display-container">
                <div className="schedule-box w3-display-middle">
                    <span>
                        웹킷640 참가 신청부터<br />최종 마감까지<br />주요 일정을 확인하세요.
                    </span>
                    <div className="mini-calender w3-display-container">
                        <div className="c-bar w3-display-middle"></div>
                        <div className="row">
                            <div className="col">
                                <h3>서류 접수</h3><br />
                                <p>2023년 -월 -일(월) ~<br/>-월-일(일) 오후 6시</p>
                            </div>
                            <div className="col">
                                <h3>추가 모집</h3><br />
                                <p>2023년 -월 -일(월) ~<br/>-월 -일(일) 오후 6시</p>
                            </div>
                            <div className="col">
                                <h3>최종 합격자 발표</h3><br />
                                <p>2023년 -월 -일(월)</p>
                            </div>
                            <div className="col">
                                <h3>웹킷640 시작</h3><br />
                                <p>2023년 -월 -일(월) ~</p>
                            </div>
                        </div>
                    </div>
                    <span className="warning">※추가 모집은 지원자 정원 미달 시에만 진행됩니다.</span>
                </div>
            </div>
        </div>
    )
});

export default MainSchedule;