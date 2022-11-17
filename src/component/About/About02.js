import { React, useEffect, useState, useMemo, forwardRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import "./About02.css"

const About02 = forwardRef((props, ref) => {
    return (
        <div className="About02" ref={ref}>
            <div className="about02-content w3-wide w3-display-container">
                <div className="about02-box w3-display-middle w3-center">
                    <div className="content-box">
                        <ul>
                            <div className="title w3-card title01">사업명</div>
                            <li>
                                SW 전문인재 양성사업
                            </li>
                            <div className="title w3-card title02">유형</div>
                            <li>
                                경북 네트워크형 캠퍼스 SW 아카데미
                            </li>
                            <div className="title w3-card title03">사업내용</div>
                            <li>
                                대학, 기업, 지역 SW 관련 기관이 협력하여 지역 SW 전문 인재를 양성
                            </li>
                            <div className="title w3-card title04">주관기관</div>
                            <li>
                                (재)포항테크노파크
                            </li>
                            <div className="title w3-card title05">참여기업</div>
                            <li>
                                (주)이티에듀, (주)범일정보, (주)유라클, (주)휴비즈ICT + 각 대학의 협력 기업
                            </li>
                            <div className="title w3-card title06">참여대학</div>
                            <li>
                                금오공대 외 경북 지역 대학교
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default About02;