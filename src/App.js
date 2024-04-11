import { BrowserRouter, useSearchParams } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import Routers from "./components/Routers";
import MainUser from "./pages/MainUser";
import { createContext, useEffect, useState } from "react";

export const loginContext = createContext();

function App() {
  const [isLoginState, setIsLoginStateState] = useState(false);

  useEffect(() => {
    const loginResult = localStorage.getItem("login-result");
    setIsLoginStateState(loginResult);
    console.log("로그인 업데이트" + isLoginState);
  }, [isLoginState]);

  const updateIsLoginState = () => {
    setIsLoginStateState(false);
    console.log("로그인 상태" + isLoginState);
  };
  return (
    <div className="App">
      <loginContext.Provider value={updateIsLoginState}>
        <BrowserRouter>
          <Header
            isLogin={isLoginState}
            whatuser={"user"}
            onClick={updateIsLoginState}
          />
          <Routers />
        </BrowserRouter>
      </loginContext.Provider>
    </div>
  );
}

export default App;
