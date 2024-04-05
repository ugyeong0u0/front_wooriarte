import Button from "../components/Button";
import LoginEditor from "../components/LoginEditor";

const LoginSpace = () => {
  return (
    <>
      <h2>Login</h2>
      <div>
        <Button text={"개인"} isVisible={true} />
        <Button text={"사업자"} isVisible={true} onClick={() => {}} />
      </div>
      {/* 로그인 폼 */}
      <LoginEditor />
    </>
  );
};
export default LoginSpace;
