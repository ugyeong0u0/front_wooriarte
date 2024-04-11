import { useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import TicketHistory from "./TicketHistory";
import ModifyUserInfo from "./ModifyUserInfo";
import "../styles/MypageUser.css";
const MypageUser = () => {
  const [componentState, setState] = useState("modify");

  // id, pw 입력이 달라지면 상태 감지
  const handleChangeState = (value) => {
    console.log(value);
    // console.log(e.target.value);
    setState(value);
  };

  const withDrawalUser = () => {
    console.log("유저 탈퇴하기 눌림");
  };
  return (
    <div className="parentContainer">
      <div className="menuContainer">
        <div>
          <Button
            text={"개인정보수정"}
            isVisible={true}
            onClick={() => handleChangeState("modify")}
          />
        </div>
        <div>
          <Button
            text={"예매내역"}
            isVisible={true}
            onClick={() => handleChangeState("ticketHistory")}
          />
        </div>
        <div className="withdrawal">
          <Button text={"탈퇴하기"} isVisible={true} />
        </div>
      </div>

      <div className="attachedContainer">
        {componentState === "modify" && <ModifyUserInfo />}
        {componentState === "ticketHistory" && <TicketHistory />}
      </div>
    </div>
  );
};
export default MypageUser;
