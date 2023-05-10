import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Header from "../Header/Header";
import Grid from "@mui/material/Grid";
import "../Board/Board.css";
import { useEffect } from 'react';
import axios from 'axios';
import { call } from '../../service/ApiService';
import { API_BASE_URL } from '../../app-config';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageDisplay from './ImageDisplay'


function Gallery() {
    const [list, setList] = useState([]);
    const [viewList, setViewList] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(9);

    const keys = localStorage.getItem("ACCESS_TOKEN");
    const rows = viewList;
    //console.log(rows)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const GoToEdit = () => {
        window.location.href="/galleryEditor";
    }

    useEffect(() => {
        call("/board/list-image", "GET").then((res) => {setList(res);});
        call("/auth/find-user","GET").then((res)=>{setIsAdmin(res.admin)})
    }, [])
    //console.log(list);

    useEffect(()=>{setViewList(list)},[list])

    return(
        <div className='Board'>
            {keys === "null" && (window.location.href="/login")}
            {keys === null && (window.location.href="/login")}
            <Header />
            <div className="board-container">
                <div className="board-title">
                    <h1>행사 자료</h1>
                        <div className="board-whole-line w3-center">
                        <div className="board-search-container w3-container w3-center">
                            { isAdmin &&
                                <button className="board-edit-btn" onClick={GoToEdit}>작성하기</button>
                            }
                        </div>
                        <div className="board-list-container">
                            <Paper sx={{ width: '100%', overflow: 'hidden', paddingTop:'40px' }}>
                                <Grid container spacing={3}>
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            //console.log(row.imagePath)
                                            return (
                                                <Grid item xs={4} key={row.id}>
                                                    <ImageDisplay id={row.id} title={row.title} imageUrl={row.imagePath}/>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                    <TablePagination
                                        component="div"
                                        count={list.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        className="board-pagination"
                                    />
                            </Paper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;