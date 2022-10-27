import { React, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./DetailMenu.css"

function DetailMenu(props) {

    return(
        <div id="detailMenu" className="DetailMenu" style={{top:`${props.navY+90}px`}}>
            <div className="detail-content row">
                <ul>
                    <ul id="menu01" style={{left:`${props.dmenu01_x}px`}}>
                        <li>공지사항</li>
                        <li>강의자료</li>
                    </ul>
                    <ul id="menu02" style={{left:`${props.dmenu02_x}px`}}>
                        <li>지원하기</li>
                        <li>수업일정</li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default DetailMenu;