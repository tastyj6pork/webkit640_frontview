import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {call, signout} from "../../service/ApiService";
import DetailMenu from "./DetailMenu";
import "./Header.css"

function Header(props) {
    const [isLogin, setIsLogin] = useState(true);
    const [isAdmin, setIsAdmin] = useState(0);
    const [isClick, setIsClick] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [dmenu01, setDmenu01] = useState(0);
    const [dmenu02, setDmenu02] = useState(0);
    const [duser, setDuser] = useState(0);
    const username = localStorage.getItem("USER_NAME");

    const isUserLogin = () => {
        if(localStorage.getItem("ACCESS_TOKEN") !== "null")
            setIsLogin(true);
        else setIsLogin(false);
        if(localStorage.getItem("IS_ADMIN") === "true")
            setIsAdmin(1);
        else setIsAdmin(0);
    }

    const showDetail = (e) => {
        if(isClick) setIsClick(false);
        else setIsClick(true);
    }

    const showMypage = (e) => {
        setIsHover(true);
    }

    const hideMypage = (e) => {
        setIsHover(false);
    }

    useEffect(()=>{
        //isUserLogin();
        const dmenu01 = document.getElementById('have-dmenu01');
        const dmenu02 = document.getElementById('have-dmenu02');
        const duser = document.getElementById('welcome');

        const dmenu01_x = dmenu01.getBoundingClientRect().left;
        const dmenu02_x = dmenu02.getBoundingClientRect().left;
        const duser_x = duser.getBoundingClientRect().left;

        setDmenu01(dmenu01_x);
        setDmenu02(dmenu02_x);
        setDuser(duser_x);
    })

    return(
        <div className="Header">
            <div id="navBarIncludeDetail">
                <div id="navBar" className="w3-bar w3-white w3-wide w3-card">
                    <div className="nav-content w3-center">
                        <Link to='/' className="navbar-brand">Logo</Link>
                        <div id="menuList" className="w3-hide-small">
                            <ul>
                                <li><Link to='/'>About us</Link></li>
                                <li><Link id="have-dmenu01"
                                onClick={showDetail}><span>게시판</span></Link></li>
                                <li><Link id="have-dmenu02"
                                onClick={showDetail}><span>수업정보</span></Link></li>
                                <li><Link><span>수강후기</span></Link></li>
                                <li><Link to='/'>Q&A</Link></li>
                                {isLogin && !isAdmin &&
                                    <li className="mypage-btn" style={{float:"right", marginLeft: "40px"}}>
                                        <p onMouseOver={showMypage} id="welcome">
                                            어서오세요, {username}님
                                        </p>
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
                {isClick && <DetailMenu navY={window.scrollY} dmenu01_x={dmenu01} dmenu02_x={dmenu02}/>}

                {isLogin && !isAdmin && isHover &&
                    <div id="userDetailMenu" style={{top:`${window.scrollY+90}px `, left:`${duser}px`}}
                    onMouseLeave={hideMypage}>
                        <ul>
                            <li><a href="/student">마이페이지</a></li>
                            <li><a href="/">회원정보</a></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header;