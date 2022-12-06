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

function Editor() {

    const [value, setValue] = useState("");
    const quillRef = useRef();

    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");

    const ACCESS_TOKEN = "ACCESS_TOKEN";
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    useEffect(() => {
        document.getElementById("inputFixedDate").value = new Date().toISOString().slice(0, 10);
    },[])

    function EditBtn() {

        const formData = new FormData();
        const data = {
            type: "notification",
            title: title,
            content: value,
        }
        formData.enctype = "multipart/form-data";
        formData.append("file", file);

        call("/board/save-board","POST",data).then((res) => {
            // console.log(formData.has("file"));
            if(file === "") {
                alert("success")
                window.location.href ="/board"
            } else {
                axios({
                method:"POST",
                url:API_BASE_URL + "/board/save-file/" + res,
                data: formData,
                headers: {
                    // "Content-Type": "multipart/form-data",
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

        });
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

    const imageHandler = () => {
        const editor = quillRef.current.getEditor();
        console.log(editor);

        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.setAttribute("name", "file");
        input.click();

        input.onchange = async () => {

            const file = input.files[0];
            const formData = new FormData();
            formData.append("file", file);
            var imageUrl;
            await axios({
                method:"POST",
                url:API_BASE_URL + "/board/upload-image",
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": "Bearer " + accessToken,
                },
                data: formData,
            }).then((res) => {console.log(res); imageUrl = API_BASE_URL + res.data})
            console.log(imageUrl)

            const editor = quillRef.current.getEditor();
            const range = editor.getSelection();
            editor.insertEmbed(range.index, "image", imageUrl);
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
        ImageResize: {
            parchment: Quill.import('parchment')
        }
    }), []);

    return(
        <div className='Editor'>
            <Header />
            <div className="editor-container w3-display-middle">
                <div className="board-title">
                    <h1>공지사항</h1>
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
                                <input type="file" className="editor-input-files" name="files" onChange={(e) => setFile(e.target.files[0])}></input>
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
            </div>
        </div>
    )
}

export default Editor;