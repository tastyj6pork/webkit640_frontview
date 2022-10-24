import { React, useEffect } from "react";
import "./Signup.css"
import StickyHeader from '../../component/StickyHeader/StickyHeader';

function Signup() {

    return (
        <div className="Signup">
            <StickyHeader/>
            <div className="signup-content w3-display-container">
                <div className="signup-box w3-display-middle">
                    <img className="logo" src="#" />
                    <h3>회원가입</h3><br/><br/>
                    <form id="signup-form" className="w3-display-middle">
                    <div className="form-group" id="nameInput">
                        <label>이름:</label>
                        <input type="text" className="form-control" id="name" name="name"/>
                    </div>
                    <div className="form-group" id="emailInput">
                        <label>이메일:</label>
                        <input type="password" className="form-control" id="email" name="email"/>
                    </div>
                        <div className="w3-center"><button type="submit" class="join-btn">가입하기</button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;