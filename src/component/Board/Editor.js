import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import Header from "../../component/Header/Header";
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Form } from 'react-router-dom';
import "../Board/Board.css";
import { call } from '../../service/ApiService';
import { API_BASE_URL } from '../../app-config';

function Editor() {
    
    const [value, setValue] = useState("");
    const quillRef = useRef();

    const [name, setName] = useState("");
    const [writer, setWriter] = useState("");
    const [date, setDate] = useState("");
    const [files, setFiles] = useState("");

    const ACCESS_TOKEN = "ACCESS_TOKEN";
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    useEffect(() => {
        document.getElementById("inputFixedDate").value = new Date().toISOString().slice(0, 10);
    },[])

    function EditBtn() {

        const formData = new FormData();
        const data = {
            name: name,
            writer: writer,
            date: date,
        }
        formData.enctype = "multipart/form-data";
        formData.append("files", files);
        
        call("","POST",data).then((res) => {console.log(res);});
        axios({
            method:"POST",
            url:API_BASE_URL + "",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer " + accessToken, 
            },
        }).then((res) => {
            if(res.status === 200) {
                console.log(res);
                alert("게시글 업로드 완료 되었습니다.");
                window.location.href = "/board";
            }
        })

    }

    function BackStepBtn() {
        window.location.href = "/board"
    }

    console.log(value);

    const toolbarOptions = [
        ["link", "image"],
        [{ font: [] }],
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
      ];
    
      const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "align",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "background",
        "color",
        "link",
        "image",
        "width",
      ];

    function imageUrlHandler() {

        const range = this.quill.getSelection();
        const url = prompt("");

        if(url) {
            this.quill.insertEmbed(range.index, "image", url);
        }
    }

    function imageHandler() {
        
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", ".png, .jpg, .jpeg");
        input.click();

        input.onchange = (e) => {

            const files = e.target.files;
            const formData = new FormData();
            formData.append("files", files[0]);

            const tempFile = API_BASE_URL.file.postTempFileUpload(formData);
            tempFile.then(response => {

                const fileSrno = response.fileSrno;
                const range = this.quill.getSelection();

                this.quill.insertEmbed(range.index, "image", "http://" + fileSrno);
            });
        }
    }
    
    const modules = useMemo(() => ({
        toolbar: {
            container: toolbarOptions,
            handlers: {
                imageUrl: imageUrlHandler,
                image: imageHandler,
            },
        },
    }), []);

    return(<div className="editor-container">
        <Header />
        <div className="board-title">
            <h1>공지사항</h1>
        </div>
        <form>
            <div className="editor-box">
                <div className="editor-title">
                    <ul className="editor-title-name">
                        <li>제목</li>
                        <input className="editor-input-name" name="name" onChange={(e) => setName(e.target.value)}></input>
                    </ul>
                    <ul className="editor-title-writer">
                        <li>작성자</li>
                        <input className="editor-input-writer" name="writer" onChange={(e) => setWriter(e.target.value)}></input>
                    </ul>
                    <ul className="editor-title-date">
                        <li>작성일</li>
                        <input id="inputFixedDate" className="editor-input-date" name="date" style={{paddingLeft:"10px"}} onChange={(e) => setDate(e.target.value)} readOnly></input>
                    </ul>
                    <ul className="editor-title-files">
                        <li>첨부파일</li>
                        <input type="file" className="editor-input-files" name="files" onChange={(e) => setFiles(e.target.files[0])}></input>
                    </ul>
                </div>
                    <ReactQuill
                        ref={quillRef}
                        placeholder="내용을 입력해주세요."
                        theme="snow"
                        value={value}
                        modules={modules}
                        formats={formats}
                        onChange={setValue}
                        style={{width:"1164.8px", height:"350px", marginLeft:"165px"}}
                    />
            </div>
        </form>
                <div className="editor-submit-btn">
                    <button className="editor-btn-delete" onClick={BackStepBtn}>취소</button>
                    <button className="editor-btn-enter" onClick={EditBtn}>등록</button>
                </div>
    </div>)
}

export default Editor;