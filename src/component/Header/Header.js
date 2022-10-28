import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {call, signout} from "../../service/ApiService";
import DetailMenu from "./DetailMenu";
import "./Header.css"

function Header() {
    const [isLogin, setIsLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(0);
    const [isHover, setIsHover] = useState(false);
    const [dmenu01, setDmenu01] = useState(0);
    const [dmenu02, setDmenu02] = useState(0);

    const isUserLogin = () => {
        if(localStorage.getItem("ACCESS_TOKEN") !== "null")
            setIsLogin(true);
        else setIsLogin(false);
        if(localStorage.getItem("IS_ADMIN") === "true")
            setIsAdmin(1);
        else setIsAdmin(0);
    }

    const showDetail = (e) => {
        setIsHover(true);
    }

    const hideDetail = (e) => {
        setIsHover(false);
    }

    useEffect(()=>{
        isUserLogin();
        const dmenu01 = document.getElementById('have-dmenu01');
        const dmenu02 = document.getElementById('have-dmenu02');

        const dmenu01_x = dmenu01.getBoundingClientRect().left;
        const dmenu02_x = dmenu02.getBoundingClientRect().left;

        setDmenu01(dmenu01_x);
        setDmenu02(dmenu02_x);
    })

    return(
        <div className="Header">
            <div id="navBar" className="w3-bar w3-white w3-wide w3-card">
                <div className="nav-content w3-center">
                    <Link to='/' className="navbar-brand">Logo</Link>
                    <div id="menuList" className="w3-hide-small">
                        <ul>
                            <li><Link to='/'>About us</Link></li>
                            <li><Link id="have-dmenu01"
                            onMouseOver={showDetail}
                            onMouseLeave={hideDetail}><span>게시판</span></Link></li>
                            <li><Link id="have-dmenu02"
                            onMouseOver={showDetail}
                            onMouseLeave={hideDetail}><span>수업정보</span></Link></li>
                            <li><Link><span>수강후기</span></Link></li>
                            <li><Link to='/'>Q&A</Link></li>
                            {isLogin && !isAdmin &&
                                <li className="mypage-btn" style={{float:"right", marginLeft: "40px"}}>
                                    <a href="/student">마이페이지</a>
                                </li>
                            }
                            {isLogin && isAdmin &&
                                <li className="adminpage-btn" style={{float:"right", marginLeft: "40px"}}>
                                    <a href="/admin">관리페이지</a>
                                </li>
                            }
                            {!isLogin &&
                                <li className="login-btn" style={{float:"right", marginLeft: "40px"}}>
                                    <a href="/login">로그인</a>
                                </li>
                            }
                            {isLogin &&
                                <li className="logout-btn" onClick={()=>{
                                    signout();
                                    setIsLogin(false);
                                }} style={{float:"right", marginLeft: "40px"}}>
                                    <a href="#">로그아웃</a>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {isHover && <DetailMenu navY={window.scrollY} dmenu01_x={dmenu01} dmenu02_x={dmenu02}/>}
        </div>
    )
}

export default Header;