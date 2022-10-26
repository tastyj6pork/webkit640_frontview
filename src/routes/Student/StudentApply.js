import { useState } from 'react';
import '../Student/Student.css';

function StudentApply() {

    const [name, setName] = useState("");
    const [application, setApplication] = useState("");
    const [major, setMajor] = useState("");
    const [schoolnumber, setSchoolnumber] = useState("");
    const [file, setFile] = useState("");

    function SubmitBtn(e) {
        
        e.prevenDefault();

        setApplication("test");
        
        let header = new Headers({

        })

        const formData = new FormData();
        formData.append("name", name)
        formData.append("application", application)
        formData.append("major", major)
        formData.append("schoolnumber", schoolnumber)
        formData.append("file", file)

        let option = {
            method : "POST",
            url : "http://192.168.232.69:8080",
            header : header,
            body : formData
        
        };

        fetch(option.url, option).then(response => response.json())
        .catch((error) => console.log(error));
    }

    return(<div className="apply-total">
        <div className="apply-title">
            <h1>지원하기</h1>
        </div>
        <div className="apply-container">
            <ul>
                <li>
                    <p className="apply-text">이름</p>
                    <input className="apply-name" name="name" onChange={(e) => {setName(e.target.value)}} placeholder='한글로 공백없이 입력해주세요.'></input>
                </li>
                <li>
                    <p className="apply-text">학과</p>
                    <input className="apply-major" name="major" onChange={(e) => {setMajor(e.target.value)}} placeholder='한글로 공백없이 입력해주세요.'></input>
                </li>
                <li>
                    <p className="apply-text">학번</p>
                    <input className="apply-schoolnumber" name="schoolnumber" onChange={(e) => {setSchoolnumber(e.target.value)}} placeholder='숫자로 공백없이 입력해주세요.'></input>
                </li>
                <li>
                    <p className="apply-text">첨부파일</p>
                    <input className="apply-file" type="file" id="file" name="file" onChange={(e) => {setFile(e.target.files[0])}}></input>
                    <p className="file-detail">Webkit640 지원파일은 공지사항에서 다운로드하세요.</p>
                </li>
            </ul>
            <div className="apply-submit">
                <button className="apply-submit-btn" onClick={SubmitBtn}>제출하기</button>
            </div>
        </div>
    </div>)
}

export default StudentApply;