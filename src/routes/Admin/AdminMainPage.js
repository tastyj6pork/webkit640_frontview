import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../app-config";

export default function AdminMainPage() {
  const [rawData, setRawData] = useState({
    recruitmentDate: "",
    recruitmentTarget: "",
    totalRecruitment: "",
    eligibility: "",
    documentSubmissionPeriod: "",
    additionalRecruitmentPeriod: "",
    passAnnouncementDate: "",
    trainingStartDate: "",
    cumulativeStudents: "",
    completeCardinalNumber: "",
    nonMajor: "",
    contact:"",
  });

  useEffect(() => {
    axios({
      url: API_BASE_URL + "/main/data",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
      method: "GET",
    }).then((res) => {
      console.log(res);
      if (res.data !== "") {
        console.log(res.data);
        setRawData(res.data);
      }
    });
  }, []);

  const dataOnChange = (type, e) => {
    if (type === "recruitmentDate") {
      setRawData((prev) => {
        return { ...prev, recruitmentDate: e.target.value };
      });
    } else if (type === "recruitmentTarget") {
      setRawData((prev) => {
        return { ...prev, recruitmentTarget: e.target.value };
      });
    } else if (type === "totalRecruitment") {
      setRawData((prev) => {
        return { ...prev, totalRecruitment: e.target.value };
      });
    } else if (type === "documentSubmissionPeriod") {
      setRawData((prev) => {
        return { ...prev, documentSubmissionPeriod: e.target.value };
      });
    } else if (type === "additionalRecruitmentPeriod") {
      setRawData((prev) => {
        return { ...prev, additionalRecruitmentPeriod: e.target.value };
      });
    } else if (type === "passAnnouncementDate") {
      setRawData((prev) => {
        return { ...prev, passAnnouncementDate: e.target.value };
      });
    } else if (type === "trainingStartDate") {
      setRawData((prev) => {
        return { ...prev, trainingStartDate: e.target.value };
      });
    } else if (type === "cumulativeStudents") {
      setRawData((prev) => {
        return { ...prev, cumulativeStudents: e.target.value };
      });
    } else if (type === "completeCardinalNumber") {
      setRawData((prev) => {
        return { ...prev, completeCardinalNumber: e.target.value };
      });
    } else if (type === "nonMajor") {
      setRawData((prev) => {
        return { ...prev, nonMajor: e.target.value };
      });
    } else if (type === "eligibility") {
      setRawData((prev) => {
        return { ...prev, eligibility: e.target.value };
      });
    } else if (type === "contact") {
      setRawData((prev)=> {
        return {...prev, contact: e.target.value};
      });
    }
  };

  const saveMainData = () => {
    axios({
      method: "PUT",
      url: API_BASE_URL + "/main/admin-modify",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
      data: rawData,
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <Grid container spacing={3}>
      {console.log(rawData)}
      <Grid item xs={12}>
        <Typography component="h5" variant="h5">
          메인 페이지 관리
        </Typography>
        <Button
          onClick={(e) => {
            saveMainData();
          }}
          variant="contained"
          sx={{ marginTop: "20px" }}
        >
          저장
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Paper sx={{ padding: "30px" }}>
          <FormControl>
            <Input
              aria-describedby="recruitmentDate"
              type="datetime-local"
              value={rawData.recruitmentDate}
              onChange={(e) => {
                dataOnChange("recruitmentDate", e);
              }}
            ></Input>
            <FormHelperText id="recruitmentDate">모집 기간 입력</FormHelperText>
          </FormControl>
          <TextField
            sx={{ marginTop: "15px", marginBottom: "15px" }}
            id="standard-basic"
            value={rawData.recruitmentTarget}
            onChange={(e) => {
              dataOnChange("recruitmentTarget", e);
            }}
            label="지원 대상"
            variant="standard"
            fullWidth
          />
          <TextField
            sx={{ marginTop: "15px", marginBottom: "15px" }}
            value={rawData.totalRecruitment}
            onChange={(e) => {
              dataOnChange("totalRecruitment", e);
            }}
            variant="standard"
            label="총 선발 인원"
            fullWidth
          />
          <TextField
            sx={{ marginTop: "15px", marginBottom: "15px" }}
            value={rawData.eligibility}
            onChange={(e) => {
              dataOnChange("eligibility", e);
            }}
            variant="standard"
            label="지원 자격('/'로 구분하세요.)"
            fullWidth
          />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper sx={{ padding: "30px" }}>
          <FormControl>
            <Input
              aria-describedby="documentSubmissionPeriod"
              type="datetime-local"
              value={rawData.documentSubmissionPeriod}
              onChange={(e) => {
                dataOnChange("documentSubmissionPeriod", e);
              }}
            ></Input>
            <FormHelperText id="documentSubmissionPeriod">
              서류 접수 기한
            </FormHelperText>
            <Input
              sx={{ marginTop: "40px" }}
              aria-describedby="additionalRecruitmentPeriod"
              type="datetime-local"
              value={rawData.additionalRecruitmentPeriod}
              onChange={(e) => {
                dataOnChange("additionalRecruitmentPeriod", e);
              }}
            ></Input>
            <FormHelperText id="additionalRecruitmentPeriod">
              추가 모집 기간
            </FormHelperText>

            <Input
              sx={{ marginTop: "40px" }}
              aria-describedby="passAnnouncementDate"
              type="datetime-local"
              value={rawData.passAnnouncementDate}
              onChange={(e) => {
                dataOnChange("passAnnouncementDate", e);
              }}
            ></Input>
            <FormHelperText id="passAnnouncementDate">
              합격 발표일
            </FormHelperText>
            <Input
              fullWidth
              sx={{ marginTop: "40px" }}
              aria-describedby="trainingStartDate"
              type="datetime-local"
              value={rawData.trainingStartDate}
              onChange={(e) => {
                dataOnChange("trainingStartDate", e);
              }}
            ></Input>
            <FormHelperText id="trainingStartDate">교육 시작일</FormHelperText>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper sx={{ padding: "30px" }}>
          <TextField
            fullWidth
            id="standard-basic"
            value={rawData.cumulativeStudents}
            onChange={(e) => {
              dataOnChange("cumulativeStudents", e);
            }}
            label="총 교육생 인원"
            variant="standard"
          />

          <TextField
            fullWidth
            sx={{ marginTop: "15px", marginBottom: "15px" }}
            id="standard-basic"
            value={rawData.completeCardinalNumber}
            onChange={(e) => {
              dataOnChange("completeCardinalNumber", e);
            }}
            label="완료 기수"
            variant="standard"
          />

          <TextField
            fullWidth
            sx={{ marginBottom: "15px" }}
            id="standard-basic"
            value={rawData.nonMajor}
            onChange={(e) => {
              dataOnChange("nonMajor", e);
            }}
            label="비전공자 수"
            variant="standard"
          />
          <TextField
            fullWidth
            sx={{ marginBottom: "15px" }}
            id="standard-basic"
            value={rawData.contact}
            onChange={(e) => {
              dataOnChange("contact", e);
            }}
            label="조교 연락처"
            variant="standard"
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
