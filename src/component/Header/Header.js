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

    const isBigScreen = useMediaQuery({query: '(min-width:1201px)'});
    const isMediumScreen = useMediaQuery({query: '(max-width: 1200px)'});

    const isUserLogin = () => {
        if(localStorage.getItem("ACCESS_TOKEN") !== "null"){
            setIsLogin(true);
            setUsername(localStorage.getItem("USER_NAME"));
        }
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

    const showHideMenu = (e) => {
        if(isHideClick) setIsHideClick(false);
        else setIsHideClick(true);
    }

    const sign_out = () => {
        signout();
        setIsLogin(false);
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

    return(
        <div className="Header">
            <div id="navBarIncludeDetail">
                <div id="navBar" className="w3-bar w3-white w3-wide w3-card">
                    <div className="nav-content">
                        <Link to='/' className="navbar-brand">Logo</Link>
                        {isBigScreen &&
                            <div id="menuList" className="w3-center w3-hide-small w3-hide-medium">
                                <ul>
                                    <li><Link to='/'>About us</Link></li>
                                    <li><Link id="have-dmenu01"
                                    onClick={showDetail}><span>게시판</span></Link></li>
                                    <li><Link id="have-dmenu02"
                                    onClick={showDetail}><span>수업정보</span></Link></li>
                                    <li><Link><span>수강후기</span></Link></li>
                                    <li><Link to='/'>Q&A</Link></li>
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
                                    {isLogin && !isAdmin &&
                                        <li className="mypage-btn" style={{float:"right", marginLeft: "40px"}}>
                                            <p onMouseOver={showMypage} id="welcome">
                                                어서오세요, {username} 님
                                            </p>
                                        </li>
                                    }
                                    {isLogin && isAdmin &&
                                        <li className="adminpage-btn" style={{float:"right", marginLeft: "40px"}}>
                                            <a href="/admin">관리페이지</a>
                                        </li>
                                    }
                                </ul>
                            </div>
                        }
                        {isMediumScreen && 
                            <div className="hide-menu">
                                <button className="hide-menu-btn"
                                onClick={showHideMenu}>
                                    <FontAwesomeIcon icon={faBars} size="2x"/>
                                </button>
                            </div>
                        }
                    </div>
                </div>
                { isBigScreen && isClick &&
                <DetailMenu navY={window.scrollY} 
                dmenu01_x={dmenu01} dmenu02_x={dmenu02}/>
                }

                { isBigScreen && isLogin && !isAdmin && isHover &&
                    <div id="userDetailMenu" 
                    style={{top:`${window.scrollY+90}px `, left:`${duser}px`}}
                    onMouseLeave={hideMypage}>
                        <ul>
                            <li><a href="/student">마이페이지</a></li>
                            <li><a href="/">회원정보</a></li>
                        </ul>
                    </div>
                }

                {isMediumScreen && isHideClick &&
                    <HideMenu isLogin={isLogin} isAdmin={isAdmin}
                    user={username} signout={sign_out}
                    style={{top:`${window.scrollY+90}px`}}/>
                }
            </div>
        </div>
    )
}

export default Header;