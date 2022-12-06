import ReactQuill, { Quill } from 'react-quill';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import Header from "../../component/Header/Header";
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Form } from 'react-router-dom';
import "../Board/Board.css";
import { call } from '../../service/ApiService';
import { API_BASE_URL } from '../../app-config';
import { text } from '@fortawesome/fontawesome-svg-core';
import ImageResize from 'quill-image-resize';
Quill.register('modules/ImageResize', ImageResize);

function GalleryEditor() {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const ACCESS_TOKEN = "ACCESS_TOKEN";
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    function dataOnChange(e) {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file",file);
        axios({
            method:"POST",
            url:API_BASE_URL + "/board/upload-image",
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer " + accessToken,
            },
            data: formData,
        }).then((res) => {
            setImageUrl(API_BASE_URL + res.data)
        })
    }

    function EditBtn() {
        const data = {
            title: title,
            imagePath: imageUrl,
        }
        axios({
            method: "POST",
            url: API_BASE_URL + `/board/save-onlyimage?imagePath=${data.imagePath}&title=${data.title}`,
            headers: {
              Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
            }
          }).then((res) => {
              console.log(data.imagePath);
          });
          alert("게시글이 등록 되었습니다.");
        window.location.href = "/gallery";
    }

    function BackStepBtn() {
        window.location.href = "/gallery"
    }

    useEffect(() => {
        document.getElementById("inputFixedDate").value = new Date().toISOString().slice(0, 10);
    },[])

    return(<div className='Editor'>
    <Header />
    <div className="editor-container w3-display-middle">
        <div className="board-title">
            <h1>행사자료</h1>
        </div>
        <form>
            <div className="editor-box">
                <div className="editor-title">
                    <ul className="editor-title-name">
                        <li>제목</li>
                        <input className="editor-input-name" name="name" onChange={(e) => setTitle(e.target.value)}></input>
                    </ul>
                    <ul className="editor-title-date">
                        <li>작성일</li>
                        <input id="inputFixedDate" className="editor-input-date" name="date" style={{paddingLeft:"10px"}} readOnly></input>
                    </ul>
                    <ul className="editor-title-files">
                        <li>첨부파일</li>
                        <input type="file" className="editor-input-files" name="files" onChange={(e) => {
                            setFile(e.target.files[0]);
                            dataOnChange(e);
                        }}></input>
                    </ul>
                </div>
            </div>
        </form>
        <div className="editor-submit-btn">
            <button className="editor-btn-delete" onClick={BackStepBtn}>취소</button>
            <button className="editor-btn-enter" onClick={EditBtn}>등록</button>
        </div>
    </div>
</div>)
}

export default GalleryEditor;