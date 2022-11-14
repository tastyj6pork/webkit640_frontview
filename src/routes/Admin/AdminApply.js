import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../app-config';
import '../Admin/Admin.css';
import { Button, Checkbox, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { Container, Table } from 'react-bootstrap';

function AdminApply() {
    //state 부분
    const [rawList, setRawList] = useState([]);
    const [viewList, setViewList] = useState([]);
    const [applicantList, setApplicantList] = useState([]);
    const [applyList, setApplyList] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [selectValue, setSelectValue] = useState("school");

    //Effect 부분
    useEffect(()=>{
        mainRenderingAxios();
    },[])

    useEffect(()=>{
        console.log(searchKeyword);
        if (searchKeyword === "" || searchKeyword === null) {
            setViewList([]);
            innerEffect();
        }
        else if (selectValue === "school") {
            var tempList = viewList.filter((content)=>content.data.school === searchKeyword)
            if (tempList.length !== 0) {
                setViewList(tempList);
            }
        }
        else if (selectValue === "major") {
            var tempMajor = viewList.filter((content) => content.data.major === searchKeyword);
            if (tempMajor.length !== 0) {
                setViewList(tempMajor)
            }
        } else if (selectValue === "schoolYear") {
            var tempSchoolYear = viewList.filter((content) => content.data.schoolYear === searchKeyword);
            if (tempSchoolYear.length !== 0) {
                setViewList(tempSchoolYear);
            }
        }
    },[searchKeyword])

    useEffect(()=>{
        rawList.map((content,idx)=>{
            setViewList(prevList => [...prevList,{
                id:idx,
                data:content.data,
                checker:false,
                position:1
            }])
        })
    },[rawList])

    const innerEffect = () => {
        rawList.map((content,idx)=>{
            setViewList(prevList => [...prevList,{
                id:idx,
                data:content.data,
                checker:false,
                position:1
            }])
        });
    }

    const mainRenderingAxios = async () => {
        await axios.get(API_BASE_URL + "/apply/all",{
            headers:{
                Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")
            }
        }).then((res)=>{
            console.log(res.data); //받은 데이터

            //데이터 형식에 맞춰서 사용할 state 구성
            res.data.data.map((content,idx)=>{
                setRawList(prevList => [...prevList,{
                    id:idx,
                    data:content, // -> 백에서 받아온 데이터
                    checker:false,  // -> 체크박스 처리할부분
                    position:1 // -> applicant 부분
                }]);
            })
        })
    }


    //Event 부분
    const searchOnClickEvent = (e) => {
        //단일 검색

    }

    const resetList = (e) => {
        window.location.href ="/adminapply"
    }

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

    const applicantSelectEvent = (e) => {
        console.log(e.target.dataset.idx);
        const email = document.getElementById(e.target.dataset.idx).innerText;
        console.log(email);

        axios({
            headers:{
                Authorization: "Bearer "+localStorage.getItem("ACCESS_TOKEN")
            },
            url:API_BASE_URL + "/apply/select",
            method:"POST",
            data:[{nameEmail:email}]
        }).then((res)=>{
            console.log(res.data);
            window.location.href = "/adminapply"
        })
    }
    const selectorApplicantList = (arg,event) => {
        
        if (event.target.checked) {
            setApplicantList(prevList => [...prevList, viewList[arg]]);
        } else {
            const temp = applicantList.filter(content => content.id !== arg)
            setApplicantList(temp);
        }
    }

    useEffect(()=>{
        console.log(applicantList);
    },[applicantList])

    const selectorApplyList = (arg,event) => {
        if (event.target.checked) {
            setApplyList(prevList => [...prevList, viewList[arg]])
        } else {
            const temp = applyList.filter(content => content.id !== arg)
            setApplyList(temp);
        }
    }

    const checkerApplicantApply = (e) => {
        var sendData = [];
        applicantList.map((row,idx)=>{
            sendData.push({nameEmail:row.data.email});
        })
        console.log(sendData);
        axios({
            headers:{
                Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")
            },
            data: sendData,
            method:"POST",
            url: API_BASE_URL + "/apply/select"
        }).then((res)=>{
            console.log(res);
            window.location.href = "/adminapply";
        })
    }
    const cancelApplicantApply = (e) => {
        var sendData = [];
        applyList.map((row,idx)=> {
            sendData.push({nameEmail:row.data.email});
        });
        axios({
            headers:{
                Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")
            },
            data: sendData,
            method:"POST",
            url: API_BASE_URL + "/apply/select"
        }).then((res)=>{
            console.log(res);
            window.location.href = "/adminapply";
        })
    }
    const onChangeKeyword = (e) => {
        console.log(e.target.value);
        setSearchKeyword(e.target.value);
    }
    const onChangeSelect = (e) => {
        console.log(e.target.value);
        setSelectValue(e.target.value);
    }

    // Check Box
    const checkedTotal = () => {
        let count=0;
        viewList.forEach((items) => !items.data.adminSelect && count++)
        if(count === applicantList.length) {return true}
        else {return false}   
    }
    const checkedLast = () => {
        let count=0;
        viewList.forEach((items) => items.data.adminSelect && count ++)
        if(count === applyList.length) {return true}
        else {return false}
    }

    const checkedTotalPut = (checked) => {
        console.log(checked);
        let count=0;
        viewList.forEach((items) => !items.data.adminSelect && count++)
        if(checked) {
            console.log(count)
            for(let i=0; i<count; i++) {
                rawList[i].checker = true;
                rawList.map((item) => !item.data.adminSelect && setApplicantList())
            }
        }
        else {
            for(let i=0; i<count; i++) {
                rawList[i].checker = false;
            }
            rawList.map((item) => !item.data.adminSelect && setApplicantList([]))
        }
        console.log(applicantList);
    }

    const checkedLastPut = (checked) => {
        
    }
    const applicantAllCheckHandler = (checked) => {
        if (checked) {
            const idArray = []
            viewList.forEach((content)=> {
                if (!content.data.adminSelect) {
                    idArray.push(content)
                }
            })
            setApplicantList(idArray);
        } else {
            setApplicantList([]);
        }
    }
    const applyAllCheckHandler = (checked) => {
        if (checked) {
            const idArrays = []
            viewList.forEach((content)=> {
                if (content.data.adminSelect) {
                    idArrays.push(content)
                }
            })
            setApplyList(idArrays);
        } else {
            setApplyList([])
        }
    }
    const forcedSelectApplicant = (e,email) => {
        axios({
            url:API_BASE_URL + "/apply/forced-select",
            method:"POST",
            headers:{
                Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
            },
            data: {email:email}
        }).then((res)=>{
            window.location.href = "/adminapply"
        });
    }
    const checkerSelect = (idx) => {
        applicantList.map((content)=>{
            if (content.id === idx) {
                return true;
            } else {
                return false;
            }
        })
    }
    
    //Rendering 부분
    return(
    <Grid container spacing={3}>
        {console.log(viewList)}
        <Grid item xs={12}>
            <Typography variant='h2' component="h2">
                <strong>지원자 관리</strong>
            </Typography>
        </Grid>
        <Grid item xs={8}>
        </Grid>
        <Grid item xs={4}>
            <FormControl variant='standard'>
                <InputLabel id="demo-simple-select-standard-label">검색</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    value={selectValue}
                    id="demo-simple-select-standard"
                    onChange={onChangeSelect}
                    label="Age"
                    >
                        <MenuItem value="school">학교</MenuItem>
                        <MenuItem value="major">학과</MenuItem>
                        <MenuItem value="schoolYear">학년</MenuItem>
                    </Select>
            </FormControl>
            <TextField
            onChange = {onChangeKeyword}
            style={{marginLeft:"10px",marginRight:"15px"}}
            id="standard-search"
            label="검색"
            type="search"
            variant="standard"
            />
            <Button variant='contained' onClick={zipDownload} size="large">ALL DOWNLOAD</Button>
        </Grid>
        <Grid item xs={12}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align='center'>
                            <Checkbox onChange={(e) => applicantAllCheckHandler(e.target.checked)}
                            checked={viewList.filter((element)=>!element.data.adminSelect).length === applicantList.length ? true : false}></Checkbox>
                        </TableCell>
                        <TableCell>이름</TableCell>
                        <TableCell>이메일</TableCell>
                        <TableCell>학교</TableCell>
                        <TableCell>학과</TableCell>
                        <TableCell>학년</TableCell>
                        <TableCell>지원서</TableCell>
                        <TableCell>지원자 결정</TableCell>
                        <TableCell>SELECT</TableCell>
                    </TableRow>
                </TableHead>
            <TableBody>
            {/* 아래 부분은 받아온 데이터를 map으로 표현해줌 */}
                {viewList.map((row,idx) => (
                    !row.data.adminSelect &&
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    hover={true}
                    >
                        <TableCell align='center'>
                            <Checkbox id={"check"+idx}
                            checked = {applicantList.includes(row) ? true : false}
                            onChange={(e)=>{selectorApplicantList(idx,e)}}></Checkbox>
                        </TableCell>
                        <TableCell>{row.data.name}</TableCell>
                        <TableCell id={idx}>{row.data.email}</TableCell>
                        <TableCell>{row.data.school}</TableCell>
                        <TableCell>{row.data.major}</TableCell>
                        <TableCell>{row.data.schoolYear}</TableCell>
                        <TableCell>
                            <Button variant='outlined' onClick={fileDownloadClickEvent} data-idx={idx}>DOWNLOAD</Button>
                        </TableCell>
                        <TableCell>
                            {!row.data.select ? "미결정" : "결정"}
                        </TableCell>
                        <TableCell>
                            <Button variant='outlined' onClick={applicantSelectEvent} data-idx={idx}>SELECT</Button>
                        </TableCell>
                    </TableRow>
          ))}
          {/* 여기까지 */}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    <Grid item xs={5}></Grid>
    <Grid item xs={6}>
        <Button onClick={(e)=>{checkerApplicantApply(e)}} variant='contained'>일괄 등록</Button>
        <Button color='warning' sx={{marginLeft:1}} onClick={(e)=>{cancelApplicantApply(e)}} variant='contained'>일괄 취소</Button>
    </Grid>
    
    <Grid item xs={12}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align='center'>
                            <Checkbox checked={viewList.filter((element)=>element.data.adminSelect).length === applyList.length ? true : false}
                            onChange={(e) => applyAllCheckHandler(e.target.checked)}></Checkbox>
                        </TableCell>
                        <TableCell>이름</TableCell>
                        <TableCell>이메일</TableCell>
                        <TableCell>학교</TableCell>
                        <TableCell>학번</TableCell>
                        <TableCell>학년</TableCell>
                        <TableCell>지원서</TableCell>
                        <TableCell>지원자 결정</TableCell>
                        <TableCell>CANCEL</TableCell>
                    </TableRow>
                </TableHead>
            <TableBody>
            {/* 아래 부분은 받아온 데이터를 map으로 표현해줌 */}
                {viewList.map((row,idx) => (
                    row.data.adminSelect &&
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    hover={true}
                    >
                        <TableCell align='center'>
                            <Checkbox checked = {applyList.includes(row) ? true : false} id={"check"+idx} onChange={(e)=>{selectorApplyList(idx,e)}}></Checkbox>
                        </TableCell>
                        <TableCell>{row.data.name}</TableCell>
                        <TableCell id={idx}>{row.data.email}</TableCell>
                        <TableCell>{row.data.school}</TableCell>
                        <TableCell>{row.data.schoolNumber}</TableCell>
                        <TableCell>{row.data.schoolYear}</TableCell>
                        <TableCell>
                            <Button variant='outlined' onClick={fileDownloadClickEvent} data-idx={idx}>DOWNLOAD</Button>
                        </TableCell>
                        <TableCell>{row.data.select ? <Button variant='contained' color='warning' onClick={(e)=>{forcedSelectApplicant(e,row.data.email)}}>지원 취소</Button> : <Button variant='outlined' onClick={(e)=>{forcedSelectApplicant(e,row.data.email)}}>강제 결정</Button>}</TableCell>
                        <TableCell>
                            <Button variant='outlined' onClick={applicantSelectEvent} data-idx={idx}>CANCEL</Button>
                        </TableCell>
                    </TableRow>
          ))}
          {/* 여기까지 */}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Grid>
    )
}

export default AdminApply;