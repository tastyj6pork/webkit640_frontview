import "../Main/Main.css";

import { Link } from "react-router-dom";

function Main() {

    return(<div>
        <h2>메인페이지</h2>
        <Link to="/studentapply">지원하기</Link>
    </div>)
}

export default Main;