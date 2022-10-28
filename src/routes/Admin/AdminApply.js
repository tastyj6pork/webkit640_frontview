import { useEffect, useState } from 'react';
import { json } from 'react-router-dom';
import { call } from '../../service/ApiService';

import '../Admin/Admin.css';
import ApplyItems from './ApplyItems';
import ApplyResult from './ApplyResult';

function AdminApply() {

    /*const [applyList, setApplyList] = useState([
        {
            id : 1,
            name : "홍길동",
            school : "메사추세츠공과대학교",
            major : "컴퓨터공학과",
            schoolNumber : "20226789",
            email : "webkit640@google.co.kr"
        },
        {
            id : 2,
            name : "김길동",
            school : "메사추세츠공과대학교",
            major : "소프트웨어공학과",
            schoolNumber : "20226789",
            email : "webkit123@google.co.kr"
        },
        {
            id : 3,
            name : "이길동",
            school : "메사추세츠공과대학교",
            major : "광시스템공학과",
            schoolNumber : "20226789",
            email : "webkit456@google.co.kr"
        },
        {
            id : 4,
            name : "박길동",
            school : "메사추세츠공과대학교",
            major : "건축학과",
            schoolNumber : "20226789",
            email : "webkit789@google.co.kr"
        },
        {
            id : 5,
            name : "오길동",
            school : "메사추세츠공과대학교",
            major : "응용수리데이터과학과",
            schoolNumber : "20226789",
            email : "webkit321@google.co.kr"
        },
        {
            id : 6,
            name : "고길동",
            school : "메사추세츠공과대학교",
            major : "컴퓨터공학과",
            schoolNumber : "20226789",
            email : "webkit8910@google.co.kr"
        }
    ])*/

    const [applyList, setApplyList] = useState([]);

    useEffect(() => {
        call("/apply/all","GET",null).then((res)=>{
            console.log(res)
            setApplyList(res.data);
        })
    }, [])

    /*const [applyList, setApplyList] = useState([]);

    useEffect(() => {
        let header = new Headers({

        })

        let options = {
            method : "GET",
            url : API_BASE_URL,
            header : header,

        };

        fetch(options.url, options).then(response => {
            response.json().then((json) => {
                setApplyList(json);
            });
        })
        .catch((error) => console.log(error))
    }, [])*/

    const [saveItems, setSaveItems] = useState([]);
    
    function setItems(content) {
        setSaveItems([...saveItems , content]);
        console.log(saveItems);
    }

    const onRemove = id => {
        setSaveItems(saveItems.filter(saveItems => saveItems.id !== id));
    }

    function resultEnd() {
        console.log(saveItems);
    }

    const [searchType, setSearchType] = useState("");
    
    function Reflash(value) {
        const data = {
            type : searchType,
            keyword : value,
        }
        call("/auth/view-members","GET",data)
    }
    
    return(<div className="apply-total">
        <div className="apply-title">
            <h1>지원관리</h1>
        </div>
        <div className="apply-insert">
            <div className="apply-first-label">
                <h3>지원학생 목록</h3>
            </div>
            <div className="apply-insert-algin">
                <select className="apply-insert-select" onChange={(e) => setSearchType(e.target.value)}>
                    <option value="name">이름</option>
                    <option value="school">학교</option>
                    <option value="major">학과</option>
                </select>
                <input className="apply-insert-search" onChange={(e) => Reflash(e.target.value)} placeholder="   검색어를 입력해 주세요"></input>
            </div>
        </div>
        <div className="apply-insert-table">
            <ul>
                <li className="table-first">이름</li>
                <li className="table-second">학교</li>
                <li className="table-third">학과</li>
                <li className="table-fourth">학번</li>
                <li className="table-fifth">이메일</li>
                <li className="table-sixth">지원파일</li>
                <li className="table-seventh">상태</li>
            </ul>
        </div>
        <div className="apply-items-box">
            {applyList.map((items, id) => (
                <div>
                    <div>{id}</div>
                <ApplyItems
                items={items}
                key={id}
                id={id}
                setItems={setItems}
                /></div>
            ))}
        </div>
        <div className="apply-select-container">
            <div className="apply-last-label">
                <h3>선발 목록</h3>
            </div>
            <div className="applyl-select-result">
                <div className="apply-result-list">{saveItems.map((item) => (
                    <ApplyResult
                    item = {item}
                    key = {item.id}
                    id = {item.id}
                    onRemove={onRemove}
                    />
                ))}</div>
            </div>
            <div className="apply-selection"><button className="apply-select-btn" onClick={resultEnd}>선발 완료</button></div>
        </div>
    </div>)
}

export default AdminApply;