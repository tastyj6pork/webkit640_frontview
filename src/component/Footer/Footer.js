import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
    return(
        <div className="Footer">
            <div className="footer-content w3-display-container">
                <div className="footer-box">
                    <div className="footer-contents">
                        <footer className="w3-container w3-padding-32">
                            <div className="w3-row-padding">
                                <div className="w3-third">
                                <h5>Contact</h5>
                                <p></p>
                                <p>기업교육 문의</p>
                                <p></p>
                                <p>조교 연락처</p>
                                <p style={{fontSize:"12px", color:"grey"}}>Copyrightⓒ2008 by 송민규 김제윤 김다함 강승우 </p>
                                </div>
                            
                                <div className="w3-third">
                                <h5>관련 홈페이지</h5>
                                <ul className="w3-ul">
                                    <li className="w3-padding-16">
                                    <span>금오공과대학교 컴퓨터소프트웨어공학과</span><br/>
                                    <span>
                                        <a href="https://cs.kumoh.ac.kr/cs/index.do">
                                            https://cs.kumoh.ac.kr/cs/index.do
                                        </a>
                                    </span>
                                    </li>
                                    <li className="w3-padding-16">
                                    <span>금오공과대학교 컴퓨터공학과</span><br/>
                                    <span>
                                        <a href="https://ce.kumoh.ac.kr/ce/index.do">
                                            https://ce.kumoh.ac.kr/ce/index.do
                                        </a>
                                    </span>
                                    </li> 
                                </ul>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;