import { useState } from "react";
import Button from "../components/Button";
import EditText from "../components/EditText";
import { useNavigate, useSearchParams } from "react-router-dom";
// 회원가입 완료
// todo("회원가입 통신 연결해야함 ")
// todo("개인 사업자 버튼 이벤트 넣기 ")

const SignupUser = () => {
  const nav = useNavigate();
  const submitsignup = () => {
    nav(-1);
  };

  const [state, setState] = useState({
    name: "",
    id: "",
    phoneNumber: "",
    email: "",
    password: "",
    authPassword: "",
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

  return (
    <>
      <span>signup</span>
      <div>
        <Button text={"개인"} isVisible={true} />
        <Button text={"사업자"} isVisible={true} />
      </div>
      <div>
        <span>이름 </span>
        <EditText
          name="name"
          hint={"이름을 입력해주세요."}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>아이디</span>
        <EditText
          name="id"
          hint={"아이디를 입력해주세요."}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>연락처</span>
        <EditText
          name="phoneNumber"
          hint={"전화번호를 입력해주세요."}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>이메일</span>
        <EditText
          name="email"
          hint={"이메일을 입력해주세요."}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>비밀번호</span>
        <EditText
          name="password"
          hint={"비밀번호를 입력해주세요."}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>비밀번호확인</span>
        <EditText
          name="authPassword"
          hint={"비밀번호를 재입력해주세요."}
          onChange={handleChangeState}
        />
      </div>
      <Button text={"회원가입"} isVisible={true} onClick={submitsignup} />
    </>
  );
};

export default SignupUser;
