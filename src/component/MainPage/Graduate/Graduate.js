import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Graduate.css"
import useScrollCount from "../../../hooks/useScrollHook"
import moment from "moment";

function Graduate(props) {
    const [graduation, setGnum] = useState(null);
    const [nonMajor, setNMnum] = useState(null);
    const [cardinal, setCNum] = useState(null);
    const graduateAnimate = useScrollCount(25);
    const cardinalAnimate = useScrollCount(1);
    const nonmajorAnimate = useScrollCount(3);

    useEffect(()=>{
        setGnum(props.graduate);
        setNMnum(props.nonmajor);
        setCNum(props.num);
    })

    return(
        <div className="Graduate">
            <div className="graduate-content w3-display-container">
                <div className="graduate-box w3-display-middle w3-center">
                    <h1>웹킷640과 함께한 학생들</h1>
                    <span id="graduation-box" className="img-box">
                        <img className="graduation-img" src="/images/graduate.png"/>
                        <p>누적 수강생</p>
                        <label>
                            ~<label {...cardinalAnimate}>0</label>기 <label {...graduateAnimate}>0</label>명</label>
                    </span>
                    <span id="nonmajor-box" className="img-box">
                        <img className="nonmajor-img" src="/images/book01.png"/>
                        <p>IT 비전공자 비율</p>
                        <label><label {...nonmajorAnimate}>{Math.ceil(nonMajor / graduation)}</label>%</label>
                    </span>
                    <p>{moment().format("YYYY")} {cardinal}기 웹킷640 수강생들이 무사히 프로그램을 끝마쳤습니다.
                        <br />더 나은 교육 과정과 개발된 프로그램으로 계속해서 멋진 결과를 이끌어낼 예정입니다.
                    </p>
                    <p>그 여정을 함께 할 여러분을 언제나 환영합니다.</p>
                </div>
            </div>
        </div>
    )
}

export default Graduate;