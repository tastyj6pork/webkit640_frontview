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
                        <button name="board" className="hide-btn" onClick={onClickBtn}>
                            <FontAwesomeIcon name="board" icon={faChevronRight}/>
                        </button>
                    </li>
                    { isBoardClick && 
                        <ul className="detail-menu">
                            <li><a href="/board">공지사항</a></li>
                            <li><a href="/lecturedata">강의자료</a></li>
                        </ul>
                    }
                    <li>프로그램
                        <button name="process" className="hide-btn" onClick={onClickBtn}>
                            <FontAwesomeIcon name="process" icon={faChevronRight}/>
                        </button>
                    </li>
                    { isProcessClick && 
                        <ul className="detail-menu">
                            <li><a href="/aboutus">모집안내</a></li>
                            <li><a href="/apply">지원하기</a></li>
                        </ul>
                    }
                    <li><a href="/review">수강후기</a></li>
                </ul>
                { !props.isLogin &&
                    <ul className="user-menu-list">
                        <li><a href="/login">로그인</a></li>
                    </ul>
                }
                { props.isLogin &&
                    <ul className="user-menu-list">
                        <li>{props.user}님, 어서오세요.</li>
                        <li>
                            <button onClick={props.goMypage}>{props.userpage}</button>
                        </li>
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