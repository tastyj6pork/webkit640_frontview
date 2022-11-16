import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../app-config";
import { call } from "../../service/ApiService";
import Header from "../Header/Header";
import Reply from "./Reply";

function BoardDetail() {

    const {id} = useParams()
    const [boardList, setBoardList] = useState([]);
    const [boardRipple, setBoardRipple] = useState([]);
    const [textList, setTextList] = useState([]);
    const [userData, setUserData] = useState();
    const [isAdmin, setIsAdmin] = useState();

    useEffect(() => {
        call("/board/list/"+id, "GET").then((res) => {setBoardList(res); setTextList(res.replies)});
        call("/auth/find-user","GET").then((res)=>{setIsAdmin(res.admin)});
        axios({
            headers:{
                Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")
            },
            method: "GET",
            url: API_BASE_URL + "/auth/find-user",
        }).then((res) => {if (res.data.admin) {
            setUserData(true);
        }})
    }, [])

    console.log(boardList);

    const fileNamesDownload = () => {
        axios({
            headers:{
                Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")
            },
            method: "GET",
            url: API_BASE_URL + "/board/download-upload-file?boardId=" + id,
            responseType: "blob"
        }).then((res) => {
            const blob = new Blob([res.data]);
            const fileObjectUrl = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = fileObjectUrl;
            link.style.display = "none";
            const extractDownloadFilename = (response) => {
                const disposition = response.headers["content-disposition"];
                console.log(disposition)
                const fileName = decodeURI(
                    disposition
                    .match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)[1]
                    .replace(/['"]/g, "")
                );
                // const fileName = decodeURI(
                //     disposition
                // )
                return fileName;
            };
            link.download = extractDownloadFilename(res);

            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(fileObjectUrl);
        })
    }

    const RippleInputBtn = () => {
        axios({
            headers:{
                Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")
            },
            method: "POST",
            url: API_BASE_URL + "/board/save-reply",
            data: {
                "boardId": id,
                "type": "reply",
                "content": boardRipple,
            }
        }).then((res) => {
            window.location.href="/boarddetail/" + id;
        })
    }

    const DeleteText = () => {
            var questDelete = window.confirm("정말로 게시글을 삭제하시겠습니까?")
            if (questDelete) {
                axios({
                    headers:{
                        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")
                    },
                    method: "DELETE",
                    url: API_BASE_URL + "/board/delete-board/" + id,
                }).then((res) => {
                    window.location.href="/board/";
                })
            } else {
            }
    }

    const Teleportation = () => {
        window.location.href="/board"
    }

    return (
    <div className="BoardDetail">
        <Header />
        <div className="board-title">
            <h1 onClick={Teleportation}>공지사항</h1>
        </div>
        <div className="">
            <div className="board-detail-container">
                <div className="board-detail-title">
                    <h4>{boardList.title}</h4>
                </div>
                <div className="board-detail-sublist">
                    <ul>
                        <li className="li-title-first">작성자</li>
                        <li className="li-text">{boardList.writer}</li>
                        <li className="li-title-second">조회</li>
                        <li className="li-text">{boardList.cnt}</li>
                        <li className="li-title-third">작성일</li>
                        <li className="li-text">{boardList.createDate}</li>
                    </ul>
                </div>
                <div className="board-detail-files">
                    <ul className="detail-files-title">
                        <p>첨부</p>
                    </ul>
                    <ul className="detail-files-list">
                        <li onClick={fileNamesDownload}>{boardList.fileNames}</li>
                    </ul>
                </div>
                <div className="board-detail-content">
                    <div dangerouslySetInnerHTML={{ __html : boardList.content}} />
                </div>
            </div>
            <div className="board-detail-ripple">
                <h4>전체댓글</h4>
                <h4>{"(" + textList.length + ")"}</h4>
                <textarea className="detail-ripple-container" onChange={(e) => setBoardRipple(e.target.value)} />
            </div>
            <button className="detail-ripple-btn" onClick={RippleInputBtn}>입력</button>
            <div className="detail-ripple-content" style={textList.length === 0 ? {display:"none"} : {display:"block"}}>
                {textList.map((row,idx) => {
                    return(
                        <Reply
                        key={row.id}
                        row={row}
                        boardId={id}
                        userData={userData}
                        />
                    )
                })}
            </div>
            <div>
                {isAdmin && <button className="detail-delete-btn" onClick={DeleteText}>삭제</button>}
            </div>
            <div className="board-detail-next">
                <ul className="detail-next-first">
                    <li className="detail-updown">이전글</li>
                    <li className="detail-updown-title">대충 이전글 제목</li>
                </ul>
                <ul className="detail-next-last">
                    <li className="detail-updown">다음글</li>
                    <li className="detail-updown-title">대충 다음글 제목</li>
                </ul>
            </div>
            <button className="detail-gotolist-btn" onClick={Teleportation}>목록</button>
        </div>
    </div>
    )
}

export default BoardDetail;