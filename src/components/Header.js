import Button from "./Button";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { onLoginButtonHandler } from "../apis/servicehandeler/ApiHandler";
import { loginContext } from "../App";
import { lightGreen } from "@mui/material/colors";
/*
isLogin 값이 true => 로그인 ok , mypage만 보여야함
false => 비로그인 , 로그인 버튼만 보여야함 
*/
// todo 컨텍스트 사용해서 로그인 바로 처리하기
const Header = ({ isLogin, whatuser, onClick, userId }) => {
  const changeUserLoginState = useContext(loginContext);
  const nav = useNavigate();

  // 초기 로그인 상태 설정
  const initialLoginState = localStorage.getItem("userId") ? true : false;
  console.log("header 안 로그인 1 " + initialLoginState);
  let userType = localStorage.getItem("userType");
  let savedUserId = localStorage.getItem("userId");
  const [loggedIn, setLoggedIn] = useState(initialLoginState);
  // const [loggedIn, setLoggedIn] = useState(true);

  // 로그인 상태 확인 => header Login logout 표시
  useEffect(() => {
    setLoggedIn(loggedIn);
    console.log("header 안 로그인 2 " + loggedIn);
  }, [loggedIn]); // isLogin prop이 변경될 때마다 loggedIn 상태를 업데이트합니다.

  const whatUserMypage = () => {
    if (userType === "user") {
      nav(`/mypageuser`);
    } else if (userType === "author") {
      nav(`/authormypage/${savedUserId}`);
    } else {
      // 공간대여자 마이페이지
      nav(`/spacemypage/${savedUserId}`);
    }
  };

  const goMainPage = () => {
    // 유저에 따라 다른 메인 페이지로 이동
    let userType = localStorage.getItem("userType");
    if (userType === "user") {
      nav(`/`);
    } else {
      nav(`/mainbusiness`);
    }
  };

  const onClickLogout = () => {
    console.log("로그아웃 눌림");
    // todo user 유형확인해야함
    nav(`/`); // 예매자 홈으로 가기
    localStorage.removeItem("userId"); // 유저 id 지우기
    localStorage.removeItem("userType"); // 유저 타입 지우기
    setLoggedIn(false); // 로그인 상태를 업데이트합니다.
    changeUserLoginState(false);
  };

  // 로그인 페이지로 가기
  const onClickLogin = () => {
    console.log("로그인페이지로 가기");
    // 유저에 따라 다른 main 가기
    let userType = localStorage.getItem("userType");
    console.log(" 헤더 _ 유저타입" + userType);
    nav(`/loginuser`);
  };

  // const handleLoginLogout = () => {
  //   if (loggedIn) {
  //     console.log("로그아웃 눌림");
  //     nav(`/`);
  //     localStorage.removeItem("login-result");
  //     setLoggedIn(false); // 로그인 상태를 업데이트합니다.
  //     handleOnChange();
  //   } else {
  //     console.log("로그인 눌림");
  //     nav(`/loginuser`);
  //     setLoggedIn(true); // 로그인 상태를 업데이트합니다.
  //   }
  // };

  return (
    <div>
      <header className="header">
        <div>
          <text onClick={goMainPage}>WOORI ARTE</text>
          {/* 버튼 하나로 변경하기  */}

          {!loggedIn && (
            <Button
              text={"LOGIN"}
              isVisible={true}
              onClick={
                onClickLogin
                //   () => {
                //   if (isLogin === true) {
                //     console.log("로그아웃눌림");
                //     nav(`/`);
                //     console.log(isLogin);
                //     localStorage.removeItem("login-result");
                //     handleOnChange();
                //   } else {
                //     console.log("로그인눌림");
                //     nav(`/loginuser`);
                //     console.log(isLogin);
                //   }
                // }
              }
            />
          )}
          {loggedIn && (
            <Button text={"LOGOUT"} isVisible={true} onClick={onClickLogout} />
          )}

          {loggedIn && (
            <Button
              text={"MyPage"}
              isVisible={true}
              userType={userType}
              onClick={whatUserMypage}
            ></Button>
          )}
        </div>
      </header>
    </div>
  );
};
export default Header;
