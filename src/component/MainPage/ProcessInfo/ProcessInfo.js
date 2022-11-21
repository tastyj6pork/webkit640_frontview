import { React, useEffect, useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import "./ProcessInfo.css"

const ProcessInfo = forwardRef((props, ref) => {
    const isBigScreen = useMediaQuery({query: '(min-width:1201px)'});
    const isMediumScreen = useMediaQuery({query: '(min-width:768px) and (max-width: 1200px)'});
    const isSmallScreen = useMediaQuery({query: '(max-width: 767px)'});
    const frontend_process = useState(["HTML", "CSS", "JavaScript", "React"]);
    const backend_process = useState(["Nodejs", "Express", "Springboot", "JPA"])

    return(
        <div className="ProcessInfo" ref={ref}>
            <div className="process-content w3-display-container">
                <div className="process-box w3-display-middle w3-center">
                    <span>OUR PROCESS</span>
                    <h1>640시간의 웹 개발자 양성 교육</h1>
                    <span>지도교수 5인과 웹 전문 교원 2명으로 이루어진 교육생 집중 관리 시스템</span>
                    <div className="code-stack-box">
                        <div className="frontend-process">
                            <div className="process-content">
                                <p>프론트앤드</p>
                                <div className="process-content-box">
                                    {frontend_process[0].map((item, i)=>(
                                        <div className="process-item" key={i}>#{item}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="backend-process">
                            <div className="process-content">
                                <p>백앤드</p>
                                <div className="process-content-box">
                                    {backend_process[0].map((item, i)=>(
                                        <div className="process-item" key={i}>#{item}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="warning">※교육 일정 및 내용은 변동 될 수 있습니다.</p>
                    <button className="more-info">자세히 알아보기></button>
                </div>
            </div>
        </div>
    )
})

export default ProcessInfo;