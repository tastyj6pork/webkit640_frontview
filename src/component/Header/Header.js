import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {call, signout} from "../../service/ApiService";
import "./Header.css"

function Header() {
    const [isLogin, setIsLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(0);
    
    const isUserLogin = () => {
        console.log(localStorage.getItem("ACCESS_TOKEN"));
        if(localStorage.getItem("ACCESS_TOKEN") !== "null")
            setIsLogin(true);
        else setIsLogin(false);
        if(localStorage.getItem("IS_ADMIN") === 1)
            setIsAdmin(true);
        else setIsAdmin(false);
    }

    useEffect(()=>{
        console.log("Did Mount!");
        isUserLogin();
        console.log(isLogin);
    })

    return(
        <div className="Header">
            <div id="navBar" className="w3-bar w3-white w3-wide w3-card">
                <div className="nav-content w3-center">
                    <Link to='/' className="navbar-brand">Logo</Link>
                    <div id="menuList" className="w3-hide-small">
                        <ul>
                            <li><Link to='/'>About us</Link></li>
                            <li><Link to='/'>게시판</Link></li>
                            <li><Link to='/'>수업정보</Link></li>
                            <li><Link to='/'>수강후기</Link></li>
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
                                    <a>로그아웃</a>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;