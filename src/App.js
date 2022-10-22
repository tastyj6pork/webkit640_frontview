import { Route, Routes } from "react-router-dom";
import SideNav from "./component/SideNav/SideNav";
import Main from "./routes/Main/Main";
import Student from "./routes/Student/Student";
import StudentApply from "./routes/Student/StudentApply";
import StudentAttend from "./routes/Student/StudentAttend";

function App() {
  return (
    <div className="App">
      <SideNav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/student" element={<Student />} />
          <Route path="/studentapply" element={<StudentApply />} />
          <Route path="/studentattend" element={<StudentAttend />} />  
        </Routes>
      </SideNav>
    </div>
  );
}

export default App;
