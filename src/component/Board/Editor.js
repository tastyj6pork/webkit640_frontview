import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import Header from "../../component/Header/Header";
import { useEffect, useRef, useState } from 'react';
import { AxiosError } from 'axios';
import { Form } from 'react-router-dom';
import "../Board/Board.css";

function Editor() {
    
    const [value, setValue] = useState('');

    const toolbarOptions = [
        ["link", "image"],
        [{ font: [] }],
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ['clean']
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
        "clean",
      ];
    
      const modules = {
        toolbar: {
          container: toolbarOptions,
        },
      };
    
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
                        <input></input>
                    </ul>
                    <ul className="editor-title-writer">
                        <li>작성자</li>
                        <input></input>
                    </ul>
                    <ul className="editor-title-date">
                        <li>작성일</li>
                        <input></input>
                    </ul>
                    <ul className="editor-title-files">
                        <li>첨부파일</li>
                        <input type="file"></input>
                    </ul>
                </div>
                    <ReactQuill
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
                    <button className="editor-btn-delete">취소</button>
                    <button className="editor-btn-enter">등록</button>
                </div>
    </div>)
}

export default Editor;