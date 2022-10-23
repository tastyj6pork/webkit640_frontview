import '../Student/Student.css';

function StudentApply() {

    return(<div className="apply-total">
        <div className="apply-title">
            <h1>지원하기</h1>
        </div>
        <div className="apply-container">
            <ul>
                <li>
                    <p className="apply-text">이름</p>
                    <input className="apply-name" name="name" placeholder='한글로 공백없이 입력해주세요.'></input>
                </li>
                <li>
                    <p className="apply-text">학과</p>
                    <input className="apply-major" name="major" placeholder='한글로 공백없이 입력해주세요.'></input>
                </li>
                <li>
                    <p className="apply-text">학번</p>
                    <input className="apply-schoolnumber" name="schoolnumber" placeholder='숫자로 공백없이 입력해주세요.'></input>
                </li>
                <li>
                    <p className="apply-text">첨부파일</p>
                    <input className="apply-file" type="file" id="file" name="file"></input>
                    <p className="file-detail">Webkit640 지원파일은 공지사항에서 다운로드하세요.</p>
                </li>
            </ul>
            <div className="apply-submit">
                <button className='apply-submit-btn'>제출하기</button>
            </div>
        </div>
    </div>)
}

export default StudentApply;