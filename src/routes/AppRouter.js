import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Login from '../routes/Login/Login'
import Signup from '../routes/Signup/Signup'
import SideNav from "../component/SideNav/SideNav";
import Admin from "../routes/Admin/Admin";
import AdminApply from "../routes/Admin/AdminApply";
import AdminAttend from "../routes/Admin/AdminAttend";
import AdminSchedule from "../routes/Admin/AdminSchedule";
import Student from "../routes/Student/Student";
import StudentApply from "../routes/Student/StudentApply";
import StudentAttend from "../routes/Student/StudentAttend";
import KakaoRedirectHandler from '../service/KakaoRedirectHandler';
import StudentSchedule from './Student/StudentSchedule';
import Board from '../component/Board/Board';
import LectureData from '../component/Board/LectureData';
import Editor from '../component/Board/Editor';
import BoardDetail from '../component/Board/BoardDetail';

function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<SideNav />}>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/adminapply" element={<AdminApply />} />
                    <Route path="/adminattend" element={<AdminAttend />} />
                    <Route path="/adminschedule" element={<AdminSchedule />} />
                    <Route path="/student" element={<Student />} />
                    <Route path="/studentapply" element={<StudentApply />} />
                    <Route path="/studentattend" element={<StudentAttend />} />
                    <Route path="/adminschedule" element={<AdminSchedule />} />
                    <Route path="/studentSchedule" element={<StudentSchedule />} />
                </Route>
                    <Route path="/" element={<App/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/auth/oauth/kakao" element={<KakaoRedirectHandler/>}/>
                    <Route path="/board" element={<Board />} />
                    <Route path="/lecturedata" element={<LectureData />} />
                    <Route path="/editor" element={<Editor />} />
                    <Route path="/boarddetail" element={<BoardDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;