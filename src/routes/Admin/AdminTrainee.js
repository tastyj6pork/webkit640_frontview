import { Grid, Input, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../app-config'

export default function AdminTrainee() {
    const [rawList, setRawList] = useState([]);
    const [viewList, setViewList] = useState([]);
    const [textFieldValue, setTextFieldValue] = useState();
    useEffect(()=>{
        axios({
            url:API_BASE_URL + "/trainee/find-all",
            method:"GET",
            headers:{
                Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")
            }
        }).then((res)=>{
            console.log(res.data)
            setRawList(res.data);
            setViewList(res.data);
        })
    },[])
    useEffect(()=>{
        if (textFieldValue === "" || textFieldValue === " " || textFieldValue === null) {
            setViewList([]);
            axios({
                url:API_BASE_URL + "/trainee/find-all",
                method:"GET",
                headers:{
                    Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")
                }
            }).then((res)=>{
                console.log(res.data)
                setRawList(res.data);
                setViewList(res.data);
            })
        } else {
            var tempList = viewList.filter((content)=>content.date.includes(textFieldValue));
            if (tempList.length !== 0) {
                setViewList(tempList);
            }
        }
    },[textFieldValue])
  return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography variant='h5' component="h5">
                교육생 리스트
            </Typography>
        </Grid>
        <Grid item xs={2}>
            <TextField
                sx={{ marginTop: "15px"}}
                value={textFieldValue}
                onChange={(e)=>{setTextFieldValue(e.target.value)}}
                variant="standard"
                label="등록 일자별 검색"
                fullWidth
            />
        </Grid>
        
        <Grid item xs={12}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>등록일</TableCell>
                            <TableCell>전공</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>학교</TableCell>
                            <TableCell>학번</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {viewList.map((row,idx)=>{
                        return (
                            <TableRow>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.major}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.school}</TableCell>
                                <TableCell>{row.schoolNumber}</TableCell>
                            </TableRow>
                        )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    </Grid>
  )
}
