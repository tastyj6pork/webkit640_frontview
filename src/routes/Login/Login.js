import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./Login.css"
import StickyHeader from '../../component/StickyHeader/StickyHeader';
import { call, login } from '../../service/ApiService';


function Login() {
    const[code, setCode] = useState('');

    const LoginKakao = () => {
        call("https://kauth.kakao.com/oauth/authorize?client_id=ceff3c3a5ff411df946f1aa557ffc001&redirect_uri=http://192.168.227.163:8080/auth/oauth/kakao&response_type=code",
        "GET").then((res)=>{
            console.log(res);
            setCode(res.code);
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        const email = data.get("email");
        const password = data.get("password");
        console.log(email + "/" + password);
        login({email: email, password: password});
    }

    return (
        <div className="Login">
            <StickyHeader/>
            <div className="loginContent w3-display-container">
                <div className="login-box w3-display-middle">
                    <img className="logo" src="/images/logo2.png"/>
                    <h3>안녕하세요.<br/>웹킷640에 오신 걸<br/>환영합니다.</h3>
                    <form id="loginForm"
                    onSubmit={handleSubmit}>
                        <div className="form-group" id="emailInput">
                                <input type="text" className="form-control"
                                id="email" name="email"
                                placeholder="이메일"/>
                        </div>
                        <div className="form-group" id="pwdInput">
                                <input type="password"
                                className="form-control" id="password" name="password"
                                placeholder="비밀번호"/>
                        </div>
                    </form>
                    <a href="https://kauth.kakao.com/oauth/authorize?client_id=ceff3c3a5ff411df946f1aa557ffc001&redirect_uri=http://localhost:3000/auth/oauth/kakao/&response_type=code">
                        <img className="kakao-btn" src="/images/kakao_login.png"/></a>
                    <div className="w3-center">
                            <button type="submit" 
                            form="loginForm"
                            className="login-btn">로그인</button>
                    </div>
                    <p>아직 회원이 아니신가요?
                        <Link to="/signup" style={{textDecoration: 'none'}}>
                            <span>회원가입</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;