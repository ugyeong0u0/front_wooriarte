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

// 페이지 이동 경로는 여기에만 작성하기
// 주의 : url 경로는 소문자만 작성하기
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainUser />} />
        <Route path="/loginbusiness" element={<LoginBusiness />} />
        <Route path="/loginuser" element={<LoginUser />} />
        <Route path="/mainuser" element={<MainUser />} />
        <Route path="/signupuser" element={<SignupUser />} />
        <Route path="/findiduser" element={<FindIdUser />} />
        <Route path="/findpassuser" element={<FindPassUser />} />
        <Route path="/mypageuser" element={<MypageUser />} />
        <Route path="/exhibititeminfo/:id" element={<ExhibitItemInfo />} />
        <Route path="/buyingticket" element={<BuyingTicket />} />
        <Route path="/buyingresult" element={<BuyingResult />} />
      </Routes>
    </>
  );
};
export default Routers;
