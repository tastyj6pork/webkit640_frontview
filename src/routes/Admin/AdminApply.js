import { useState } from 'react';
import '../Admin/Admin.css';
import ApplyItems from './ApplyItems';
import ApplyResult from './ApplyResult';

function AdminApply() {

    const [applyList, setApplyList] = useState([
        {
            id : 1,
            name : "홍길동",
            major : "컴퓨터공학과",
            schoolnumber : "20226789",
            email : "webkit640@google.co.kr"
        },
        {
            id : 2,
            name : "김길동",
            major : "컴퓨터공학과",
            schoolnumber : "20226789",
            email : "webkit640@google.co.kr"
        },
        {
            id : 3,
            name : "이길동",
            major : "컴퓨터공학과",
            schoolnumber : "20226789",
            email : "webkit640@google.co.kr"
        },
        {
            id : 4,
            name : "박길동",
            major : "컴퓨터공학과",
            schoolnumber : "20226789",
            email : "webkit640@google.co.kr"
        },
        {
            id : 5,
            name : "오길동",
            major : "컴퓨터공학과",
            schoolnumber : "20226789",
            email : "webkit640@google.co.kr"
        },
        {
            id : 6,
            name : "고길동",
            major : "컴퓨터공학과",
            schoolnumber : "20226789",
            email : "webkit640@google.co.kr"
        }
    ])
    
    const [saveItem, setSaveItem] = useState([]);

    return(<div className="apply-total">
        <div className="apply-title">
            <h1>지원관리</h1>
        </div>
        <div className="apply-insert">
            <div className="apply-first-label">
                <h3>지원학생 목록</h3>
            </div>
            <div className="apply-insert-algin">
                <select className="apply-insert-select">
                    <option>이름</option>
                    <option>학과</option>
                    <option>학번</option>
                </select>
                <input className="apply-insert-search" placeholder="   검색어를 입력해 주세요"></input>
            </div>
        </div>
        <div className="apply-insert-table">
            <ul>
                <li className="table-first">이름</li>
                <li className="table-second">학과</li>
                <li className="table-third">학번</li>
                <li className="table-fourth">이메일</li>
                <li className="table-fifth">상태</li>
            </ul>
        </div>
        <div className="apply-items-box">
            {applyList.map((items) => (
                <ApplyItems
                items={items}
                key={items.id}
                itemList = {saveItem}
                setSaveItem={setSaveItem}
                />
            ))}
        </div>
        <div className="apply-select-container">
            <div className="apply-last-label">
                <h3>선발 목록</h3>
            </div>
            <div className="applyl-select-result">
                {saveItem.map((selection) => (
                    <ApplyResult 
                    selection={selection}
                    key={selection.id} />
                ))}
            </div>
            <div className="apply-selection"><button className="apply-select-btn">선발 완료</button></div>
        </div>
    </div>)
}

export default AdminApply;