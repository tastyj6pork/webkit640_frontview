import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Login from '../routes/Login/Login'
import Signup from '../routes/Signup/Signup'
import Aboutus from '../routes/About/Aboutus'
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
import LectrueEditor from '../component/Board/LectrueEditor';
import LectureBoardDetail from '../component/Board/LectureBoardDetail';
import Review from '../component/Board/Review';
import ReviewDetail from '../component/Board/ReviewDetail';
import ReviewEditor from '../component/Board/ReviewEditor';
import RecruitPoster from '../component/MainPage/RecruitPoster/RecruitPoster';
import Frequently from '../component/Frequently/Frequently';
import Gallery from '../component/Board/Gallery';
import GalleryEditor from '../component/Board/GalleryEditor';
import GalleryDetail from '../component/Board/GalleryDetail';

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
                    <Route path="/aboutus" element={<Aboutus/>}/>
                    <Route path="/auth/oauth/kakao" element={<KakaoRedirectHandler/>}/>
                    <Route path="/board" element={<Board />} />
                    <Route path="/lecturedata" element={<LectureData />} />
                    <Route path="/editor" element={<Editor />} />
                    <Route path="/boarddetail/:id" element={<BoardDetail />} />
                    <Route path="/lectureeditor" element={<LectrueEditor />} />
                    <Route path="/lectureboarddetail/:id" element={<LectureBoardDetail />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/reviewdetail/:id" element={<ReviewDetail />} />
                    <Route path="/revieweditor" element={<ReviewEditor />} />
                    <Route path="/gallery" element={<Gallery/>} />
                    <Route path="/galleryEditor" element={<GalleryEditor />} />
                    <Route path="/recruitPoster" element={<RecruitPoster/>} />
                    <Route path="/frequently" element={<Frequently />} />
                    <Route path="/gallerydetail/:id" element={<GalleryDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;