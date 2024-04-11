import Button from "../components/Button";
import LoginEditor from "../components/LoginEditor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { loginContext } from "../App";
const LoginUser = () => {
  const nav = useNavigate();
  return (
    <>
      <h2>Login</h2>
      <div>
        <Button text={"개인"} isVisible={true} />
        <Button
          text={"사업자"}
          isVisible={true}
          onClick={() => {
            console.log("비즈니스 로그인으로이동");
            nav(`/loginbusiness`);
          }}
        />
      </div>
      {/* 로그인 폼 */}
      <LoginEditor />
    </>
  );
};
export default LoginUser;
