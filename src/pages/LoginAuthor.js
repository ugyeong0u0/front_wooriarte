import Button from "../components/Button";
import { useNavigate, useLocation } from "react-router-dom";

import LoginEditor from "../components/LoginEditor";
import LoginSpan from "../components/LoginSpan";
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
        <Button text={"작가"} isVisible={true} type={"bold"} />
        <Button
          text={"임대사업자"}
          isVisible={true}
          type={"thin"}
          onClick={goSpaceLogin}
        />
      </div>
      <LoginEditor whatUser={"author"} />
    </>
  );
};
export default LoginAuthor;
