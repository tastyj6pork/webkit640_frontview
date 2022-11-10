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

const columns = [
    { id: 'no', label: '번호', minWidth: 100},
    { id: 'title', label: '제목', minWidth: 250 },
    {
      id: 'writer',
      label: '작성자',
      minWidth: 140,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'date',
      label: '등록일',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'look',
      label: '조회',
      minWidth: 140,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];
  
  function createData(no, title, writer, date,  look) {
    return { no, title, writer, date, look};
  }
  
  const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
  ];

function LectureData() {

        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(10);
      
        const handleChangePage = (event, newPage) => {
          setPage(newPage);
        };
      
        const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
        };

        const BoardChange = () => {
            window.location.href="/board";
        }

    return(<div>
        <Header />
        <div className="board-container">
            <div className="board-title">
                <h1>강의자료</h1>
                <div className="board-title-btn">
                    <p onClick={BoardChange}>공지사항</p>
                    <p style={{border:"3px solid black"}}>강의자료</p>
                </div>
                <div className="board-search-container">
                    <select name="type" className="board-search-select">
                        <option value="제목">제목</option>
                        <option value="작성자">작성자</option>
                        <option value="내용">내용</option>
                    </select>
                    <input className="board-search-input" placeholder="검색어를 입력해 주세요"></input>
                    <button className="board-search-btn">검색</button>
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
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                    </Paper>
                </div>
            </div>
        </div>
        <Footer />
    </div>)
}

export default LectureData;