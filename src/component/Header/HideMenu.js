import { React, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./HideMenu.css"

function HideMenu(props) {
    const [isBoardClick, setIsBoardClick] = useState(false);
    const [isProcessClick, setIsProcessClick] = useState(false);

    const onClickBtn = (e) => {
        let name = '';
        if(e.target.name) name = e.target.name;
        else name = e.target.parentNode.name;
        switch(name){
            case "board":
                if(isBoardClick) setIsBoardClick(false);
                else setIsBoardClick(true);
                break;
            case "process":
                if(isProcessClick) setIsProcessClick(false);
                else setIsProcessClick(true);
                break;
        }
    }

    return(
        <div id="hideMenu" className="HideMenu">
            <div className="hide-content">
                <ul className="menuList">
                    <li>About us</li>
                    <li>게시판
                        <button name="board" onClick={onClickBtn}>
                            <FontAwesomeIcon name="board" icon={faChevronRight}/>
                        </button>
                    </li>
                    { isBoardClick && 
                        <ul className="detail-menu">
                            <li>공지사항</li>
                            <li>Q&A</li>
                        </ul>
                    }
                    <li>수업정보
                        <button name="process" onClick={onClickBtn}>
                            <FontAwesomeIcon name="process" icon={faChevronRight}/>
                        </button>
                    </li>
                    { isProcessClick && 
                        <ul className="detail-menu">
                            <li><Link to="/studentSchedule">수업일정</Link></li>
                            <li>강의자료</li>
                        </ul>
                    }
                    <li>수강후기</li>
                    <li>Q&A</li>
                </ul>
                { !props.isLogin &&
                    <ul className="user-menu-list">
                        <li><a href="/login">로그인</a></li>
                    </ul>
                }
                { props.isLogin && !props.isAdmin &&
                    <ul className="user-menu-list">
                        <li>{props.user}님, 어서오세요.
                            <br/><a href="/student">마이페이지</a>
                        </li>
                    </ul>
                }
                { props.isLogin && props.isAdmin &&
                    <ul className="user-menu-list">
                        <li>{props.user}님, 어서오세요.</li>
                        <li><a href="/admin">관리페이지</a></li>
                    </ul>
                }
                { props.isLogin && 
                    <ul className="user-menu-list">
                        <li onClick={props.signout}><a href="#">로그아웃</a></li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default HideMenu;