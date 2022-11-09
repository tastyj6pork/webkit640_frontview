import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./ScrollNav.css"

function ScrollNav(props) {
    const [isOn, setIsOn] = useState(false);
    const [dropdownX, setDropdownX] = useState(0);
    const [isDropdownClick, setIsDropdownClick] = useState(false);
    const [faSize, setFaSize] = useState(1);
    const menuList = document.getElementById('menuList');

    const isBigScreen = useMediaQuery({query: '(min-width:1201px)'});
    const isMediumScreen = useMediaQuery({query: '(min-width:768px) and (max-width: 1200px)'});
    const isSmallScreen = useMediaQuery({query: '(max-width: 767px)'});

    const onClickEvent = (e) => {
        if(!isDropdownClick) {
            const lis = menuList.getElementsByTagName("li");

            for(let i=0; i<menuList.childElementCount; i++){
                lis[i].childNodes[0].style.backgroundColor = "white";
            }
            e.target.style.backgroundColor = "rgb(196, 253, 229)";
        }
        if(isDropdownClick) {
            const dropdownBtn = document.getElementById("dropdownBtn");
            dropdownBtn.childNodes[0].innerHTML = e.target.innerHTML;
        }
        switch(e.target.id){
            case 'recruit':
                props.onRecruit();
                break;
            case 'schedule':
                props.onSchedule();
                break;
            case 'process':
                props.onProcess();
                break;
            case 'review':
                props.onReview();
                break;
            default:
        }
    }

    const showDropdown = (e) => {
        if(isDropdownClick) setIsDropdownClick(false);
        else setIsDropdownClick(true);
    }

    useEffect(()=>{
        const navBar = document.getElementById("navBar");
        const dropdownMenu = document.getElementById("dropdownMenu");
        const dropdownBtn = document.getElementById("dropdownBtn");
        if(props.isOn){
            navBar.style.position='fixed';
        }
        if(isMediumScreen) {
            dropdownBtn.childNodes[1].classList.add('fa-2x');
            setFaSize(2);
        }
        if(isSmallScreen) {
            dropdownBtn.childNodes[1].classList.remove('fa-2x');
            setFaSize(1);
        }
        else if (!props.isOn && isDropdownClick && (isMediumScreen || isSmallScreen)){
            dropdownMenu.style.position = 'absolute';
        }
        setIsOn(props.isOn);
        if(isMediumScreen || isSmallScreen){
            let dropdownBtn_x = null;
            dropdownBtn_x = dropdownBtn.getBoundingClientRect().left;
            setDropdownX(dropdownBtn_x);
        }
    })

    return(
        <div className="ScrollNav">
            <div id="navBar" className="w3-bar w3-white w3-wide w3-card">
                <div className="nav-content">
                    { isBigScreen && 
                            <ul id="menuList">
                                <li><button className="w3-display-middle"
                                style={{backgroundColor:"rgb(196, 253, 229)"}}
                                onClick={onClickEvent}
                                id="recruit">모집 안내</button></li>
                                <li><button className="w3-display-middle"
                                onClick={onClickEvent}
                                id="schedule">주요 일정</button></li>
                                <li><button className="w3-display-middle" onClick={onClickEvent}
                                id="process">교육 정보</button></li>
                                <li><button className="w3-display-middle" onClick={onClickEvent}
                                id="review">수강 후기</button></li>
                            </ul>
                    }
                    { (isMediumScreen || isSmallScreen) &&
                        <div className="dropdown-nav">
                            <button id="dropdownBtn" onClick={showDropdown}>
                                <span>모집 안내</span>
                                <FontAwesomeIcon icon={faCircleChevronDown}/>
                            </button>
                        </div>
                    }
                </div>
            </div>
            { (isMediumScreen || isSmallScreen) && isDropdownClick &&
                <div id="dropdownMenu" style={{left:`${dropdownX}px`}}>
                    <ul>
                        <li><button id="recruit"
                        onClick={onClickEvent}>모집 안내</button></li>
                        <li><button id="schedule"
                        onClick={onClickEvent}>주요 일정</button></li>
                        <li><button id="process"
                        onClick={onClickEvent}>교육 정보</button></li>
                        <li><button id="review"
                        onClick={onClickEvent}>수강 후기</button></li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default ScrollNav;