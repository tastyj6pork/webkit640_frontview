import { Button, Checkbox, Grid, Input, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
    useEffect(()=>{console.log(rawData)},[rawData]);

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
            console.log(res.data);
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
    useEffect(()=>{console.log(checkElement)},[checkElement])
    const selectBoardAcceptOnClick = (e) => {
        checkList.map((row)=>{
            changeViewBtnOnClick(e,row);
        })
    }

  return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography variant='h5' component='h5'>
                게시글 열람 관리
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Button variant='contained' onClick={(e)=>{selectBoardAcceptOnClick(e);}}>선택 일괄 처리</Button>
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
                                <TableCell align='center'>{!row.add ? <strong style={{color:"blue"}}>미승인</strong>:"승인"}</TableCell>
                                <TableCell align='center'>{row.writer}</TableCell>
                                <TableCell align='center'>{row.writeDate}</TableCell>
                                <TableCell align='center'>{row.title}</TableCell>
                                <TableCell align='center'>http://test.com/board/{row.id}</TableCell>
                                <TableCell align='center'>
                                    <Button variant='contained' onClick={(e)=>{changeViewBtnOnClick(e,row.id)}}>CLICK</Button>
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
