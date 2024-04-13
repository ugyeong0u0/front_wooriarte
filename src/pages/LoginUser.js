import Button from "../components/Button";
import LoginEditor from "../components/LoginEditor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { loginContext } from "../App";
import LoginSpan from "../components/LoginSpan";
const LoginUser = () => {
  const nav = useNavigate();
  return (
    <>
      <LoginSpan />
      <div>
        <Button text={"개인"} isVisible={true} type={"bold"} />
        <Button
          text={"사업자"}
          isVisible={true}
          onClick={() => {
            console.log("비즈니스 로그인으로이동");
            nav(`/loginbusiness`);
          }}
          type={"thin"}
        />
      </div>
      {/* 로그인 폼 */}
      <LoginEditor whatUser={"user"} />
    </>
  );
};
export default LoginUser;
