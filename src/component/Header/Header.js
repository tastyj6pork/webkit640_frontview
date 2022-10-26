import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
    return(
        <div className="Header">
            <div id="navBar" className="w3-bar w3-white w3-wide w3-card">
                <Link to='/' className="navbar-brand">Logo</Link>
                <div id="menuList" className="w3-hide-small">
                    <ul>
                        <li><Link to='/'>About us</Link></li>
                        <li><Link to='/'>게시판</Link></li>
                        <li><Link to='/'>수업정보</Link></li>
                        <li><Link to='/'>수강후기</Link></li>
                        <li><Link to='/'>Q&A</Link></li>
                        <li className="login-btn"><Link to='/login'>로그인</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;