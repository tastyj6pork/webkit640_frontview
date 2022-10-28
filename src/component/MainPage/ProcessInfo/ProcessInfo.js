import { React, useEffect, useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import "./ProcessInfo.css"

const ProcessInfo = forwardRef((props, ref) => {
    return(
        <div className="ProcessInfo" ref={ref}>
            <div className="process-content w3-display-container">
                <div className="process-box w3-display-middle w3-center">
                    <span>OUR PROCESS</span>
                    <h1>640시간의 웹 개발자 양성 교육</h1>
                    <p>지도교수 5인과 웹 전문 교원 2명으로 이루어진...</p>
                    <div className="code-stack-box">
                        <img className="frontend-img"/>
                        <img className="backend-img"/>
                    </div>
                    <p className="warning">※교육 일정 및 내용은 변동 될 수 있습니다.</p>
                    <button>자세히 알아보기></button>
                </div>
            </div>
        </div>
    )
})

export default ProcessInfo;