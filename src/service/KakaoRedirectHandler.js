import { React, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function KakaoRedirectHandler() {
    useEffect(()=>{
        async function kakaoLogin() {
            await axios.get("http://192.168.232.69:8080/auth/oauth/kakao?code="+new URL(window.location.href).searchParams.get("code"))
            .then((res)=>{
                if (res.data.error === "No Local User") {
                    window.location.href = "/signup?email=" + res.data.data[0].email;
                } else {
                    localStorage.setItem("ACCESS_TOKEN", res.data.data[0].token);
                    localStorage.setItem("USER_NAME", res.data.data[0].name);
                    window.location.href = "/";
                }
            });
        }
        kakaoLogin();
    },[])
}

export default KakaoRedirectHandler;