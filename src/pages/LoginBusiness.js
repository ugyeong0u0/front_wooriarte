import { useNavigate, useLocation } from "react-router-dom";
import LoginSpan from "../components/LoginSpan";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonBoot from "react-bootstrap/Button";
// 사업자 로그인페이지 => 사업자버튼 글자 볼드 처리
const LoginBusiness = () => {
  const nav = useNavigate();

  // 유저 로그인으로 가기
  const goUserLogin = () => {
    nav(`/loginuser`, { replace: true });
  };

  // 사업자 로그인으로 가기= 작가 로그인으로 가기
  const goBusinessLogin = () => {
    nav(`/loginauthor`, { replace: true });
  };

  // 임대 사업자 로그인으로 가기
  const goSpaceLogin = () => {
    nav(`/loginspace`, { replace: true });
  };
  return (
    <>
      <LoginSpan />
      <div>
        <Stack spacing={2} direction="row">
          <Button color="inherit" size="large" onClick={goUserLogin}>
            개인
          </Button>

          <Button color="info" size="large" onClick={goBusinessLogin}>
            사업자
          </Button>
        </Stack>
      </div>
      <div>
        <Stack spacing={2} direction="row">
          <ButtonBoot
            variant="outline-dark"
            onClick={goBusinessLogin}
            size="lg"
          >
            작가
          </ButtonBoot>
          <ButtonBoot variant="outline-dark" onClick={goSpaceLogin} size="lg">
            임대 사업자
          </ButtonBoot>
        </Stack>
      </div>
    </>
  );
};
export default LoginBusiness;
