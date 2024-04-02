import Button from "./Button";
import EditText from "./EditText";
import "../styles/LoginEditor.css";
const LoginEditor = () => {
  return (
    <>
      <div>
        {/* <text className={`Text Text all`}> 아이디</text> */}
        <span>아이디</span>
        <EditText hint={"id를 입력하시오"} />
      </div>
      <div>
        <span>비밀번호</span>
        <EditText hint={"pw를 입력하시오"} />
      </div>
      <div>
        <Button text={"로그인"} isVisible={true} />
      </div>
    </>
  );
};

export default LoginEditor;
