import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { API_BASE_URL } from '../../app-config'

export default function ShowUserAdmin(props) {
    const sendEmail = () => {
        axios({
            url: API_BASE_URL + "/auth/admin-change",
            method:"PUT",
            headers:{
                Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
            },
            data:{email:document.getElementById("standard-search").value},
        }).then((res)=>{
            window.location.href = "/admin"
        })
    }
  return (
    <Grid container>
        <Grid item xs={12}>
                    <Typography variant='h5' component="h5">
                        회원 계정 리스트
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ADMIN</TableCell>
                                    <TableCell>이메일</TableCell>
                                    <TableCell>소속</TableCell>
                                    <TableCell>계정타입</TableCell>
                                    <TableCell>이름</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.userList && props.userList.map((row,idx)=>{
                                    return (
                                        <TableRow 
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        hover={true}
                                        >
                                            <TableCell>{row.admin ? <strong style={{color:"blue"}}>관리자</strong> : "일반회원"}</TableCell>
                                            <TableCell>{row.email}</TableCell>
                                            <TableCell>{row.memberBelong}</TableCell>
                                            <TableCell>{row.memberType}</TableCell>
                                            <TableCell>{row.name}</TableCell>    
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid xs={12} sx={{marginTop:"15px"}}>
                    <Typography variant='h5' component="h5">
                        관리자 권한 부여 (관리자 재입력시 권한 해제)
                    </Typography>
                </Grid>
                <Grid xs={12} sx={{marginTop:"15px"}}>
                <TextField
                    id="standard-search"
                    label="이메일 입력"
                    type={"email"}
                    variant="standard"
                />
                <Button onClick={()=>{sendEmail()}} variant='outlined' sx={{padding:"11px",marginLeft:"5px"}}>권한 부여</Button>
                </Grid>
    </Grid>
  )
}
