import { Button, Checkbox, Grid, Input, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_BASE_URL } from '../../app-config'

export default function AdminBoardList() {
    const [rawData, setRawData] = useState([])
    const [checkList, setCheckList] = useState([]);
    const [checkElement, setCheckElement] = useState([]);
    const innerRenderEffect = async () => {
        var tempRawData = []
        await axios({
            url:API_BASE_URL + "/board/list",
            method:"GET",
            params:{type:"review"},
            headers:{
                Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
            }
        }).then((res)=>{
            res.data.map((row,idx)=>{
                tempRawData.push(row);
            })
        })
        await axios({
            url:API_BASE_URL + "/board/list",
            method:"GET",
            params:{type:"free"},
            headers: {
                Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
            }
        }).then((res)=>{
            res.data.map((row,idx)=>{
                tempRawData.push(row);
            })
        })
        return tempRawData;
    }
    useEffect(()=>{innerRenderEffect().then((res)=>setRawData(res))},[]);
    useEffect(()=>{},[rawData]);

    const changeViewBtnOnClick = async (e,id) => {
        await axios({
            url: API_BASE_URL + '/board/change-show',
            method:"PUT",
            headers:{
                Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
                "Content-Type" : "application/json"
            },
            data: id
        }).then((res)=>{
        });
        innerRenderEffect().then((res)=>setRawData(res));
    }
    const checkboxOnChange = (e,id) => {
        if (e.target.checked) {
            setCheckList((prevList) => [...prevList,id]);
            setCheckElement((prevList)=>[...prevList,{id:id,checked:e.target.checked}]);
        } else {
            setCheckList(checkList.filter((content)=>content !== id));
            setCheckElement(checkElement.filter((content)=>content.id !== id));
        }
    }
    const selectBoardAcceptOnClick = (e) => {
        checkList.map((row)=>{
            changeViewBtnOnClick(e,row);
        })
    }

  return (
    <Grid container className="admin-content">
        <Grid item xs={12}>
            <Typography variant='h5' component="h5">
                <strong>게시글 열람 관리</strong>
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <button onClick={(e)=>{selectBoardAcceptOnClick(e);}} className="admin-btn btn"
            style={{width:'80px', marginTop:'30px'}}>
                선택 승인
            </button>
        </Grid>
        <Grid item xs={12}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>선택</TableCell>
                            <TableCell align='center'>공개 여부</TableCell>
                            <TableCell align='center'>작성자</TableCell>
                            <TableCell align='center'>작성일자</TableCell>
                            <TableCell align='center'>제목</TableCell>
                            <TableCell align='center'>링크</TableCell>
                            <TableCell align='center'>허용</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rawData && rawData.map((row,idx)=> (
                            <TableRow>
                                <TableCell align='center'>
                                    <Checkbox id={"chk"+row.id} onChange={(e)=>{
                                        checkboxOnChange(e,row.id);
                                        }} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>
                                </TableCell>
                                <TableCell align='center'>{!row.add ? <strong style={{color:"rgba(27, 199, 130)"}}>미승인</strong>:"승인"}</TableCell>
                                <TableCell align='center'>{row.writer}</TableCell>
                                <TableCell align='center'>{row.writeDate}</TableCell>
                                <TableCell align='center'>{row.title}</TableCell>
                                <TableCell align='center'><Link to={`/boarddetail/${row.id}`}>게시글로 이동하기</Link></TableCell>
                                <TableCell align='center'>
                                    <button onClick={(e)=>{changeViewBtnOnClick(e,row.id);}} className="admin-btn-02 btn"
                                        style={{width:'60px'}}>
                                            승인
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    </Grid>
  )
}
