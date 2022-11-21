import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../app-config";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../Admin/Admin.css";
import PropTypes from "prop-types";
import ShowUserAdmin from "./ShowUserAdmin";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AdminMainPage from "./AdminMainPage";
import AdminBoardList from "./AdminBoardList";
import AdminTrainee from "./AdminTrainee";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Admin() {
  const [startDate, setStartDate] = useState();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios({
      url: API_BASE_URL + "/auth/view-members",
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    }).then((res) => {
      setUserList(res.data.data);
    });
  }, []);
  useEffect(() => {
    console.log(userList);
  });
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={3} className="Admin">
      <Grid item xs={12}>
        <Typography variant="h2" component="h2">
          <h1 style={{fontWeight:'600'}}>
            관리자 페이지
          </h1>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className="admin-navtabs w3-card"
            >
              <Tab label="관리자 계정 관리" {...a11yProps(0)} />
              <Tab label="메인화면 관리" {...a11yProps(1)} />
              <Tab label="게시판 열람 여부 변경" {...a11yProps(2)} />
              <Tab label="교육생 리스트" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ShowUserAdmin userList={userList} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AdminMainPage />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <AdminBoardList/>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <AdminTrainee/>
          </TabPanel>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Admin;
