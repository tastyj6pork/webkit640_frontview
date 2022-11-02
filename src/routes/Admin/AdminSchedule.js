import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../app-config';

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
      
      var endYear = end.getYear()+1900;
      var endMonth = end.getMonth()+1;
      var endDate = end.getDate()+1;

      var startYear = start.getYear()+1900;
      var startMonth = start.getMonth()+1;
      var startDate = start.getDate();

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

      const startResult = String(startYear) + "-" + String(startMonth) + "-" + String(startDate)

      const endResult = String(endYear) + "-" + String(endMonth) + "-" + String(endDate)
      
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

  const showCalendar = isAdmin ? 
  <div style={{width:"84%", marginLeft:"100px", marginTop:"38px"}}>
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={event}
      dateClick={allTest}
      eventClick={(args)=>{
        deleteCall(args);
      }}
    />
  </div> : "NO ADMIN";
  return (
    <div className="App">
        <div className="apply-title">
            <h1>일정관리</h1>
        </div>
      {showCalendar}
    </div>
  );
}

export default Adminschedule;
