import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import "../../styles/ModifySpaceInfo.css";
import BusinessInfo from "../../components/BusinessInfo";
const ModifyAuthorInfo = () => {
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
    <div className="spaceInfoContainer">
      {authState === true && <BusinessInfo isBusinessInfo={true} />}
      {authState === false && (
        <div>
          <Stack spacing={2} direction="row">
            <TextField
              name="pw"
              id="standard-password-input"
              label="비밀번호"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={handlePasswordChangeState}
            />

            <button
              type="button"
              class="btn btn-dark"
              onClick={setAuthStateChange}
            >
              확인
            </button>
          </Stack>
        </div>
      )}
    </div>
  );
};
export default ModifyAuthorInfo;
