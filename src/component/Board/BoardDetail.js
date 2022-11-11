import Header from "../Header/Header";

function BoardDetail() {

    return(<div>
        <Header />
        <div>
            <div className="board-title">
                <h1>공지사항</h1>
            </div>
            <div className="board-detail-container">
                <div className="board-detail-title">
                    <h4>제목들어갈자리</h4>
                </div>
                <div className="board-detail-sublist">
                    <ul>
                        <li className="li-title-first">작성자</li>
                        <li className="li-text">홍길동</li>
                        <li className="li-title-second">조회</li>
                        <li className="li-text">99</li>
                        <li className="li-title-third">작성일</li>
                        <li className="li-text">2022-99-99</li>
                    </ul>
                </div>
                <div className="board-detail-files">
                    <ul className="detail-files-title">
                        <p>첨부</p>
                    </ul>
                    <ul className="detail-files-list">
                        <li>첨부파일 리스트</li>
                    </ul>
                </div>
                <div className="board-detail-content">
                    <p>대충 게시판 내용</p>
                </div>
            </div>
            <div className="board-detail-ripple">
                <h4>전체댓글</h4>
                <h4>(0)</h4>
                <textarea className="detail-ripple-container">

                </textarea>
            </div>
            <button className="detail-ripple-btn">입력</button>
            <div className="board-detail-next">
                <ul className="detail-next-first">
                    <li className="detail-updown">이전글</li>
                    <li className="detail-updown-title">대충 이전글 제목</li>
                </ul>
                <ul className="detail-next-last">
                    <li className="detail-updown">다음글</li>
                    <li className="detail-updown-title">대충 다음글 제목</li>
                </ul>
            </div>
            <button className="detail-gotolist-btn">목록</button>
        </div>
    </div>)
}

export default BoardDetail;