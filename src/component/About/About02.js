import { React, useEffect, useState, useMemo, forwardRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import "./About02.css"

const About02 = forwardRef((props, ref) => {
    return (
        <div className="About02" ref={ref}>
            <div className="about02-content w3-wide w3-display-container">
                <div className="about02-box w3-display-middle">
                    <div className="right-content">아이우에오</div>
                </div>
            </div>
        </div>
    )
})

export default About02;