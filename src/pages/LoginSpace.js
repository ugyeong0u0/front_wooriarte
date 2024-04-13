import Button from "../components/Button";
import LoginEditor from "../components/LoginEditor";
import { useNavigate } from "react-router-dom";
import LoginSpan from "../components/LoginSpan";
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
        <Button
          text={"작가"}
          isVisible={true}
          type={"thin"}
          onClick={goAuthorLogin}
        />
        <Button text={"임대 사업자"} isVisible={true} type={"bold"} />
      </div>
      {/* 로그인 폼 */}
      <LoginEditor whatUser={"space"} />
    </>
  );
};
export default LoginSpace;
