import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Login from '../routes/Login/Login'
import Signup from '../routes/Signup/Signup'
import SideNav from "../component/SideNav/SideNav";
import Student from "../routes/Student/Student";
import StudentApply from "../routes/Student/StudentApply";
import StudentAttend from "../routes/Student/StudentAttend";
import KakaoRedirectHandler from '../service/KakaoRedirectHandler';

function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/student" element={<Student />} />
                <Route path="/studentapply" element={<StudentApply />} />
                <Route path="/studentattend" element={<StudentAttend />} />
                <Route path="/auth/oauth/kakao" element={<KakaoRedirectHandler/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;