import axios from 'axios';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react';
import { API_BASE_URL } from '../../app-config';
import { call } from '../../service/ApiService';
import '../Student/Student.css';

function StudentApply() {

    const [name, setName] = useState("");
    const [application, setApplication] = useState("");
    const [major, setMajor] = useState("");
    const [schoolnumber, setSchoolnumber] = useState("");
    const [schoolYear, setSchoolYear] = useState("");
    const [school, setSchool] = useState("")
    const [file, setFile] = useState("");
    const [applyDate, setApplyDate] = useState("");

    const ACCESS_TOKEN = "ACCESS_TOKEN";
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    let today = new Date();

    async function SubmitBtn(e) {

        var fileFind = document.getElementById("file").value;
        if(!fileFind){
            alert("파일을 첨부하여 주세요.")
        } else {
            e.preventDefault();
            setApplication("test");

            const formData = new FormData();
            const data = {
                name: name,
                application: application,
                major: major,
                schoolNumber: schoolnumber,
                schoolYear: schoolYear,
                school: school,
            }
            formData.enctype = "multipart/form-data";
            formData.append("file", file);

            await call("/apply/applicant-data","POST",data).then((res)=>{console.log(res);});
            await axios({
                method:"POST",
                url:API_BASE_URL + "/apply/applicant-application",
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": "Bearer " + accessToken,
                },
            }).then((res) => {
                if(res.status === 200) {
                    alert("지원이 완료되었습니다.");
                    window.location.href = "/";
                }
            });
            }
        }
    useEffect(() => {
        const ACCESS_TOKEN = "ACCESS_TOKEN";
        const accessToken = localStorage.getItem(ACCESS_TOKEN);
        axios({
            method:"GET",
            url:API_BASE_URL + "/apply/checkApplicant",
            data: null,
            headers: {
                "Authorization":"Bearer " + accessToken
            }
        }).then((res)=>{
            if(res.status === 200) {
                if(res.data.error === "400") {
                    alert("이미 지원하셨습니다.");
                    window.location.href="/";
                }
            }
        });

    },[])

    // useEffect(() => {
    //     call("/main/data", "GET").then((res) => setApplyDate(new Date (res.documentSubmissionPeriod)));

    //     if (applyDate < today) {
    //         alert("아직 신청기간이 아닙니다 ");
    //         window.location.href="/";
    //     }
    // })

    useEffect(() => {
        call("/main/data", "GET").then((res) => {
            if((new Date (res.documentSubmissionPeriod)) < today) {
                alert("아직 신청기간이 아닙니다. ");
                window.location.href="/";
            }
        })
    })

    const fileInput = useRef();

    const fileExtenstion = (obj) => {
        let pathpoint = obj.target.value.lastIndexOf('.');
        let filepoint = obj.target.value.substring(pathpoint+1,obj.length);
        let filetype = filepoint.toLowerCase();

        if(filetype === "hwp" || filetype === "pdf" || filetype === "docs") {
        } else {
            alert("hwp, pdf, docs확장자 파일만 제출 가능합니다.");
            fileInput.current.value = "";
            return false;
        }

    }

    const warpNotice = () => {
        window.location.href="/board"
    }
    const keys = localStorage.getItem("ACCESS_TOKEN");
    return(
    <div className="apply-total">
        {keys === "null" && (window.location.href="/login")}
        {keys === null && (window.location.href="/login")}
        <Typography variant='h4' component="h4">
            <strong>지원서 작성</strong>
        </Typography>
        <div className="apply-container w3-card" style={{height:'580px'}}>
            <ul>
                <li>
                    <p className="apply-text">이름</p>
                    <input className="apply-name" name="name" onChange={(e) => {setName(e.target.value)}} placeholder='한글로 공백없이 입력해주세요.'></input>
                </li>
                <li>
                    <p className="apply-text">학교</p>
                    <input className="apply-school" name="school" onChange={(e) => {setSchool(e.target.value)}} placeholder='한글로 공백없이 입력해주세요.'></input>
                </li>
                <li>
                    <p className="apply-text">학과</p>
                    <input className="apply-major" name="major" onChange={(e) => {setMajor(e.target.value)}} placeholder='한글로 공백없이 입력해주세요.'></input>
                </li>
                <li className="schoolnumber">
                    <p className="apply-text">학번</p>
                    <input className="apply-schoolnumber" name="schoolnumber" onChange={(e) => {setSchoolnumber(e.target.value)}} placeholder='ex) 20220001'></input>
                </li>
                <li className="schoolgrade">
                    <p className="apply-text">학년</p>
                    <input className="apply-schoolyear" name="schoolyear" onChange={(e) => {setSchoolYear(e.target.value)}} placeholder="학년"></input>
                </li>
                <li>
                    <p className="apply-text">첨부파일</p>
                    <input className="apply-file" type="file" id="file" name="file" ref={fileInput} accept=".hwp, .pdf, .docs" onChange={(e) => {setFile(e.target.files[0]); fileExtenstion(e)}}></input>
                    <p className="file-detail" onClick={warpNotice} style={{color:'grey'}}>Webkit640 지원 양식 다운로드</p>
                </li>
            </ul>
            <div className="apply-submit">
                <button onClick={SubmitBtn} className="admin-btn btn"
                style={{width:'80px', float:'right', marginRight:'30px'}}>
                    지원하기
                </button>
            </div>
        </div>
    </div>)
}

export default StudentApply;