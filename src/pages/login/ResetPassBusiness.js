import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// todo 메일 인증으로 날아올 사이트
const ResetPassBusiness = () => {
  // 다음 버튼 활성화
  const [enableNextBtn, setEnableNextBtn] = useState(true);

  const [state, setState] = useState({
    pass: "",
    authpass: "",
  });
  // id, pw 입력이 달라지면 상태 감지
  const handleChangeState = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (
      state.pass === state.authpass &&
      state.pass.length > 1 &&
      state.authpass.length > 1
    ) {
      setEnableNextBtn(true);
    } else {
      setEnableNextBtn(false);
    }
  }, [state]);
  //todo 유저별로 api 달기
  // api 연결 시 id, userType 필요함
  const nextPage = () => {};
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          width: "100%", // 박스 너비 설정
          display: "flex", // flexbox 디스플레이 설정
          justifyContent: "center", // 가로 중앙 정렬
        }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2}>
          <span>비밀번호 재설정</span>
          <TextField
            name="pass"
            id="standard-number"
            label="새로운 비밀번호 "
            type="password"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={handleChangeState}
          />
          <TextField
            name="authpass"
            id="standard-number"
            label="새로운 비밀번호 재입력 "
            type="password"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={handleChangeState}
          />

          <button
            type="button"
            class="btn btn-dark"
            onClick={nextPage}
            disabled={!enableNextBtn}
          >
            확인
          </button>
        </Stack>
      </Box>
    </>
  );
};

export default ResetPassBusiness;
