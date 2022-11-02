import FullCalendar from "@fullcalendar/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../app-config";
import dayGridPlugin from '@fullcalendar/daygrid'

function StudentSchedule() {

    const [auth, setAuth] = useState(localStorage.getItem("ACCESS_TOKEN"));
    const [event, setEvent] = useState([]);

    useEffect(()=>{
        axios.get(API_BASE_URL+"/calendar/show",{
          headers:{
            Authorization: 'Bearer ' + auth
          }
        }).then((res)=>setEvent(res.data));
      },[]);

    return(<div>
        <div style={{width:"84%", marginLeft:"100px", marginTop:"38px"}}>
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={event}
    />
  </div>
    </div>)
}

export default StudentSchedule;