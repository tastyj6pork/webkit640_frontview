import { useState } from 'react';
import '../Admin/Admin.css';

function AdminApply() {

    const [applyList, setApplyList] = useState([
        {
            name : "홍길동",
            major : "컴퓨터공학과",
            schoolnumber : "20226789",
        }
    ])

    return(<div className="apply-total">
        <div className="apply-title">
            <h1>지원관리</h1>
        </div>
        <div className="apply-insert">
            <div className="apply-frist-label">
                <h3>지원학생 목록</h3>
            </div>
            <div className="apply-insert-algin">
                <select className="apply-insert-select">
                    <option>이름</option>
                    <option>학교</option>
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
    </div>)
}

export default AdminApply;