import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./Login.css"
import { KAKAO_AUTH_URL } from '../../service/OAuth';
import StickyHeader from '../../component/StickyHeader/StickyHeader';
import { call } from '../../service/ApiService';


function Login() {
    const[code, setCode] = useState('');
    
    const LoginKakao = () => {
        call("https://kauth.kakao.com/oauth/authorize?client_id=ceff3c3a5ff411df946f1aa557ffc001&redirect_uri=http://192.168.227.163:8080/auth/oauth/kakao&response_type=code",
        "GET").then((res)=>{
            console.log(res);
            setCode(res.code);
        })
        
    }
    
    return (
        <div className="Login">
            <StickyHeader/>
            <div className="loginContent w3-display-container">
                <div className="login-box w3-display-middle">
                    <img className="logo" src="#" />
                    <h3>안녕하세요.<br/>웹킷640에 오신 걸<br/>환영합니다.</h3><br/>
                    <a href={KAKAO_AUTH_URL}><div  className="kakao-btn"/></a>
                    <p>아직 회원이 아니신가요? 
                        <Link to="/signup" style={{textDecoration: 'none'}}>
                            <span>회원가입</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;