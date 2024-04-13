import { useRef, useState } from "react";
import Button from "./Button";
import EditText from "./EditText";

const BusinessInfo = ({ isSignup }) => {
  const businessNumberRef = useRef(null);
  const companyRef = useRef(null);
  const ownerRef = useRef(null);
  const idRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const authPasswordRef = useRef(null);

  // todo 입력 확인 넣기

  const isAllFieldsFilled = () => {
    if (businessInfoState.businessNumber.length < 8) {
      businessNumberRef.current.focus();
      return;
    }
    if (businessInfoState.company.length < 2) {
      companyRef.current.focus();
      return;
    }
    if (businessInfoState.owner.length < 2) {
      ownerRef.current.focus();
      return;
    }
    if (businessInfoState.id.length < 2) {
      idRef.current.focus();
      return;
    }
    if (businessInfoState.phoneNumber.length < 5) {
      phoneNumberRef.current.focus();
      return;
    }
    if (businessInfoState.email.length < 5) {
      emailRef.current.focus();
      return;
    }
    if (businessInfoState.password.length < 5) {
      passwordRef.current.focus();
      return;
    }
    if (businessInfoState.authPassword.length < 5) {
      authPasswordRef.current.focus();
      return;
    }

    // todo ref 이용
    const isAllFilled = Object.values(businessInfoState).every(
      (value) => value.trim() !== ""
    );
    if (!isAllFilled) {
      alert("모든 필드 채우기");
    } else {
      // 회원가입 통신 넣기
      alert("모든 필드 0 회원가입 통신 넣기");
    }
  };

  const [businessInfoState, setBusinessInfoState] = useState({
    businessNumber: "",
    company: "",
    owner: "",
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
    setBusinessInfoState({
      ...businessInfoState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <span>사업자번호 </span>
        <EditText
          ref={businessNumberRef}
          name="businessNumber"
          hint={"사업자번호"}
          onChange={handleChangeState}
          whatType={"number"}
        />
      </div>
      <div>
        <span>회사명 </span>
        <EditText
          ref={companyRef}
          name="company"
          hint={"회사명."}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>대표자명 </span>
        <EditText
          ref={ownerRef}
          name="owner"
          hint={"대표자명"}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>아이디</span>
        <EditText
          ref={idRef}
          name="id"
          hint={"아이디를 입력해주세요."}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>연락처</span>
        <EditText
          ref={phoneNumberRef}
          name="phoneNumber"
          hint={"전화번호를 입력해주세요."}
          onChange={handleChangeState}
          whatType={"number"}
        />
      </div>
      <div>
        <span>이메일</span>
        <EditText
          ref={emailRef}
          name="email"
          hint={"이메일을 입력해주세요."}
          onChange={handleChangeState}
          whatType={"email"}
        />
      </div>
      <div>
        <span>비밀번호</span>
        <EditText
          ref={passwordRef}
          name="password"
          hint={"비밀번호를 입력해주세요."}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>비밀번호확인</span>
        <EditText
          ref={authPasswordRef}
          name="authPassword"
          hint={"비밀번호를 재입력해주세요."}
          onChange={handleChangeState}
        />
      </div>
      <div />
      {isSignup && (
        <Button
          text={"회원가입"}
          isVisible={true}
          onClick={isAllFieldsFilled}
        />
      )}
    </div>
  );
};
export default BusinessInfo;
