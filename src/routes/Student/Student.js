import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { call } from '../../service/ApiService';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Student() {

    const [applyResult, setApplyResult] = useState([]);
    const [resultDate, setResultDate] = useState("");
    let today = new Date();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [finalResult, setFinalResult] = useState("");

    useEffect(() => {
        call("/apply/member-applicant", "GET").then((res) => {
            console.log(res)
            setApplyResult(res);
            setFinalResult(res.adminApply)
             });
        call("/main/data", "GET").then((res) => setResultDate(new Date (res.passAnnouncementDate)));
    },[])

    useEffect(() => {
        if (applyResult.select) {
            alert("꺼져");
            window.location.href="/";
        }
    },[applyResult])
    
    console.log(applyResult);
    console.log(resultDate);
    console.log(today);
    console.log(today > resultDate);
    console.log(finalResult);

    let FinalDate = (today > resultDate);
    

    const ApplyResult = () => {
        if (FinalDate) {
            handleOpen();
        } else {
            alert("아직 지원결과 확인기간이 아닙니다.")
        }
    }

    const FinalChoice = () => {
        call("/apply/trainee-select", "POST");
        alert("선발이 확정되었습니다.");
        window.location.href="/";
    }

    const ReturnStudent = () => {
        window.location.href="/student"
    }

    return(<div className="apply-total">
        <div className="apply-title">
            <h1>지원결과</h1>
        </div>
        <div className="apply-container">
            <div className="apply-result-container">
                <div className="result-title-first">
                    <h2>Webkit640 지원모집 결과</h2>
                    <p>{applyResult.name + "   " + applyResult.major + " " + applyResult.schoolNumber}</p>
                </div>
                <div className="result-title-second">
                    <p>
                        <CalendarMonthIcon
                        fontSize="large"
                        />
                    </p>
                    <p>지원일자 : {applyResult.date}</p>
                    <input type="button" onClick={ApplyResult} value={FinalDate ? "결과확인" : "지원중"} style={FinalDate ? {background:"green", color:"white"} : {background:"blue", color:"white"}}></input>
                </div>
            </div>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <h1 className="modal-title" style={finalResult ? {color:"red"} : {color:"black"}}>{finalResult ? "축하드립니다" : "Webkit640에 지원해주셔서 감사합니다"}</h1>
            <p className="modal-content">{finalResult ? "Webkit640에 합격하셨습니다!" : "먼저 Webkit640에 많은 관심을 가지고 지원해 주신 데 대해 진심으로 감사드립니다. 선발인원에 제한이 있어 부득이 하게 귀하를 선발하지 못하게 된 점을 매우 안타깝게 생각합니다. 앞으로도 Webkit640에 대한 많은 관심과 격려 부탁드리며, 귀하의 앞날에 행복이 가득하길 기원합니다. 감사힙니다."}
            <br />{finalResult ? "자세한 사항은 홈페이지 공지사항을 확인해주세요." : " "}</p>
            <div className="modal-input">
                <input type="button" className="modal-btn" onClick={finalResult ? FinalChoice : ReturnStudent} value={finalResult ? "최종확인" : "돌아가기"}></input>
                <p style={{textAlign:"center"}}>{finalResult ? "최종확인을 클릭하여야 선발이 완료됩니다." : ""}</p>
            </div>
            </Box>
        </Modal>
    </div>)
}

export default Student;