import EditText from "../components/EditText";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
const ModifyUserInfo = () => {
  // 비밀번호 입력 후 개인정보 수정 들어간건지
  const [authState, setAuthState] = useState(false);

  // api 비밀번호 확인
  const setAuthStateChange = () => {
    // 비밀번호 확인 조건식 넣기
    if (true) {
      setAuthState(true);
    } else {
      setAuthState(false);
    }
  };
  // 비밀번호 입력
  const [passwordState, setPasswordState] = useState("");

  const handlePasswordChangeState = (e) => {
    setPasswordState(e.target.value);
  };

  const [infostate, setInfoState] = useState({
    name: "",
    id: "",
    phoneNumber: "",
    email: "",
    password: "",
    authPassword: "",
  });

  const handleChangeState = (e) => {
    setInfoState({
      ...infostate,
      [e.target.name]: e.target.value,
    });
  };

  const saveUserInfo = () => {
    // todo rest api 통신 후 저장이 되면 alert 띄우기
    alert("저장됨");
  };

  return (
    <div className="childModifyUserInfo">
      {authState === true && (
        <div className="userInfoContainer">
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
          <Button text={"저장"} onClick={saveUserInfo} isVisible={true} />
        </div>
      )}
      {authState === false && (
        <div>
          <EditText
            hint={"비밀번호 입력"}
            onChange={handlePasswordChangeState}
          />
          <Button text={"확인"} onClick={setAuthStateChange} isVisible={true} />
        </div>
      )}
    </div>
  );
};
export default ModifyUserInfo;
