import { Route, Routes } from "react-router-dom";
import LoginBusiness from "../pages/LoginBusiness";
import LoginUser from "../pages/LoginUser";
import MainUser from "../pages/MainUser";
import SignupUser from "../pages/SignupUser";

// 페이지 이동 경로는 여기에만 작성하기
// 주의 : url 경로는 소문자만 작성하기
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/loginbusiness" element={<LoginBusiness />} />
        <Route path="/loginuser" element={<LoginUser />} />
        <Route path="/mainuser" element={<MainUser />} />
        <Route path="/signupuser" element={<SignupUser />} />
      </Routes>
    </>
  );
};
export default Routers;
