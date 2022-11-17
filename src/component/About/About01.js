import { React, useEffect, useState, useMemo, forwardRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import "./About01.css"

const About01 = forwardRef((props, ref) => {
    return (
        <div className="About01" ref={ref}>
            <div className="about01-content w3-wide w3-display-container">
                <div className="about01-box w3-display-middle">
                    <div className="left-content">
                        왼쪽 내용
                    </div>
                    <div className="right-content">
                        오른쪽 내용
                    </div>
                </div>
            </div>
        </div>
    )
})

export default About01;