import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

function Footer(props) {
    const [assistantPhone, setAssistantPhone] = useState(null);

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
                                <p>담당자 연락처 {props.contact}</p>
                                <p>{assistantPhone}</p>
                                <p style={{fontSize:"12px", color:"grey"}}>Copyrightⓒ2022 by WebKIT 1기 송민규 김제윤 김다함 강승우 </p>
                                </div>

                                <div className="w3-third">
                                <h5>관련 홈페이지</h5>
                                <ul className="w3-ul">
                                    <li className="w3-padding-16">
                                    <span>금오공과대학교</span><br/>
                                    <span>
                                        <a href="https://www.kumoh.ac.kr">
                                            https://www.kumoh.ac.kr
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