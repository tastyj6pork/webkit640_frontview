import { React, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function KakaoRedirectHandler() {
    const [authToken, setAuthToken] = useState(null);

    useEffect(()=>{
        setAuthToken(new URL(window.location.href).searchParams.get('code'));
        console.log(authToken);
        axios.get("http://192.168.0.109:8080/auth/oauth/kakao?code="+authToken).then((res)=>{
            console.log(res);
            if(res.data.error === "No Local User") {
                alert("등록되지 않은 회원입니다. 회원가입 페이지로 이동합니다.");
            } else alert("OK");
        })
    }, [])
}

export default KakaoRedirectHandler;