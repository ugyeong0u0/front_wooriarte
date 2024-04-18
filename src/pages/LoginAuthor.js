import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";

import LoginEditor from "../components/LoginEditor";
import LoginSpan from "../components/LoginSpan";

import Stack from "@mui/material/Stack";
// 작가 로그인 페이지 => 비밀번호 찾기때문에 나눔
const LoginAuthor = () => {
  const nav = useNavigate();

  // 임대사업자 로그인으록 가기
  const goSpaceLogin = () => {
    nav(`/loginspace`, { replace: true });
  };

  return (
    <>
      <LoginSpan />
      <div>
        <Stack spacing={2} direction="row">
          <Button color="info" size="large">
            작가
          </Button>

          <Button color="inherit" size="large" onClick={goSpaceLogin}>
            임대사업자
          </Button>
        </Stack>
      </div>
      <LoginEditor whatUser={"author"} />
    </>
  );
};
export default LoginAuthor;
