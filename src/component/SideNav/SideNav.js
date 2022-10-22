import { useState } from "react";
import {BsFillPersonFill, BsFileEarmarkPlusFill, BsPersonCheckFill, BsPentagonFill} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import '../SideNav/SideNav.css';

function SideNav({children}) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

    const menuItem = [
        {
            path:"/student",
            name:"student",
            icon:<BsFillPersonFill />
        },
        {
            path:"/studentapply",
            name:"studentapply",
            icon:<BsFileEarmarkPlusFill />
        },
        {
            path:"/studentattend",
            name:"studentattend",
            icon:<BsPersonCheckFill />
        },
    ]
    return(
        <div className="sidenav-container">
            <div style={{width : isOpen ? "300px" : "50px"}} className="sidenav-box">
                <div className="sidenav-top">
                    <h1 style={{display : isOpen ? "block" : "none"}} className="sidenav-logo">Webkit</h1>
                    <div style={{marginLeft : isOpen ? "94px" : "-3px"}} className="sidenav-webkitbars">
                        <BsPentagonFill onClick={toggle}/>
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
            </div>
            <main>{children}</main>
        </div>
    )
}

export default SideNav;