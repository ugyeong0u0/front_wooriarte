import Button from "./Button";
import EditText from "./EditText";
import "../styles/LoginEditor.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { onLoginButtonHandler } from "../apis/servicehandeler/ApiHandler";
import { loginContext } from "../App";
// whatUser 프롭은 개인, 작가, 프로젝트 매니저 알기 위함 -> todo("부모 컴포넌트에서 값 나누기")
const LoginEditor = ({ whatUser }) => {
  const nav = useNavigate();
  const changeUserLoginState = useContext(loginContext);
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
    // todo 임시로 각 사이트 보기위함임!!!!
    switch (whatUser) {
      case "user": {
        nav(`/`);
        changeUserLoginState(true);
        return;
      }
      case "space": {
        nav(`/mainbusiness`);
        changeUserLoginState(true);
        return;
      }
      case "author": {
        nav(`/mainbusiness`);
        changeUserLoginState(true);
        return;
      }
      default: {
        alert("잘못된 접근");
        return;
      }
    }
    // if (state.id !== "" && state.pw !== "") {
    //   // 로그인 통신
    //   onLoginButtonHandler({ id: state.id, pw: state.pw }, () => {
    //     switch (whatUser) {
    //       case "user": {
    //         nav(`/`);
    //         changeUserLoginState(true);
    //         return;
    //       }
    //       case "space": {
    //         nav(`/mainbusiness`);
    //         changeUserLoginState(true);
    //         return;
    //       }
    //       case "author": {
    //         nav(`/mainbusiness`);
    //         changeUserLoginState(true);
    //         return;
    //       }
    //       default: {
    //         alert("잘못된 접근");
    //         return;
    //       }
    //     }
    //   });
    // }
  };

  // todo 로그인 종류에 따라 다르게 분기해야함
  const registerClick = () => {
    console.log("회원가입 이동" + whatUser);

    if (String(whatUser) === String("user"))
      nav(`/signupuser`, { replace: true });
    if (String(whatUser) === String("space"))
      nav(`/signupbusiness`, {
        replace: true,
        state: {
          userInfo: whatUser,
        },
      });
    if (String(whatUser) === String("author"))
      nav(`/signupbusiness`, {
        replace: true,
        state: {
          userInfo: whatUser,
        },
      });
  };
  const goFindId = () => {
    const userInfo = whatUser;
    if (String(whatUser) === String("user")) nav(`/findiduser`);
    if (String(whatUser) === String("space"))
      nav(`/findidbusiness`, {
        state: {
          userInfo: whatUser,
        },
      });
    if (String(whatUser) === String("author")) {
      nav(`/findidbusiness`, {
        state: {
          userInfo: whatUser,
        },
      });
    }
  };

  const goFindpwd = () => {
    if (String(whatUser) === String("user")) nav(`/findpwuser`);
    if (String(whatUser) === String("space"))
      nav(`/findpwbusiness`, {
        state: {
          userInfo: whatUser,
        },
      });
    if (String(whatUser) === String("author"))
      nav(`/findpwbusiness`, {
        state: {
          userInfo: whatUser,
        },
      });
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
        <Button text={"아이디찾기"} isVisible={true} onClick={goFindId} />
        <Button text={"비밀번호 찾기"} isVisible={true} onClick={goFindpwd} />
      </div>
      <div>
        <Button
          text={"회원가입"}
          isVisible={true}
          onClick={registerClick}
          type={"black-background-white-text"}
        />
        <Button
          text={"로그인"}
          isVisible={true}
          onClick={handleLoginClick}
          type={"black-background-white-text"}
        />
      </div>
    </>
  );
};

export default LoginEditor;
