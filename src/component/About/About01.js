import { React, useEffect, useState, useMemo, forwardRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import "./About01.css"

const About01 = forwardRef((props, ref) => {
    const isSmallScreen = useMediaQuery({query: '(max-width: 767px)'});

    return (
        <div className="About01" ref={ref}>
            <div className="about01-content w3-wide w3-display-container">
                <div className="about01-box w3-display-middle">
                    <div className="left-content">
                        <div className="text-box">
                            <p>OUR PURPOSE</p>
                            <h2>We Provide Best Virtual Assistant Services</h2>
                            <label>
                                We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </label>
                            { !isSmallScreen &&
                                <ul>
                                    <li>
                                        <img src="/images/check.png"/>
                                        640시간의 집중교육을 통해 웹 개발자로 성장하여 취업까지 성공
                                    </li>
                                    <li>
                                        <img src="/images/check.png"/>
                                        기업 현장의 프로젝트 수행역량을 갖춘 좋은 개발자를 양성
                                    </li>
                                    <li>
                                        <img src="/images/check.png"/>
                                        음...
                                    </li>
                                </ul>
                            }

                        </div>
                    </div>
                    <div className="right-content">
                        <div className="grid-container">
                            <div class="grid-item">
                                <div className="white-box w3-card w3-center">
                                    <img src="/images/money.png"/>
                                    <p>교육비 전액 무료&<br/>매월 30만원의 지원비</p>
                                    <div className="circle">1</div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div className="white-box w3-card w3-center">
                                    <img src="/images/vision.png"/>
                                    <p>기업 참여 프로젝트&<br/>결과물을 통한 취업 연계</p>
                                    <div className="circle">2</div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div className="white-box w3-card w3-center">
                                    <img src="/images/people.png"/>
                                    <p>5인 구성 지도교수&<br/>웹 전문 교원 2명</p>
                                    <div className="circle">3</div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div className="white-box w3-card w3-center">
                                    <img src="/images/point.png"/>
                                    <p>학점 인정&<br/>최대 10학점 이수</p>
                                    <div className="circle">4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default About01;