import Header from '../Header/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './Frequently.css';

function Frequently() {

    return(<div className='Frequently'>
        <Header/>
        <div className="frequently-background">
            <Box>
                <Typography style={{textAlign:"center" ,marginTop:"70px", padding:"100px", fontFamily:"Pretendard-Regular", letterSpacing:"normal" ,fontWeight:"600", color:"rgb(7, 1, 38)"}} variant="h2" gutterBottom className='faq-title'>
                    자주묻는 질문
                </Typography>
            </Box>
            <div className="frequently-container">
                <div className="frequently-content">
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>다른 과목과 병행하여 들을 수 있나요?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p>원칙적으로 교육 기간 내 다른 프로그램이나 교과목 이수는 불가합니다. 어쩔 수 없는 경우 (졸업을 위한 전공필수 등) 미리 책임교수님과 협의하여 승인을 받아 3학점까지
                            이수 할 수 있습니다만, 우리 교육(마이크로디그리) 수업 시간과 중복되어서는 안 되며, 개별 수업 참여 시간은 우리 교육에서 결석 처리됩니다.</p>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="frequently-next-content">
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>대면/비대면 일정에 대하여 더욱 자세하게 알고 싶어요.</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p>특별한 상황 (예:코로나 대유행)이 발생하지 않는 한 전체 교육 일정 동안 대학 내 지정된 장소에 출석하여 교육을 이수해야 하며
                            시간별 출결 관리가 이루어집니다. 타 대학과 컨소시엄으로 이루어지는 교육이기 때문에 일부 온라인을 통한 수업이나 팀 프로젝트 기간 동안 팀별 소회의실
                            활동, 타 대학 방문 수업, 참여 기업 방문 수업 등 다양한 형태가 가능합니다.</p>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="frequently-next-content">
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>출결 기준은 어떻게 적용되나요?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p>1. 출석체크 : 2시간 마다 출석체크</p>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell>구분</TableCell>
                                            <TableCell align="center">내용</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell component="th" scope="row">조퇴</TableCell>
                                                <TableCell align="center">당일 교육시간 1/2 이하 인정</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">외출</TableCell>
                                                <TableCell align="center">2시간 기준 인정, 넘어갈 시 조퇴처리</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">지각</TableCell>
                                                <TableCell align="center">매 교시 1/2 이전에 참여할 시</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">결석</TableCell>
                                                <TableCell align="center">하루 1/2 미만으로 수강 = 결석처리 <br />
                                                지각,조퇴,외출 합산 3회 = 1일 결석</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            <p>*각 구분별 출석사유 동시 체크 시, 각각 체크됨 {"("} 예 : 지각 후 조퇴 시, 2회 각각 체크됨 {")"}</p>
                            <p>*타 수업 이수 및 악용사례 학생 한해, 합 8시간 기준 결석처리 1회 적용</p>
                            <br />
                            <p>2. 출결인정사유 및 제출 증빙서류</p>
                            <p>{"1) 출결사항"}</p>
                            <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell>출결인정사유</TableCell>
                                            <TableCell align="center">출결인정 증빙서류</TableCell>
                                            <TableCell align="center">출결인정기간</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell component="th" scope="row">{"훈련(예비군, 민방위)"}</TableCell>
                                                <TableCell align="center">종이 통지서, 메일통지, 문자통지 등</TableCell>
                                                <TableCell align="center">당일</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">{"국가시험(자격증, 면허증)"}</TableCell>
                                                <TableCell align="center">수험표 등</TableCell>
                                                <TableCell align="center">당일</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">정부에서 인정하는 대회</TableCell>
                                                <TableCell align="center">참가신청서 등</TableCell>
                                                <TableCell align="center">당일</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">기업 채용 면접</TableCell>
                                                <TableCell align="center">면접 확인서, 수험표 등</TableCell>
                                                <TableCell align="center">당일</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">병가</TableCell>
                                                <TableCell align="center">의료 진단서, 통원확인서, 진료확인서</TableCell>
                                                <TableCell align="center">당일</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">{"결혼(본인)"}</TableCell>
                                                <TableCell align="center">청첩장</TableCell>
                                                <TableCell align="center">당일 등</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">사망</TableCell>
                                                <TableCell align="center">{"사망(증명서)"}</TableCell>
                                                <TableCell align="center">3일 <br /> *배우자, 본인 및 배우자 부모, 자녀는 5일 인정</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">출산</TableCell>
                                                <TableCell align="center">{"출산(증명서)"}</TableCell>
                                                <TableCell align="center">당일 등</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="frequently-next-content">
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>교육지원금은 어떻게 지급되나요?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p>교육 160시간을 기준으로 30만원씩 4번 지급됩니다. 160시간마다 출결 80% 이상을 만족해야 하며,
                            미만일 경우 퍼센트에 따라 차등 지급됩니다. (단, 기타소득세 제외되며, 제외된 소득세는 추후 종합소득세 신고 시 반환 가능합니다.)</p>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="frequently-next-content">
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>비전공자 또는 졸업생도 지원이 가능한가요?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p>웹킷640 지원 자격은 본교 3학년 이상의 재학생, 휴학생 졸업예정자 및 졸업생이며 전공무관입니다. IT관련 학과 졸업생 및 졸업예정자는 우대사항입니다.</p>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="frequently-next-content">
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>학점 반영 시, 시험이나 과제 등 성적 평가 방법</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p>웹 개발 실무인재 양성 과정( 마이크로디그리 ) 교과목별 평가 방법 <br />
                            * 웹프론트엔드, 웹백엔드 : 컨소시엄 공동 교육 과목이므로 출석과 실습 결과물을 확인하여 S/U 부여 <br />
                            * 웹프레임워크, 웹개발 프로젝트 : 실습 및 설계과목으로 절대평가( A이상 40% ). 웹 프레임워크 교과목은 담당 교수님 재량에 따라
                            시험에 의한 평가도 가능 <br />
                            * 산학연계 웹개발 프로젝트 : 종합설계 교과목으로 절대평가( A이상 60% )</p>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="frequently-next-content">
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>웹 개발을 한 번도 해본 적 없는데 수업을 따라갈 수 있나요?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p>웹 개발 경험은 없어도 되지만 자바 언어와 데이터베이스에 대한 이해와 경험이 필요합니다. 교육 시작 전 "웹 개발을 위한 자바/데이터베이스" 특강을
                                계획하고 있으니 이를 이수하거나 교육 사이트 등을 통해 지식을 쌓으면 좋겠습니다. 교육 기간 중에도 필요 시 추가 수업을 진행할 수 있습니다.
                            </p>
                            <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell>선행 지식</TableCell>
                                            <TableCell align="center">필수 여부</TableCell>
                                            <TableCell align="center">선행지식 없을 시, 교육 이수 난이도</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell component="th" scope="row">자바 프로그래밍</TableCell>
                                                <TableCell align="center">O</TableCell>
                                                <TableCell align="center">상당히 어려움</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">데이터베이스 설계 및 프로그래밍</TableCell>
                                                <TableCell align="center">O</TableCell>
                                                <TableCell align="center">백엔드 부분 어려움</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">HTML / CSS / JavaScript</TableCell>
                                                <TableCell align="center">X</TableCell>
                                                <TableCell align="center">프론트엔드 부분 쉬움</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">Linux / Server</TableCell>
                                                <TableCell align="center">X</TableCell>
                                                <TableCell align="center">백엔드 부분 어려울 수 있음</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <br />
                                <p>* 비전공자 1기 교육생들 후기</p>
                                <p>
                                    A : 초반 SW이론교육이 진행될 때는 수업이 끝난 후 복습을 하지 않으면 못 따라갈 정도의 난이도라고 느꼈지만, 프로젝트를
                                    진행하면서 많은 도움을 받았고 지금은 "별 거 아니었다."라고 생각되는 부분도 있습니다. 저는 교육이 시작되기 전, 개인적으로
                                    자바스크립트에 대해 공부했던 것이 도움이 되었습니다. 비전공자라도 관련 수업을 들은 경험이 있다면 충분히 따라갈 수 있습니다.
                                    <br />
                                    B : 짧은 시간에 다양한 언어들을 완벽하게 이해하고 쓸 수는 없지만, 모르는 것들을 강사님, 교수님, 친구들 등에게 물어보면서 공부하면 충분히 할 수 있습니다.
                                </p>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="frequently-next-content">
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>수료 기준은 무엇인가요?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p>전체 출석률의 80% 이상을 만족해야 수료 가능합니다. 수료대상자에게는 교육이 끝난 후, 수료증을 발급해드립니다.</p>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="frequently-next-content">
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>마이크로디그리 과정은 전공학점으로 인정되나요?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <p>컴퓨터공학과/컴퓨터소프트웨어공학과/인공지능공학과 에 한하여 전공선택 인정됩니다.<br/>
                            그 외 타학과(부)의 경우에는 일반선택으로 인정됩니다.</p>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    </div>)
}

export default Frequently;