import Button from "../components/Button";
import { useNavigate, useLocation } from "react-router-dom";
import LoginSpan from "../components/LoginSpan";

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
        <Button
          text={"개인"}
          isVisible={true}
          onClick={goUserLogin}
          type={"thin"}
        />
        <Button
          text={"사업자"}
          isVisible={true}
          onClick={goBusinessLogin}
          type={"bold"}
        />
      </div>
      <div>
        <Button
          text={"작가"}
          isVisible={true}
          type={"black-background-white-text"}
          onClick={goBusinessLogin}
        />
        <Button
          text={"임대 사업자"}
          isVisible={true}
          type={"black-background-white-text"}
          onClick={goSpaceLogin}
        />
      </div>
    </>
  );
};
export default LoginBusiness;
