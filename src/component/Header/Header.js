import { React, useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import { signout} from "../../service/ApiService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import DetailMenu from "./DetailMenu";
import HideMenu from "./HideMenu";
import "./Header.css"

function Header() {
    const [isLogin, setIsLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(0);
    const [isClick, setIsClick] = useState(false);
    const [isHideClick, setIsHideClick] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [dmenu01, setDmenu01] = useState(0);
    const [dmenu02, setDmenu02] = useState(0);
    const [duser, setDuser] = useState(0);
    const [username, setUsername] = useState(null);
    const [userpage, setUserpage] = useState(null);

    const isBigScreen = useMediaQuery({query: '(min-width:1201px)'});
    const isMediumScreen = useMediaQuery({query: '(min-width:768px) and (max-width: 1200px)'});
    const isSmallScreen = useMediaQuery({query: '(max-width: 767px)'});

    const isUserLogin = () => {
        if(localStorage.getItem("ACCESS_TOKEN") !== "null"){
            setIsLogin(true);
            setUsername(localStorage.getItem("USER_NAME"));
            setUserpage("마이페이지");
        }
        else setIsLogin(false);
        if(localStorage.getItem("IS_ADMIN") === "true"){
            setIsAdmin(1);
            setUserpage("관리페이지");
        }
        else setIsAdmin(0);
    }

    const showDetail = (e) => {
        if(isClick) setIsClick(false);
        else setIsClick(true);
    }
    
    const hideDetail = (e) => {
        setIsClick(false);
    }

    const showMypage = (e) => {
        setIsHover(true);
    }

    const hideMypage = (e) => {
        setIsHover(false);
    }

    const showHideMenu = (e) => {
        if(isHideClick) setIsHideClick(false);
        else setIsHideClick(true);
    }

    const sign_out = () => {
        signout();
        setIsLogin(false);
    }

    const goMypage = () => {
        if(isAdmin) window.location.href = "/admin";
        else window.location.href = "/student";
    }

    useEffect(()=>{
        isUserLogin();
        let dmenu01 = document.getElementById('have-dmenu01');
        let dmenu02 = document.getElementById('have-dmenu02');
        let duser = null;
        let duser_x = null;

        if(isLogin && isBigScreen){
            duser = document.getElementById('welcome');
            duser_x = duser.getBoundingClientRect().left;
            setDuser(duser_x);
        }
        if(isBigScreen){
            let dmenu01_x = dmenu01.getBoundingClientRect().left;
            let dmenu02_x = dmenu02.getBoundingClientRect().left;
            setDmenu01(dmenu01_x);
            setDmenu02(dmenu02_x);
        }
    })

    const ReviewInsert = () => {
        window.location.href="/review"
    }

    return(
        <div className="Header">
            <div id="navBarIncludeDetail">
                <div id="navBar" className="w3-bar w3-wide ">
                    <div className="nav-content">
                        <Link to='/' className="navbar-brand"></Link>
                        {isBigScreen &&
                            <div id="menuList" className="w3-center w3-hide-small w3-hide-medium">
                                <ul>
                                    <li><Link to='/'>About us</Link></li>
                                    <li><Link id="have-dmenu01"
                                    onClick={showDetail}><span>게시판 ∨</span></Link></li>
                                    <li><Link id="have-dmenu02"
                                    onClick={showDetail}><span>모집정보 ∨</span></Link></li>
                                    <li><Link><span onClick={ReviewInsert}>수강후기</span></Link></li>
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
                                    {isLogin &&
                                        <li className="mypage-btn" style={{float:"right", marginLeft: "40px"}}>
                                            <p onMouseOver={showMypage} id="welcome">
                                                어서오세요, {username} 님
                                            </p>
                                        </li>
                                    }
                                </ul>
                            </div>
                        }
                        {(isMediumScreen || isSmallScreen) &&
                            <div className="hide-menu">
                                <button className="hide-menu-btn"
                                onClick={showHideMenu}>
                                    <FontAwesomeIcon icon={faBars} size="2x"/>
                                </button>
                            </div>
                        }
                    </div>
                    { isBigScreen && isLogin && isHover &&
                        <div id="userDetailMenu"
                        style={{top:'55px', left:`${duser}px`}}
                        onMouseLeave={hideMypage}>
                            <ul>
                                <li><button onClick={goMypage}>{userpage}</button></li>
                                <li><a href="/">회원정보</a></li>
                            </ul>
                        </div>
                    }
                    { isBigScreen && isClick &&
                    <DetailMenu dmenu01_x={dmenu01} dmenu02_x={dmenu02} hideDetail={hideDetail}/>
                    }
                </div>
                {(isMediumScreen || isSmallScreen) && isHideClick &&
                    <HideMenu isLogin={isLogin} isAdmin={isAdmin}
                    user={username} signout={sign_out} userpage={userpage}
                    goMypage={goMypage}
                    style={{top:`${window.scrollY+70}px`}}/>
                }
            </div>
        </div>
    )
}

export default Header;