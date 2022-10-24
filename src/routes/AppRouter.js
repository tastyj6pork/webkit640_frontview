import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../routes/Main/Main'
import Login from '../routes/Login/Login'
import SideNav from "./component/SideNav/SideNav";
import Student from "./routes/Student/Student";
import StudentApply from "./routes/Student/StudentApply";
import StudentAttend from "./routes/Student/StudentAttend";

function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/student" element={<Student />} />
                <Route path="/studentapply" element={<StudentApply />} />
                <Route path="/studentattend" element={<StudentAttend />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;