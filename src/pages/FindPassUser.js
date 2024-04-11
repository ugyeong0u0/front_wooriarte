import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import EditText from "../components/EditText";
import Button from "../components/Button";

const FindPassUser = () => {
  const nav = useNavigate();

  const [state, setState] = useState({
    id: "",
    name: "",
    email: "",
    authnumber: "",
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
  // todo(인증번호 연결 )
  const sendAuthNumber = () => {
    console.log("인증번호 보내기");
  };
  const certifyAuthNumber = () => {
    console.log("인증번호 확인");
  };
  const nextPage = () => {
    alert("비밀번호 찾기");
    nav(`/loginuser`);
  };

  return (
    <>
      <span>비밀번호 찾기</span>

      <div>
        <span>아이디</span>
        <EditText name="id" hint={"id"} onChange={handleChangeState} />
      </div>
      <div>
        <span>이름</span>
        <EditText name="name" hint={"name"} onChange={handleChangeState} />
      </div>
      <div>
        <span>이메일</span>
        <EditText name="email" hint={"email"} onChange={handleChangeState} />
        <Button text={"전송"} isVisible={true} onClick={sendAuthNumber} />
      </div>
      <div>
        <span>인증번호</span>
        <EditText
          name="authnumber"
          hint={"메일로 전송된 인증번호"}
          onChange={handleChangeState}
        />
        <Button text={"확인"} isVisible={true} onClick={certifyAuthNumber} />
      </div>
      <Button text={"다음"} isVisible={true} onClick={nextPage} />
    </>
  );
};
export default FindPassUser;
