import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Main.css"

function Main() {

    return (
        <div>
            <div>메인 페이지</div>
            <Link to="/login">로그인</Link>
        </div>
    )
}

export default Main;