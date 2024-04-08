import Button from "./Button";
import EditText from "./EditText";
import "../styles/LoginEditor.css";
import { useState } from "react";
import { onLoginButtonHandler } from "../apis/servicehandeler/clickhandler";
// whatUser 프롭은 개인, 작가, 프로젝트 매니저 알기 위함 -> todo("부모 컴포넌트에서 값 나누기")
const LoginEditor = ({ whatUser }) => {
  const [state, setState] = useState({
    id: "",
    pw: "",
  });

  // id, pw 입력이 달라지면 상태 감지
  const handleChangeState = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // 로그인 버튼 클릭 이벤트 핸들러
  const handleLoginClick = () => {
    console.log("로그인 정보:", state);

    // 로그인 양식 맞는지 확인 todo("더 구체적으로 작성하기 ")
    if (state.id != "" && state.pw != "") {
      // 로그인 통신
      onLoginButtonHandler({ id: state.id, pw: state.pw });
    }
  };

  const registerClick = () => {
    console.log("회원가입 이동");
  };

  return (
    <>
      <div>
        {/* <text className={`Text Text all`}> 아이디</text> */}
        <span>아이디</span>
        <EditText
          name="id"
          hint={"id를 입력하시오"}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>비밀번호</span>
        <EditText
          name="pw"
          hint={"pw를 입력하시오"}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <Button text={"회원가입"} isVisible={true} onClick={registerClick} />
        <Button text={"로그인"} isVisible={true} onClick={handleLoginClick} />
      </div>
    </>
  );
};

export default LoginEditor;
