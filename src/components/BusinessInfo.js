import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import EditText from "./EditText";
import TextField from "@mui/material/TextField";
import { validateEmail } from "../util/GlobalFunc"; // 이메일 형식
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
//사업자 회원가입 및 정보 수정 시 사용
// isbusinessInfo true => 회원정보 수정에 쓰임 , false =:> 회원가입 때 쓰임
const BusinessInfo = ({ isBusinessInfo }) => {
  // 다음 버튼 활성화
  const [enableNextBtn, setEnableNextBtn] = useState(false);

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
  useEffect(() => {
    if (businessInfoState.authPassword === businessInfoState.password) {
      console.log("비번일치");
      if (
        businessInfoState.company !== "" &&
        businessInfoState.id !== "" &&
        businessInfoState.owner !== "" &&
        businessInfoState.businessNumber.length == 8 &&
        businessInfoState.phoneNumber.length > 8
      ) {
        console.log("빈값없음");
        if (validateEmail(businessInfoState.email)) {
          console.log("이메일일치");
          setEnableNextBtn(true); // 다음 버튼 활성화
        } else {
          console.log("이메일불일치");
          setEnableNextBtn(false); // 다음 버튼 비활성화
        }
      } else {
        console.log("필수 입력 필드가 비어있습니다.");
        setEnableNextBtn(false); // 다음 버튼 비활성화
      }
    } else {
      console.log("비번불일치");
      setEnableNextBtn(false); // 다음 버튼 비활성화
    }
  }, [businessInfoState]); // businessInfoState 객체의 모든 변경에 반응

  const submitsignup = () => {
    // todo 회원가입 통신
  };

  // todo 비즈니스 정보 저장 통신
  const saveInfo = () => {};

  return (
    <div>
      <Stack spacing={2}>
        <h2>회원 정보 수정</h2>
        <div>
          <TextField
            name="businessNumber"
            id="standard-number-busi"
            label="사업자번호"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={handleChangeState}
          />
        </div>
        <div>
          <TextField
            name="company"
            id="standard-search-company"
            label="회사명"
            type="search"
            variant="standard"
            onChange={handleChangeState}
          />
        </div>
        <div>
          <TextField
            name="owner"
            id="standard-search-name"
            label="대표자명"
            type="search"
            variant="standard"
            onChange={handleChangeState}
          />
        </div>
        <div>
          <TextField
            name="id"
            id="standard-search-id"
            label="아이디"
            type="search"
            variant="standard"
            onChange={handleChangeState}
          />
        </div>
        <div>
          <TextField
            name="phoneNumber"
            id="standard-number"
            label="전화번호"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={handleChangeState}
          />
        </div>
        <div>
          <TextField
            name="email"
            id="standard-search-email"
            label="이메일"
            type="search"
            variant="standard"
            onChange={handleChangeState}
          />
        </div>
        <div>
          <TextField
            name="password"
            id="standard-search-Password"
            label="비밀번호"
            type="password"
            variant="standard"
            onChange={handleChangeState}
          />
        </div>
        <div>
          <TextField
            name="authPassword"
            id="standard-search-authPassword"
            label="비밀번호확인"
            type="password"
            variant="standard"
            onChange={handleChangeState}
          />
        </div>
        <div />
        {!isBusinessInfo && (
          <button
            type="button"
            class="btn btn-success"
            onClick={submitsignup}
            disabled={!enableNextBtn}
          >
            회원가입
          </button>
        )}
        {isBusinessInfo && (
          <button
            type="button"
            class="btn btn-dark"
            onClick={saveInfo}
            disabled={!enableNextBtn}
            style={{ marginTop: 15 }}
          >
            저장
          </button>
        )}
      </Stack>
    </div>
  );
};
export default BusinessInfo;
