import { React, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function KakaoRedirectHandler() {
    const navigate = useNavigate();

    useEffect(()=>{
        const code = new URL(window.location.href).searchParams.get('code');
        (async () => {
            try {
                const res = await axios.get(`api/code=${code}`);
                const token = res.headers.authorization;
                window.localStorage.setItem('token', token);
                //navigate('/login');
            } catch (e) {
                console.error(e);
                //navigate('/login');
            }
        })();
    }, [])
}

export default KakaoRedirectHandler;