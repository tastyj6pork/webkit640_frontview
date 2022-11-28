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
                            <h2>기업 수요 기반의 SW전문<br/>웹 개발 전문가 양성</h2>
                            <label>
                                현장수요에 맞는 교육과정을 기업·대학이 공동 설계하고, 기업 주도 집중교육을 통해 산업체에서 즉시 활용 가능한 인력 적기 공급을 위한 SW전문 인재 양성 사업입니다.
                                지역 SW인재양성 플랫폼 및 대학과 산업체의 지속 가능한 협업 체계로 지역산업의 SW인력 수요 대응 및 지역 청년 일자리 확대를 위한 실무 중심의 SW전문 교육을 제공합니다.
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
                                        취·창업 연계 프로그램 운영 및 아이디어 발굴 확대
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
                                    <p>교육비 전액 무료&<br/>매월 교육지원비 지급</p>
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
                                    <p>학점 인정&<br/>최대 13학점 이수</p>
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