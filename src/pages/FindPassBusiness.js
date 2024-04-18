import { useState } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { validateEmail } from "../util/GlobalFunc"; // 이메일 형식
import { string } from "prop-types";
import Alert from "@mui/material/Alert"; // alert
const FindPassBusiness = () => {
  const nav = useNavigate();
  const uselocation = useLocation();
  const { userInfo } = uselocation.state;

  // todo 이메일찾기 연결하고 false로 원상복귀하기
  // 이메일 유효한지
  const [isEmailValid, setIsEmailValid] = useState(true);
  // 이메일 인증번호 버튼 제어
  const [enableAuthBtn, setEnableAuthBtn] = useState(true);
  // 다음 버튼 활성화
  const [enableNextBtn, setEnableNextBtn] = useState(true);
  // 인증번호확인 눌렀을 때 경고창 => 인증번호 확인이 잘됐고 안됐고
  const [enableSuccessAlert, setEnableSuccessAlert] = useState(false);
  const [enableFailAlert, setEnableFailAlert] = useState(false);

  const [state, setState] = useState({
    id: "",
    businessNumber: "",
    email: "",
    authnumber: "",
  });
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
  // todo(인증번호 연결 )
  const sendAuthNumber = () => {
    console.log("인증번호 보내기");
    setEnableAuthBtn(true); // 이메일 인증 활성화
  };
  // todo 인증번호 활성화하기
  const certifyAuthNumber = () => {
    console.log("인증번호 확인");
    // 사업자 번호 입력이 정상 적으로 됐으면
    if (state.businessNumber.length === 8) {
      setEnableNextBtn(true);
    } else {
      // 인증번호 확인 됐을 때 다음 버튼 활성화
      console.log("인증번호비활성화");
      // 인증번호 활성화 안됐을 때
      setEnableFailAlert(true);
      setTimeout(() => {
        setEnableFailAlert(false);
      }, 2000);
    }
  };

  // todo 유저별로 api연결 하기 : userInfo
  const nextPage = () => {
    // alert("비밀번호 찾기");
    // console.log("비밀번호찾기 : " + userInfo);
    setEnableSuccessAlert(true);
    setTimeout(() => {
      setEnableSuccessAlert(false);
    }, 2000); // 성공시 alert뜨기
    nav(-1);
  };

  return (
    <>
      {enableSuccessAlert && (
        <Alert severity="success">This is a success Alert.</Alert>
      )}
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
        <span>비밀번호 찾기</span>

        <div>
          <TextField
            name="businessNumber"
            id="standard-number"
            label="사업자번호 "
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={handleChangeState}
          />
        </div>
        <div>
          <TextField
            name="id"
            id="standard-search"
            label="아이디"
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
export default FindPassBusiness;
