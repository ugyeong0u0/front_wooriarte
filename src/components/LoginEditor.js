import Button from "./Button";
const LoginEditor = () => {
  return (
    <>
      <div>
        <text> 아이디</text>
        <input className="id" placeholder="id를 입력하시오" />
      </div>
      <div>
        <text>비밀번호</text>
        <input className="pw" placeholder="pw를 입력하시오" />
      </div>
      <div>
        <Button text={"로그인"} />
      </div>
    </>
  );
};

export default LoginEditor;
