import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../app-config';
import { Grid, Paper, Typography } from '@mui/material';

function Adminschedule() {
  const [auth, setAuth] = useState(localStorage.getItem("ACCESS_TOKEN"));
  const [isAdmin, setIsAdmin] = useState();
  const [event, setEvent] = useState([]);
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [endChecker,setEndChecker] = useState(false);
  const [checker, setChecker] = useState(false);

  async function allTest(arg) {
    if (checker === false) {
      setChecker(true);
      setStart(arg.date);
    } else {
      setEnd(arg.date);
      await falsetest(arg);
    }
  } 

  async function falsetest(arg) {
    setEndChecker(prev=>true);
    
  }

  async function test2() {
    if (endChecker === true) {
      var title = prompt("INPUT TITLE");
      if (title === null) {
        window.location.href = "/adminschedule"
      } else {

      
      var tempStart = start;
      var tempEnd = end;
      if (start.getTime() > end.getTime()) {
        console.log("test");
        var tmp = tempStart;
        tempStart = tempEnd;
        tempEnd = tmp;
      }
      var endYear = tempEnd.getYear()+1900;
      var endMonth = tempEnd.getMonth()+1;
      var endDate = tempEnd.getDate()+1;

      var startYear = tempStart.getYear()+1900;
      var startMonth = tempStart.getMonth()+1;
      var startDate = tempStart.getDate();

      if(String(startDate).length === 1) {
        startDate = "0"+String(startDate);
      }
      if (String(endDate).length === 1) {
        endDate = "0"+String(endDate);
      }
      if(String(startMonth).length === 1) {
        startMonth = "0"+String(startMonth);
      }
      if(String(endMonth).length === 1) {
        endMonth = "0"+String(endMonth);
      }

      var startResult = String(startYear) + "-" + String(startMonth) + "-" + String(startDate)
      var endResult = String(endYear) + "-" + String(endMonth) + "-" + String(endDate)
      await axios({
        method:"POST",
        url:API_BASE_URL+"/calendar/insert",
        data: {
          title: title,
          start:startResult,
          end:endResult,
        },
        headers:{
          Authorization: 'Bearer ' + auth
        }
      })
      axios.get(API_BASE_URL+"/calendar/show",{
        headers:{
          Authorization: 'Bearer ' + auth
        }
      }).then((res)=>setEvent(res.data));
      setChecker(false);
      setEndChecker(false);
      setStart("");
      setEnd("");
    }
  }
}
  function deleteCall(args) {
    axios.delete(API_BASE_URL+"/calendar/delete",{
      headers: {
        Authorization: 'Bearer ' + auth
      },data:{
        title: args.event.title,
        start: args.event.startStr,
        end: args.event.endStr
      }
    }).then(()=>{
      axios.get(API_BASE_URL+"/calendar/show",{
      headers:{
        Authorization: 'Bearer ' + auth
      }
    }).then((res)=>setEvent(res.data));
    })
  } 
  useEffect(()=>{test2()},[endChecker])
  useEffect(()=>{
    axios.get(API_BASE_URL+"/calendar/show",{
      headers:{
        Authorization: 'Bearer ' + auth
      }
    }).then((res)=>setEvent(res.data));
    axios.get(API_BASE_URL+"/auth/find-user",{
      headers:{
        Authorization: 'Bearer ' + auth
      }
    }).then((res)=>setIsAdmin(res.data.admin));
  },[]);
  const styleCalendar = {
    width: ""
  }
  const showCalendar = isAdmin ? 
  <div style={{width:"84%", marginLeft:"100px", marginTop:"38px"}}>
    <FullCalendar
      style={{color:"white"}}
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={event}
      dateClick={allTest}
      eventClick={(args)=>{
        deleteCall(args);
      }}
      eventColor="#FFCCFF"
      eventBorderColor='RED'
    />
  </div> : "NO ADMIN";

  return (
    <div>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant='h4' component="h2">
          <strong>일정관리</strong>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper>
        <p style={{padding:"20px"}}>
            <p><strong>일정 추가 : 캘린더에 추가하실 시작 날짜와 종료 날짜를 클릭하시고 일정에 대한 제목을 추가하시면 생성됩니다.</strong></p>
            <p><strong>일정 삭제 : 등록하신 일정을 클릭하시면 삭제됩니다.</strong></p>
          </p>
        </Paper>
      </Grid>
      <Grid item xs={12} className="admin-content" style={{marginLeft:'30px'}}>
        {showCalendar}
      </Grid>
    </Grid>
    </div>
  );
}

export default Adminschedule;
