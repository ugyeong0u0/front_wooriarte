import Button from "@mui/material/Button";
import LoginEditor from "../components/LoginEditor";
import { useNavigate } from "react-router-dom";
import LoginSpan from "../components/LoginSpan";

import Stack from "@mui/material/Stack";
// 공간대여자 로그인 페이지 => 비밀번호 찾기때문에 나눔
const LoginSpace = () => {
  const nav = useNavigate();
  const goAuthorLogin = () => {
    nav(`/loginauthor`, { replace: true });
  };
  return (
    <>
      <LoginSpan />
      <div>
        <Stack spacing={2} direction="row">
          <Button color="inherit" size="large" onClick={goAuthorLogin}>
            작가
          </Button>

          <Button
            color="info"
            size="large"
            onClick={() => {
              console.log("비즈니스 로그인으로이동");
              nav(`/loginbusiness`);
            }}
          >
            임대사업자
          </Button>
        </Stack>
      </div>
      {/* 로그인 폼 */}
      <LoginEditor whatUser={"space"} />
    </>
  );
};
export default LoginSpace;
