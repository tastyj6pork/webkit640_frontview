import { useState } from 'react';
import { BsSearch } from "react-icons/bs";
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
            <p className="apply-number">총{}건</p>
            <div className="apply-insert-algin">
                <select className="apply-insert-select">
                    <option>이름</option>
                    <option>학교</option>
                    <option>학번</option>
                </select>
                <input className="apply-insert-search" placeholder="   검색어를 입력해 주세요"></input>
            </div>
        </div>
        <div className="apply-result">
        </div>    
    </div>)
}

export default AdminApply;