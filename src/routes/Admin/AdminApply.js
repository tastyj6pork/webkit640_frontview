import { useEffect, useState } from 'react';
import { call } from '../../service/ApiService';
import '../Admin/Admin.css';
import ApplyItems from './ApplyItems';
import ApplySelector from './ApplySelector';

function AdminApply() {
    const [applyList, setApplyList] = useState([
        {
            // id : 1,
            name : "홍길동",
            school : "메사추세츠공과대학교",
            major : "컴퓨터공학과",
            schoolNumber : "20226789",
            schoolYear: "4",
            email : "webkit640@google.co.kr"
        },
        {
            // id : 2,
            name : "김길동",
            school : "메사추세츠공과대학교",
            major : "소프트웨어공학과",
            schoolNumber : "20226789",
            schoolYear: "4",
            email : "webkit123@google.co.kr"
        },
        {
            // id : 3,
            name : "이길동",
            school : "메사추세츠공과대학교",
            major : "광시스템공학과",
            schoolNumber : "20226789",
            schoolYear: "4",
            email : "webkit456@google.co.kr"
        },
        {
            // id : 4,
            name : "박길동",
            school : "메사추세츠공과대학교",
            major : "건축학과",
            schoolNumber : "20226789",
            schoolYear: "4",
            email : "webkit789@google.co.kr"
        },
        {
            // id : 5,
            name : "오길동",
            school : "메사추세츠공과대학교",
            major : "응용수리데이터과학과",
            schoolNumber : "20226789",
            schoolYear: "4",
            email : "webkit321@google.co.kr"
        },
        {
            // id : 6,
            name : "고길동",
            school : "메사추세츠공과대학교",
            major : "컴퓨터공학과",
            schoolNumber : "20226789",
            schoolYear: "4",
            email : "webkit8910@google.co.kr"
        }
    ])

    // const [applyList, setApplyList] = useState([]); >> applyList Data GET 테스트 종료 시 주석 지워야됨!
    
    // useEffect(() => {
    //     call("/apply/all","GET",null).then((res)=>{
    //         console.log(res);
    //         setApplyList(res);
    //     })
    // }, [])
    
    const [showList, setShowList] = useState([]);
    const [selectList, setSelectList] = useState([]);

    useEffect(() => {

        setShowList(applyList);

    }, [])

    console.log(selectList);

    function fileListDown(content) {
        setSelectList([...selectList, content]);
        setShowList(showList.filter(showList => showList !== content));
    }

    function fileListUp(content) {
        setShowList([...showList, content]);
        setSelectList(selectList.filter(selectList => selectList !== content));
    }

    function SelectFinish() {

    }


    // 전체 zip.file 추출하는 함수 >> 데이터 위아래로 스위칭하는거 구현했고, 체크박스 상태관리기능 추가 필요하다.
    // async function zipDownload() {
    //     await axios({
    //         method:"POST",
    //         url:API_BASE_URL + "/apply/zip-download",
    //         data: null,
    //         headers: {
    //             "Authorization": "Bearer " + accessToken,
    //         }, 
    //     }).then((res)=>{
            
    //     })
    // }
    
    return(<div className="apply-total">
        {/* <button onClick={zipDownload}>asdfasdf</button> */}
        <div className="apply-title">
            <h1>지원관리</h1>
        </div>
        <div className="apply-insert">
            <div className="apply-first-label">
                <h3>지원학생 목록</h3>
            </div>
            <div className="apply-insert-algin">
                <select className="apply-insert-select">
                    <option value="name">이름</option>
                    <option value="school">학교</option>
                    <option value="major">학과</option>
                </select>
                <input className="apply-insert-search" placeholder="   검색어를 입력해 주세요"></input>
            </div>
        </div>
        <div className="apply-insert-table">
            <ul>
                <li className="table-first">이름</li>
                <li className="table-second">학교</li>
                <li className="table-third">학과</li>
                <li className="table-fourth">학년</li>
                <li className="table-fifth">학번</li>
                <li className="table-sixth">이메일</li>
                <li className="table-seventh">지원파일</li>
                <li className="table-last">상태</li>
            </ul>
        </div>
        <div className="apply-items-box">
            {showList.map((items, index) => (
                <ApplyItems
                items={items}
                key={index}
                fileListDown={fileListDown}
                />
            ))}
        </div>
        <div className="apply-selection">
            <button className="apply-select-btn" onClick={SelectFinish}>선발완료</button>
        </div>
        <div className="apply-select-container">
            <div className="apply-last-label">
                <h3>선발 목록</h3>
            </div>
            <div className="apply-insert-table">
            <ul>
                <li className="table-first">이름</li>
                <li className="table-second">학교</li>
                <li className="table-third">학과</li>
                <li className="table-fourth">학년</li>
                <li className="table-fifth">학번</li>
                <li className="table-sixth">이메일</li>
                <li className="table-seventh">지원파일</li>
                <li className="table-last">상태</li>
            </ul>
        </div>
        <div className="apply-items-box">
            {selectList.map((itemes, j) => (
                <ApplySelector
                itemes={itemes}
                key={j}
                fileListUp={fileListUp}
                />
            ))}
        </div>
            <div className="apply-finish"><button className="apply-finish-btn">선발 확정</button></div>
        </div>
    </div>)
}

export default AdminApply;