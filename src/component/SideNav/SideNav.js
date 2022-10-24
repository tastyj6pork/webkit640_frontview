import { useState } from "react";
import {BsFillPersonFill, BsFileEarmarkPlusFill, BsPersonCheckFill, BsList} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import '../SideNav/SideNav.css';

function SideNav({children}) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

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
        {
            path:"/studentattend",
            name:"출석확인",
            icon:<BsPersonCheckFill />
        },
    ]
    return(
        <div className="sidenav-container">
            <div style={{width : isOpen ? "300px" : "50px"}} className="sidenav-box">
                <div className="sidenav-top">
                    <h1 style={{display : isOpen ? "block" : "none"}} className="sidenav-logo">Webkit</h1>
                    <div style={{marginLeft : isOpen ? "94px" : "-3px"}} className="sidenav-webkitbars">
                        <BsList onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link">
                            <div className="sidenav-icon">{item.icon}</div>
                            <div style={{display : isOpen ? "block" : "none"}} className="sidenav-link-text">{item.name}</div>
                        </NavLink>
                    ))
                }
                <h3 style={{display : isOpen ? "block" : "none"}} className="sidenav-foot">로그아웃</h3>
            </div>
            <main>{children}</main>
        </div>
    )
}

export default SideNav;