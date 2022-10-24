import { Route, Routes } from "react-router-dom";
import SideNav from "./component/SideNav/SideNav";
import Admin from "./routes/Admin/Admin";
import AdminApply from "./routes/Admin/AdminApply";
import AdminAttend from "./routes/Admin/AdminAttend";
import AdminSchedule from "./routes/Admin/AdminSchedule";
import Main from "./routes/Main/Main";
import Student from "./routes/Student/Student";
import StudentApply from "./routes/Student/StudentApply";
import StudentAttend from "./routes/Student/StudentAttend";

function App() {
  
  return (    
    <div className="App">
        <Routes>
            <Route element={<SideNav />}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/adminapply" element={<AdminApply />} />
              <Route path="/adminattend" element={<AdminAttend />} />
              <Route path="/adminschedule" element={<AdminSchedule />} />
              <Route path="/student" element={<Student />} />
              <Route path="/studentapply" element={<StudentApply />} />
              <Route path="/studentattend" element={<StudentAttend />} />
            </Route>
              <Route path="/" element={<Main />}/>
        </Routes>
    </div>
  );
}

export default App;
