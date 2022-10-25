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
<<<<<<< HEAD
                navigate('/login');
            } catch (e) {
                console.error(e);
                navigate('/login');
=======
                //navigate('/login');
            } catch (e) {
                console.error(e);
                //navigate('/login');
>>>>>>> 1b6a8a48c4f2c149e5299f81ebac52811b3dac3a
            }
        })();
    }, [])
}

export default KakaoRedirectHandler;