import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../app-config';
import { Button, Checkbox, InputLabel, MenuItem, Paper, Select, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { Container, FormControl, Table } from 'react-bootstrap';
import '../Admin/AdminTestfile.css';

function AdminApplyTest() {
    //state 부분
    const [rawList, setRawList] = useState([])

    //search state 부분
    const [nameSearch, setNameSearch] = useState("");
    const [schoolSearch, setSchoolSearch] = useState("");
    const [majorSearch, setMajorSearch] = useState("");
    const [gradeSearch, setGradeSearch] = useState("");

    //Effect 부분
    useEffect(()=>{
        axios.get(API_BASE_URL + "/apply/all",{
            headers:{
                Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")
            }
        }).then((res)=>{
            console.log(res.data); //받은 데이터

            //데이터 형식에 맞춰서 사용할 state 구성
            res.data.data.map((content)=>{
                setRawList(prevList => [...prevList,{
                    data:content, // -> 백에서 받아온 데이터
                    checker:false,  // -> 체크박스 처리할부분
                    position:1 // -> applicant 부분
                }])
            })
        })
    },[])

    //Event 부분
    const fileDownloadClickEvent = (e) => {
        const email = document.getElementById(e.target.dataset.idx).innerText; // 테이블에서 아이디 (0,1,2...) 통해서 이메일 값 가져옴
        axios({
            headers:{
                Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")
            },
            method:"POST",
            url: API_BASE_URL + "/apply/download",
            data: {email: email}, //이메일 데이터 사용
            responseType: "blob"
        }).then((res)=>{
            const blob = new Blob([res.data]);
            const fileObjectUrl = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = fileObjectUrl;
            link.style.display = "none";
            const extractDownloadFilename = (response) => {
                const disposition = response.headers["content-disposition"];
                const fileName = decodeURI(
                disposition
                    .match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)[1]
                    .replace(/['"]/g, "")
                );
                return fileName;
            };
            link.download = extractDownloadFilename(res);
            
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(fileObjectUrl);
        })
    }
    const zipDownload = () => {
        axios({
            headers:{
                Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")
            },
            method:"POST",
            responseType:"blob",
            url:API_BASE_URL + "/apply/zip-download"
        }).then((res)=>{
            console.log(res);
            const blob = new Blob([res.data]);
            const fileObjectUrl = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = fileObjectUrl;
            link.style.display = "none";
            const extractDownloadFilename = (response) => {
                const disposition = response.headers["content-disposition"];
                const fileName = decodeURI(
                disposition
                    .match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)[1]
                    .replace(/['"]/g, "")
                );
                return fileName;
            };
            link.download = extractDownloadFilename(res);
            
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(fileObjectUrl);
        })
    }

    //Rendering 부분
    return(
    <Container maxWidth={false}>
        <div className="apply-title-test">
            <h1>지원관리</h1>
        </div>
        <div className="apply-table-top">
            <Button onClick={zipDownload}>전체 다운로드</Button>
            <TextField
                className="apply-search"
                placeholder="이름"
                size="small"
            />
            <TextField
                className="apply-search"
                placeholder="학교"
                size="small"
            />
            <TextField
                className="apply-search"
                placeholder="학과"
                size="small"
            />
            <TextField
                className="apply-search"
                placeholder="학년"
                size="small"
            />
        </div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>
                <Checkbox></Checkbox>
            </TableCell>
            <TableCell>이름</TableCell>
            <TableCell>이메일</TableCell>
            <TableCell>학교</TableCell>
            <TableCell>학번</TableCell>
            <TableCell>학년</TableCell>
            <TableCell>지원문서</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {/* 아래 부분은 받아온 데이터를 map으로 표현해줌 */}
          {rawList.map((row,idx) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              hover={true}
            >
              <TableCell align='center'>
                <Checkbox id={"check"+idx}checked={row.checker}></Checkbox>
              </TableCell>
              <TableCell>{row.data.name}</TableCell>
              <TableCell id={idx}>{row.data.email}</TableCell>
              <TableCell>{row.data.school}</TableCell>
              <TableCell>{row.data.schoolNumber}</TableCell>
              <TableCell>{row.data.schoolYear}</TableCell>
              <TableCell>
                <Button onClick={fileDownloadClickEvent} data-idx={idx}>DOWNLOAD</Button>
              </TableCell>
            </TableRow>
          ))}
          {/* 여기까지 */}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    )
}

export default AdminApplyTest;