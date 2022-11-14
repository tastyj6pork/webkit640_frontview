import axios from "axios";
import { API_BASE_URL } from "../../app-config";
import "../Board/Board.css";

function Reply({row, boardId, userData}) {

    const ReplyDelete = () => {
        var questDelete = window.confirm("정말로 댓글을 삭제하시겠습니까?")
        if (questDelete) {
            axios({
                headers:{
                    Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")
                },
                method: "DELETE",
                url: API_BASE_URL + "/board/delete-board/" + row.id,
            }).then((res) => {  
                window.location.href="/boarddetail/" + boardId;
            })
        } else {
        }
       
    }

    return(<div>
        <div className="reply-container">
            <ul>
                <li>{row.writer}</li>
                <li>{row.createDate}</li>
                <li><button onClick={ReplyDelete} style={ userData ? {display:"inline-block"} : {display:"none"}}>삭제</button></li>
            </ul>
            <p>{row.content}</p>
        </div>
    </div>)
}

export default Reply;