import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import "../Board/Board.css";
import { useEffect } from 'react';
import axios from 'axios';
import { call } from '../../service/ApiService';
import { API_BASE_URL } from '../../app-config';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Review() {

    const [list, setList] = useState([]);
    const [keyword,setKeyword] = useState();
    const [selectValue, setSelectValue] = useState("제목");
    const [viewList, setViewList] = useState([]);
    const columns = [
        { id: 'no', label: '번호', minWidth: 100},
        { id: 'title', label: '제목', minWidth: 250 },
        {
          id: 'writer',
          label: '작성자',
          minWidth: 140,
          align: 'right',
        },
        {
          id: 'date',
          label: '등록일',
          minWidth: 170,
          align: 'right',
        },
        {
          id: 'look',
          label: '조회',
          minWidth: 140,
          align: 'right',
        },
      ];

    const rows = viewList.filter((content)=>content.add);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

        useEffect(() => {
            call("/board/list-review?type=review", "GET").then((res) => {setList(res);});
        }, [])

        useEffect(()=>{setViewList(list)},[list])

        const handleChangePage = (event, newPage) => {
          setPage(newPage);
        };

        const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
        };

        const GoToEdit = () => {
            if (localStorage.getItem("ACCESS_TOKEN") === null) {
                window.location.href = "/login"
            } else if (localStorage.getItem("ACCESS_TOKEN") === "null") {
                window.location.href = "/login"
            } else {
                window.location.href="/revieweditor";
            }
            
        }
        useEffect(()=>{
            if (keyword === "" || keyword === null || keyword === " ") {
                setViewList([]);
                call("/board/list-review?type=review", "GET").then((res) => {setViewList(res);});
            }
            if (selectValue === "제목") {
                var tempList = viewList.filter((content)=>content.title.includes(keyword));
                if (tempList.length !== 0) {
                    setViewList(tempList)
                }
            } else if(selectValue === "작성자") {
                var nameList = viewList.filter((content)=>content.writer.includes(keyword));
                if (nameList.length !== 0) {
                    setViewList(nameList);
                }
            }
        },[keyword])
        useEffect(()=>{},[keyword])
        useEffect(()=>{},[selectValue])
    return(<div>
        <Header />
        <div className="board-container">
            <div className="board-title">
                <h1>수강 후기</h1>
                <div className="board-whole-line">
                    <div className="board-search-container">
                        <button className="board-edit-btn" onClick={GoToEdit}>작성하기</button>
                        <div className='board-search-box'>
                                <select name="type" value={selectValue} onChange={(e)=>{setSelectValue(e.target.value)}} className="board-search-select">
                                    <option value="제목">제목</option>
                                    <option value="작성자">작성자</option>
                                </select>
                                <input type="text"
                                    value={keyword}
                                    onChange={(e)=>{setKeyword(e.target.value)}}
                                    className="board-search-input"
                                    placeholder="검색어를 입력해 주세요"></input>
                        </div>
                    </div>
                    <div className="board-list-container">
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            <TableContainer sx={{ maxHeight: 750 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row) => {
                                                return (
                                                    <TableRow hover role="checkbox" className="board-tablerow-list"
                                                    tabIndex={-1}
                                                    key={row.id}
                                                    >
                                                        <TableCell>{row.id}</TableCell>
                                                        <TableCell><Link to={`/reviewdetail/${row.id}`}>{row.title}</Link></TableCell>
                                                        <TableCell align="right">{row.writer}</TableCell>
                                                        <TableCell align="right">{row.writeDate}</TableCell>
                                                        <TableCell align="right">{row.cnt}</TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    rowsPerPageOptions={[10, 25, 100]}
                                    component="div"
                                    count={list.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    className="board-pagination"
                                />
                        </Paper>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Review;