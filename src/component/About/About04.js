import { React, useEffect, useState, useMemo, forwardRef } from "react";
import { useMediaQuery } from 'react-responsive';
import "./About04.css"

const About04 = forwardRef((props, ref) => {
    const isSmallScreen = useMediaQuery({query: '(max-width: 767px)'});
    const colors = ['rgb(66, 218, 187)', 'rgb(255, 115, 115)', 'rgb(144, 170, 255)', 'rgb(211, 248, 108)'];

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const setColor = (e) => {
        const color = getRandomColor();
        e.target.style.color = color;
    }

    const removeColor = (e) => {
        e.target.style.color = 'rgb(7, 1, 38)';
    }

    return (
        <div className="About04" ref={ref}>
            <div className="about04-content w3-wide w3-display-container">
                <div className="about04-box w3-display-middle">
                    <div className="left-content">
                        <div className="text-box">
                            <h2>수료생이 취업한 기업들</h2>
                            <label>
                                지금까지 WebKIT640을 수료한 학생들이 취업한 기업 현황을 살펴보세요.
                            </label>
                            { !isSmallScreen &&
                                <div className="rate">
                                    <div className="rate-box w3-center">
                                        <h6><b>전체 수료생 수</b></h6>
                                        <p style={{color:'rgb(255, 115, 115)'}}>{props.graduate}</p> 명
                                    </div>
                                    <div className="rate-box w3-center">
                                        <h6><b>비전공자 수</b></h6>
                                        <p style={{color:'rgb(144, 170, 255)'}}>{props.nonMajor}</p> 명
                                    </div>
                                    <div className="rate-box w3-center">
                                        <h6><b>졸업 후 취업률</b></h6>
                                        <p style={{color:'rgb(166, 214, 34)'}}>{Math.ceil((props.worker / props.graduate)*100)}</p> %
                                    </div>
                                </div>
                            }
                            { !isSmallScreen &&
                                <img src="/images/arrow.png" style={{height:'300px'}}/>
                            }
                        </div>
                    </div>
                    <div className="right-content">
                            <div className="company-list w3-card">
                                <ul>
                                    { props.company &&
                                            props.company.split("/").map((item, i)=>(
                                            <li key={i} onMouseOver={setColor}
                                            onMouseLeave={removeColor}>{item}</li>
                                        ))}
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default About04;