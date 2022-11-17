import { React, useEffect, useState, useMemo, forwardRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import NivoPie from './NivoPie'
import "./About03.css"

const About03 = forwardRef((props, ref) => {
    return (
        <div className="About03" ref={ref}>
            <div className="about03-content w3-wide w3-display-container">
                <div className="about03-box w3-display-middle">
                    <div className="nivo-pie">
                        <NivoPie/>
                    </div>
                    <div className="contents">
                        <h2>교육 일정</h2>
                        <div>
                            아...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default About03;