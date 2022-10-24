import { React, useEffect } from "react";
import "./Signup.css"
import StickyHeader from '../../component/StickyHeader/StickyHeader';

function Signup() {

    return (
        <div className="Signup">
            <StickyHeader/>
            <div className="signup-content w3-display-container">
                <div className="signup-box w3-display-middle">
                    <img className="logo"/>
                    <h3>회원가입</h3><br/><br/>
                    <form id="signup-form" className="w3-display-middle">
                        <div className="form-group" id="nameInput">
                            <label>이름:</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="이름을 입력하세요."/>
                        </div>
                        <div className="form-group" id="emailInput">
                            <label>이메일:</label>
                            <input type="text" className="form-control" id="email" name="email" placeholder="이메일을 입력하세요."/>
                        </div>
                        <div className="form-group" id="affiliInput">
                            <label>소속:</label><br/>
                            <select name="affili" id="affili">
                                    <option value="">-소속-</option>
                                    <option value="기업">기업</option>
                                    <option value="학생">학생</option>
                                    <option value="관리자">관리자</option>
                            </select>
                            <input type="text" className="form-control" id="affili" name="affili" placeholder="기관명을 입력하세요."/>
                            <div id="studentInput">
                                <input type="text" className="form-control" id="major" name="major" placeholder="학과"/>
                                <input type="text" className="form-control" id="snum" name="snum" placeholder="학번"/>
                            </div>
                        </div>
                        <div className="form-group" id="pwdInput">
                            <label>비밀번호:</label>
                            <input type="password" className="form-control" id="pwd" name="pwd" placeholder="비밀번호를 입력하세요."/>
                        </div>
                        <div className="form-group" id="pwdhInput">
                            <label>비밀번호 확인:</label>
                            <input type="password" className="form-control" id="pwdh" name="pwdh" placeholder="비밀번호 확인을 입력하세요."/>
                        </div>
                        <div className="w3-center"><button type="submit" className="join-btn">가입하기</button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;