import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../app-config";
import { call } from "../../service/ApiService";
import Header from "../Header/Header";
import Reply from "./Reply";

function GalleryDetail() {
    const {id} = useParams()
    const [boardList, setBoardList] = useState([]);
    const [textList, setTextList] = useState([]);
    const [userData, setUserData] = useState();

    useEffect(() => {
        call("/board/list-image/"+id, "GET").then((res) => {setBoardList(res); setTextList(res.replies)});
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

    const DeleteText = () => {
            var questDelete = window.confirm("정말로 게시글을 삭제하시겠습니까?")
            if (questDelete) {
                axios({
                    headers:{
                        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")
                    },
                    method: "DELETE",
                    url: API_BASE_URL + "/board/delete-image/" + id,
                }).then((res) => {
                    window.location.href="/gallery";
                })
            } else {
            }
    }

    const Teleportation = () => {
        window.location.href="/gallery"
    }

    return(<div>
        <Header />
        <div>
            <div className="board-title">
                <h1 onClick={Teleportation}>행사자료</h1>
            </div>
            <div className="board-detail-all w3-container w3-center">
                <div className="board-detail-container">
                    <div className="board-detail-title">
                    <h4 style={{paddingLeft:"19.4px",paddingTop:"9.4px"}}><strong>{boardList.title}</strong></h4>
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
                    <div className="board-detail-content w3-center" style={{padding:'50px'}}>
                        <img src={boardList.imagePath} style={{width:'auto',height:'400px'}}/>
                    </div>
                    <button className="detail-delete-btn" onClick={DeleteText}>삭제</button>
                </div>
                <div></div>
                <button className="detail-gotolist-btn" onClick={Teleportation}>목록</button>
            </div>
        </div>
    </div>)
}

export default GalleryDetail;