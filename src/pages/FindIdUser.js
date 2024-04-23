import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { onFindUserIdHandler } from "../apis/servicehandeler/ApiHandler"; // api

import { validateEmail } from "../util/GlobalFunc"; // 이메일 형식
import Alert from "@mui/material/Alert"; // alert
const FindIdUser = () => {
  const nav = useNavigate();

  const [state, setState] = useState({
    name: "",
    email: "",
    authnumber: "",
  });
  // todo api 연결하기
  // 이메일 전송 버튼 제어 => 이메일 정규식에 따라 활성화
  const [isEmailValid, setIsEmailValid] = useState(true);
  // 이메일 인증번호 버튼 제어
  const [enableAuthBtn, setEnableAuthBtn] = useState(true);
  // 다음 버튼 활성화
  const [enableNextBtn, setEnableNextBtn] = useState(true);
  const [enableSuccessAlert, setEnableSuccessAlert] = useState(false);
  const [enableFailAlert, setEnableFailAlert] = useState(false);

  // id, pw 입력이 달라지면 상태 감지
  const handleChangeState = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "email") {
      setIsEmailValid(validateEmail(e.target.value));
    }
  };

  // 이메일에 인증번호 보내기
  // todo(이메일api연결)
  const sendAuthNumber = () => {
    console.log("인증번호 보내기");
    setEnableAuthBtn(true); // 이메일 인증 활성화
  };
  // 인증번호 확인 버튼
  // todo(이메일 인증번호 api연결)
  const certifyAuthNumber = () => {
    console.log("인증번호 확인");

    //  todo 인증번호 확인 됐을 때 다음 버튼 활성화
    console.log("인증번호비활성화");
    // 인증번호 활성화 안됐을 때
    setEnableFailAlert(true);
    setTimeout(() => {
      setEnableFailAlert(false);
    }, 2000);

    setEnableNextBtn(true); // todo 인증번호 확인 됐을 때 다음 버튼 활성화
  };
  // 아이디 찾기에서 다음 누를 시
  const nextPage = () => {
    onFindUserIdHandler(
      { userName: state.name, email: state.email },
      (response) => {
        // 성공시 콜백
        console.log("아이디 찾기 successful, navigating back");

        nav(-1);
      }
    );
  };

  return (
    <>
      {enableFailAlert && (
        <Alert severity="error"> 인증번호가 틀렸습니다.</Alert>
      )}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <span>아이디 찾기</span>
        <div>
          <TextField
            name="name"
            id="standard-search"
            label="이름"
            type="search"
            variant="standard"
            onChange={handleChangeState}
          />
        </div>
        <div>
          <Stack spacing={2} direction="row">
            <TextField
              name="email"
              id="standard-search"
              label="이메일"
              type="search"
              variant="standard"
              onChange={handleChangeState}
            />

            <button
              type="button"
              class="btn btn-dark"
              onClick={sendAuthNumber}
              disabled={!isEmailValid}
            >
              전송
            </button>
          </Stack>
        </div>
        <div>
          <Stack spacing={2} direction="row">
            <TextField
              name="authnumber"
              id="standard-number"
              label="인증번호 "
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              onChange={handleChangeState}
            />

            <button
              type="button"
              class="btn btn-success"
              onClick={certifyAuthNumber}
              disabled={!enableAuthBtn}
            >
              확인
            </button>
          </Stack>
        </div>

        <button
          type="button"
          class="btn btn-dark"
          onClick={nextPage}
          disabled={!enableNextBtn}
        >
          다음
        </button>
      </Box>
    </>
  );
};
export default FindIdUser;
