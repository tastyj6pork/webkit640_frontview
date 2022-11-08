import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dday.css"

function Dday() {
    return (
        <div className="Dday">
            <div className="dday-box">
                <label className="day">00일</label>
                <label className="hour">00</label>
                <span>:</span>
                <label className="min">00</label>
                <span>:</span>
                <label className="sec">00</label>
            </div>
        </div>
    )
}

export default Dday