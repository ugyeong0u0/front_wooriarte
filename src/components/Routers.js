import { Route, Routes } from "react-router-dom";
import LoginBusiness from "../pages/LoginBusiness";
import LoginUser from "../pages/LoginUser";
import MainUser from "../pages/MainUser";
import SignupUser from "../pages/SignupUser";
import FindIdUser from "../pages/FindIdUser";
import FindPassUser from "../pages/FindPassUser";
import MypageUser from "../pages/MypageUser";
import ExhibitItemInfo from "../pages/ExhibitItemInfo";
import BuyingTicket from "../pages/BuyingTicket";
import BuyingResult from "../pages/BuyingResult";
import LoginAuthor from "../pages/LoginAuthor";
import LoginSpace from "../pages/LoginSpace";
import Signupbusiness from "../pages/SignupBusiness";
import FindIdBusiness from "../pages/FindIdBusiness";
import FindPassBusiness from "../pages/FindPassBusiness";
import MainBusiness from "../pages/main/MainBusiness";

// 페이지 이동 경로는 여기에만 작성하기
// 주의 : url 경로는 소문자만 작성하기
const Routers = () => {
  return (
    <>
      <Routes>
        {/* 메인 */}
        <Route path="/" element={<MainUser />} />
        <Route path="/mainuser" element={<MainUser />} />
        <Route path="/mainbusiness" element={<MainBusiness />} />

        {/* 유저페이지 */}
        <Route path="/findiduser" element={<FindIdUser />} />
        <Route path="/findpassuser" element={<FindPassUser />} />
        <Route path="/mypageuser" element={<MypageUser />} />
        <Route path="/exhibititeminfo/:id" element={<ExhibitItemInfo />} />
        <Route path="/buyingticket" element={<BuyingTicket />} />
        <Route path="/buyingresult" element={<BuyingResult />} />

        {/* 회원가입 */}
        <Route path="/signupuser" element={<SignupUser />} />
        <Route path="/signupbusiness" element={<Signupbusiness />} />

        {/* 로그인 */}
        <Route path="/loginuser" element={<LoginUser />} />
        <Route path="/loginauthor" element={<LoginAuthor />} />
        <Route path="/loginbusiness" element={<LoginBusiness />} />
        <Route path="/loginspace" element={<LoginSpace />} />

        {/* id, pw찾기 */}
        <Route path="/findiduser" element={<FindIdUser />} />
        <Route path="/findidbusiness" element={<FindIdBusiness />} />

        <Route path="/findpwuser" element={<FindPassUser />} />
        <Route path="/findpwbusiness" element={<FindPassBusiness />} />
      </Routes>
    </>
  );
};
export default Routers;
