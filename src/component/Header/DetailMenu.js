import { React, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./DetailMenu.css"

function DetailMenu(props) {

    return(
        <div id="detailMenu" className="DetailMenu" style={{top:"70px"}} onMouseLeave={props.hideDetail}>
            <div className="detail-content row">
                <ul>
                    <ul id="menu01" style={{left:`${props.dmenu01_x}px`}}>
                        <li><a href="/board">공지사항</a></li>
                        <li><a href="/lecturedata">강의자료</a></li>
                    </ul>
                    <ul id="menu02" style={{left:`${props.dmenu02_x}px`}}>
                        <li><a href={"/recruitPoster?recruitImg="+`${props.recruitImg}`}>모집안내</a></li>
                        <li><a href="/studentapply">지원하기</a></li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default DetailMenu;