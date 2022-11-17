import { React, useEffect, useState, useMemo, forwardRef } from "react";
import { useMediaQuery } from 'react-responsive';
import NivoPie from './NivoPie'
import "./About03.css"

const About03 = forwardRef((props, ref) => {
    const isSmallScreen = useMediaQuery({query: '(max-width: 767px)'});

    return (
        <div className="About03" ref={ref}>
            <div className="about03-content w3-wide w3-display-container">
                <div className="about03-box w3-display-middle">
                    <div className="contents">
                        <h2>수업 일정 소개 문구</h2>
                        <ul>
                            <li className="w3-card li01">SW이론교육 웹 프론트엔드(약 108시간)</li>
                            <li className="w3-card li02">SW이론교육 웹 백엔드(약 108시간)</li>
                            <li className="w3-card li03">SW이론교육 애플리케이션 - 외부 API 연동(약 24시간)</li>
                            <li className="w3-card li04">공통 프로젝트(약 40시간)</li>
                            <li className="w3-card li05">대학특화교육 (Spring Security, JPA등 스프링 고급기술)</li>
                            <li className="w3-card li06">개별 프로젝트(약 80시간)</li>
                            <li className="w3-card li07">팀 프로젝트(약 200시간)</li>
                        </ul>
                    </div>
                    {!isSmallScreen &&
                        <div className="nivo-pie">
                            <NivoPie/>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
})

export default About03;