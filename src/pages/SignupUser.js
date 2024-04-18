import { useEffect, useState } from "react";

import EditText from "../components/EditText";
import { useNavigate, useSearchParams } from "react-router-dom";
import { onSignupUserHandler } from "../apis/servicehandeler/ApiHandler";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import { validateEmail } from "../util/GlobalFunc"; // 이메일 형식
// 회원가입 완료
// todo("회원가입 통신 연결해야함 ")
// todo("개인 사업자 버튼 이벤트 넣기 ")

const SignupUser = () => {
  const nav = useNavigate();

  // 다음 버튼 활성화
  const [enableNextBtn, setEnableNextBtn] = useState(false);

  const submitsignup = () => {
    if (state.id !== "" && state.pw !== "") {
      // 회원가입 통신
      onSignupUserHandler(
        {
          userName: state.name,
          id: state.id,
          phoneNum: state.phoneNumber,
          email: state.email,
          pass: state.password,
          authPass: state.authPassword,
        },
        () => {
          // 성공시 콜백
          console.log("Signup successful, navigating back");
          nav(-1);
        }
      );
    }
  };

  const [state, setState] = useState({
    name: "",
    id: "",
    phoneNumber: "",
    email: "",
    password: "",
    authPassword: "",
  });

  useEffect(() => {
    if (state.authPassword === state.password) {
      console.log("비번일치");
      if (
        state.id !== "" &&
        state.name !== "" &&
        state.email !== "" &&
        state.phoneNumber.length > 8
      ) {
        console.log("빈값없음");
        if (validateEmail(state.email)) {
          console.log("이메일일치");
          setEnableNextBtn(true); // 다음 버튼 활성화
        } else {
          console.log("이메일불일치");
          setEnableNextBtn(false); // 다음 버튼 비활성화
        }
      } else {
        setEnableNextBtn(false); // 다음 버튼 비활성화
      }
    } else {
      console.log("비번불일치");
      setEnableNextBtn(false); // 다음 버튼 비활성화
    }
  }, [state]); // state 객체의 모든 변경에 반응

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
        <Stack spacing={2} direction="row">
          <Button color="info" size="large">
            개인
          </Button>

          <Button
            color="inherit"
            size="large"
            onClick={() => {
              console.log("비즈니스 로그인으로이동");
              nav(`/loginbusiness`);
            }}
          >
            사업자
          </Button>
        </Stack>
      </div>
      <div>
        <TextField
          name="name"
          id="standard-search-name"
          label="이름"
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
      <button
        type="button"
        class="btn btn-success"
        onClick={submitsignup}
        disabled={!enableNextBtn}
      >
        확인
      </button>
    </>
  );
};

export default SignupUser;
