import { useEffect, useState } from "react";
import {BsFillPersonFill, BsFileEarmarkPlusFill, BsPersonCheckFill, BsList, BsCalendarCheck} from "react-icons/bs";
import Tooltip from '@mui/material/Tooltip';
import { NavLink, Outlet } from "react-router-dom";
import '../SideNav/SideNav.css';
import { IconButton, rgbToHex } from "@mui/material";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";

function SideNav({children}) {

    const [logCheck, setLogCheck] = useState(true) // true = 관리자, false = 학생
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

    useEffect(() => {

        axios({
            method: "GET",
            url: API_BASE_URL + "/auth/find-user",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")
            },
        }).then((res) => {
            setLogCheck(res.data.admin);
        })
    }, [])

    //Login = 학생 List
    const menuItem = [
        {
            path:"/student",
            name:"마이페이지",
            icon:<BsFillPersonFill />
        },
        {
            path:"/studentapply",
            name:"지원신청",
            icon:<BsFileEarmarkPlusFill />
        },
        // {
        //     path:"/studentattend",
        //     name:"출석확인",
        //     icon:<BsPersonCheckFill />
        // },
    ]

    //Login = 관리자 List
    const adminItem = [
        {
            path:"/admin",
            name:"관리자 페이지",
            icon:<BsFillPersonFill />
        },
        {
            path:"/adminapply",
            name:"지원관리",
            icon:<BsFileEarmarkPlusFill />
        },
        // {
        //     path:"/adminattend",
        //     name:"출석관리",
        //     icon:<BsPersonCheckFill />
        // },
        {
            path:"/adminschedule",
            name:"일정관리",
            icon:<BsCalendarCheck />
        }
    ]

    return(
        <div className="sidenav-container">
            <div style={{width : isOpen ? "300px" : "50px"}} className="sidenav-box">
                <div className="sidenav-top">
                    <NavLink to="/" className="navLink"><h1 style={{display : isOpen ? "block" : "none", textDecoration : "none", color : "black"}} className="sidenav-logo">Webkit</h1></NavLink>
                    <div style={{marginLeft : isOpen ? "94px" : "-3px"}} className="sidenav-webkitbars">
                        <BsList onClick={toggle}/>
                    </div>
                </div>
                    { logCheck ?
                        adminItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link">
                                <div className="sidenav-icon" style={{color:"#424242"}}>{item.icon}</div>
                                <div style={{display : isOpen ? "none" : "block", color:"#424242"}} className="sidenav-link-hint">{item.name}</div>
                                <div style={{display : isOpen ? "block" : "none", color:"#424242"}} className="sidenav-link-text">{item.name}</div>
                            </NavLink>
                        )) :
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link">
                                <div className="sidenav-icon" style={{color:"#424242"}}>{item.icon}</div>
                                <div style={{display : isOpen ? "none" : "block", color:"#424242"}} className="sidenav-link-hint">{item.name}</div>
                                <div style={{display : isOpen ? "block" : "none", color:"#424242"}} className="sidenav-link-text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                <h3 style={{display : isOpen ? "block" : "none"}} className="sidenav-foot">로그아웃</h3>
            </div>
            <main><Outlet /></main>
        </div>

    )
}

export default SideNav;