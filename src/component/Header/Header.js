import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
    const [isLogin, setIsLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(0);

    const isUserLogin = () => {
        if(localStorage.getItem("ACCESS_TOKEN") !== null)
            setIsLogin(true);
        else setIsLogin(false);
        if(localStorage.getItem("IS_ADMIN") === 1)
            setIsAdmin(true);
        else setIsAdmin(false);
    }

    const userState = () => {
        const not_Login = '<li className="login-btn">'+
        '<a href="/login">로그인</a>'+
        '</li>';

        const is_Student = '<li className="logout-btn">'+
        '<a href="/">로그아웃</a>'+
        '</li>'+
        '<li className="mypage-btn">'+
        '<a href="/student">마이페이지</a>'+
        '</li>';

        const is_Admin = '<li className="logout-btn">'+
        '<a href="/">로그아웃</a>'+
        '</li>'+
        '<li className="adminpage-btn">'+
        '<a href="/admin">관리페이지</a>'+
        '</li>'

        if(!isLogin)
            return not_Login;
        else if(isLogin && !isAdmin)
            return is_Student;
        else if(isLogin && isAdmin)
            return is_Admin;
    };

    useEffect(()=>{
        isUserLogin();
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
                            <div id="loginState" dangerouslySetInnerHTML={{__html:userState()}}></div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;