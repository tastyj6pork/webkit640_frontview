import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import { KAKAO_AUTH_URL } from '../../service/OAuth';
import StickyHeader from '../../component/StickyHeader/StickyHeader';

function Login() {

    return (
        <div className="Login">
            <StickyHeader/>
            <div className="loginContent w3-display-container">
                <div className="login-box w3-display-middle">
                    <img className="logo" src="#" />
                    <h3>안녕하세요.<br/>웹킷640에 오신 걸<br/>환영합니다.</h3><br/>
                    <a href={KAKAO_AUTH_URL}><div className="kakao-btn"/></a>
                    <p>아직 회원이 아니신가요? <span type="button">회원가입</span></p>
                </div>

            </div>
        </div>
    )
}

export default Login;