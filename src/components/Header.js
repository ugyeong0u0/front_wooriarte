import Button from "./Button";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { onLoginButtonHandler } from "../apis/servicehandeler/ApiHandler";
import { loginContext } from "../App";
/*
isLogin 값이 true => 로그인 ok , mypage만 보여야함
false => 비로그인 , 로그인 버튼만 보여야함 
*/
const Header = ({ isLogin, whatuser, onClick }) => {
  const changeUserLoginState = useContext(loginContext);
  const nav = useNavigate();
  const whatUserMypage = () => {
    if (whatuser === "user") {
      nav(`/mypageuser`);
    } else if (whatuser === "author") {
    } else {
    }
  };

  const goMainPage = () => {
    // 유저에 따라 다르게 하기
    nav("/");
  };

  // const handleOnChange = (e) => {
  //   onClick(e);
  // };

  const [loggedIn, setLoggedIn] = useState(isLogin);
  useEffect(() => {
    setLoggedIn(isLogin);
  }, [isLogin]); // isLogin prop이 변경될 때마다 loggedIn 상태를 업데이트합니다.

  const onClickLogout = () => {
    console.log("로그아웃 눌림");
    // todo user 유형확인해야함
    nav(`/`); // 홈으로 가기
    console.log(localStorage.removeItem("login-result"));
    setLoggedIn(false); // 로그인 상태를 업데이트합니다.
    changeUserLoginState(false);
    // handleOnChange();
  };
  const onClickLogin = () => {
    console.log("로그인 눌림");
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
              userType={whatuser}
              onClick={whatUserMypage}
            ></Button>
          )}
        </div>
      </header>
    </div>
  );
};
export default Header;
