import { useCallback, useEffect, useState } from 'react';
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
    
    const [showList, setShowList] = useState([]); // 지원학생 목록 리스트
    const [selectList, setSelectList] = useState([]); // 선발 목록 리스트
    const [isChecked, setIsChecked] = useState(false); // 체크 선택 여부 리스트
    const [checkItems, setCheckItems] = useState([]); // 체크 선택 목록 리스트

    const [filterList, setFilterList] = useState([]);
    const [studentSearch, setStudentSearch] = useState();
    const [schoolSearch, setSchoolSearch] = useState();
    const [majorSearch, setMajorSearch] = useState();
    const [schoolYearSearch, setSchoolYearSearch] = useState();

    useEffect(() => {
        let list = [];
        applyList.forEach((item, i) => {
            item.checked = false;
            list = [...list, item];
        });
        setShowList(list);
    }, [])


    //선발완료 누를시 체크박스에 담긴 데이터 아래로 내리는 함수
    function SelectFinish() {
        setSelectList([...selectList, ...checkItems]);
        let showTestList = [...showList];
        for (let i=0; i<checkItems.length; i++) {
            showTestList = showTestList.filter(content => content.email !== checkItems[i].email);
        }
        setShowList(showTestList);
        console.log(checkItems.length);
        console.log(checkItems);
        console.log(showList);
        setCheckItems([]);
    }

    //선택버튼 작동 시 아래로 데이터 내리는 함수 -ㅈㅇ
    function fileListDown(content) {
        setSelectList([...selectList, content]);
        setShowList(showList.filter(showList => showList !== content));
    }

    //삭제버튼 작동 시 위로 데이터 올리는 함수 -ㅈㅇ    
    function fileListUp(content) {
        setShowList([...showList, content]);
        setSelectList(selectList.filter(selectList => selectList !== content));
    }

    //체크박스 true일때의 데이터만 저장해주는 함수
    function fileCheckList(content) {
        if(content.checked) {
            setCheckItems([...checkItems, content]);
        } else if (!content.checked && checkItems.find(one => one === content)) {
            const filter = checkItems.filter(one => one !== content)
            setCheckItems([...filter])
        }
    }
    
    function onCheckAll(checkAll) {
        
        if(checkAll) {
            setCheckItems(showList);
            for(let i=0; i<showList.length; i++) {
                showList[i].checked = true; 
            }
        }
        else {
            setCheckItems([]);
            for(let i=0; i<showList.length; i++) {
                showList[i].checked = false; 
            }
        }
    }

    //다중 조건 검색 필터링 시켜주는 함수
    function filterData() {
    
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
                <input className="apply-insert-search" placeholder="   이름을 입력해 주세요"
                onChange={(e) => setStudentSearch(e.target.value)}></input>
                <input className="apply-insert-search" placeholder="   학교를 입력해 주세요"
                onChange={(e) => setSchoolSearch(e.target.value)}></input>
                <input className="apply-insert-search" placeholder="   학과를 입력해 주세요"
                onChange={(e) => setMajorSearch(e.target.value)}></input>
                <input className="apply-insert-search" placeholder="   학년을 입력해 주세요"
                onChange={(e) => setSchoolYearSearch(e.target.value)}></input>
                <button className="apply-search-btn">조회</button>
            </div>
        </div>
        <div className="apply-insert-table">
            <ul>
                <input className="items-checkbox" type="checkbox" onChange={(e) => onCheckAll(e.target.checked)}
                checked={checkItems.length === showList.length ? true : false}></input>
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
                fileCheckList={fileCheckList}
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
                <input className="items-checkbox" type="checkbox" style={{dispaly:"none"}}></input>
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