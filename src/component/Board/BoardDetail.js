import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../app-config";
import { call } from "../../service/ApiService";
import Header from "../Header/Header";

function BoardDetail() {

    const {id} = useParams()
    const [boardList, setBoardList] = useState([]);

    useEffect(() => {
        call("/board/list/"+id, "GET").then((res) => setBoardList(res));
    }, [])

    console.log(boardList);

    const fileNamesDownload = () => {
        axios({
            headers:{
                Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")
            },
            method:"POST",
            url: API_BASE_URL + "/board/download" + id,
            data: {id: id},
            responseType: "blob"
        }).then((res) => {
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

    return(<div>
        <Header />
        <div>
            <div className="board-title">
                <h1>공지사항</h1>
            </div>
            <div className="board-detail-container">
                <div className="board-detail-title">
                    <h4>{boardList.title}</h4>
                </div>
                <div className="board-detail-sublist">
                    <ul>
                        <li className="li-title-first">작성자</li>
                        <li className="li-text">{boardList.writer}</li>
                        <li className="li-title-second">조회</li>
                        <li className="li-text">99</li>
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
                <h4>(0)</h4>
                <textarea className="detail-ripple-container">

                </textarea>
            </div>
            <button className="detail-ripple-btn">입력</button>
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
            <button className="detail-gotolist-btn">목록</button>
        </div>
    </div>)
}

export default BoardDetail;