import { Route, Routes } from "react-router-dom";
import SideNav from "./component/SideNav/SideNav";
import Student from "./routes/Student/Student";
import StudentApply from "./routes/Student/StudentApply";
import StudentAttend from "./routes/Student/StudentAttend";
import Home from "./routes/Main/Main";
import Login from "./routes/Login/Login";

function App() {
  return (    
    <div className="App">
      <Login/>
      {/*}
      <SideNav>
            <Routes>
                <Route path="/student" element={<Student />} />
                <Route path="/studentapply" element={<StudentApply />} />
                <Route path="/studentattend" element={<StudentAttend />} /> 
            </Routes>
        </SideNav>
  {*/}
    </div>
  );
}

export default App;
