import { BrowserRouter, useSearchParams } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import Routers from "./components/Routers";
import MainUser from "./pages/MainUser";
import { createContext, useEffect, useState } from "react";

import CuFooter from "./components/CuFooter";

export const loginContext = createContext();

function App() {
  const [isLoginState, setIsLoginStateState] = useState(false);
  let loginUserId = "";
  let loginUserType = "";
  useEffect(() => {
    loginUserId = localStorage.getItem("userId");
    loginUserType = localStorage.getItem("userType");
    setIsLoginStateState(loginUserId);
    console.log("APP 로그인 업데이트" + isLoginState);
  }, [isLoginState]);

  const updateIsLoginState = () => {
    setIsLoginStateState(false);
    console.log("APP 로그인 상태" + isLoginState);
  };
  return (
    <div className="wrapper">
      <loginContext.Provider value={updateIsLoginState}>
        <BrowserRouter>
          {/* 유저 id */}
          <Header
            // isLogin={isLoginState}
            isLogin={true}
            whatuser={loginUserType}
            onClick={updateIsLoginState}
            userId={loginUserId}
          />
          <Routers />
          <CuFooter className="footer" />
        </BrowserRouter>
      </loginContext.Provider>
    </div>
  );
}

export default App;
