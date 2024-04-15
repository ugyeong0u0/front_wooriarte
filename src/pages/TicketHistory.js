import Button from "../components/Button";
import Exhibits from "../components/Exhibits";
import "../styles/TicketHistory.css";
// 예매 내역
// todo("미완 ")
const TicketHistory = () => {
  const goingToWatch = () => {
    // 관람예정 데이터 가져오기 Exhibits에 데이터 공급하기
  };
  const ViewComplete = () => {
    // 관람완료 데이터 가져오기 Exhibits에 데이터 공급하기
  };

  return (
    <div className="childTicketHistoryContainer">
      <div className="ticketHistorymenuContainer">
        <Button text={"관람예정"} isVisible={true} onClick={goingToWatch} />
        <Button text={"관람완료"} isVisible={true} onClick={ViewComplete} />
      </div>

      <div className="ticketHistoryExhibitsContainer">
        <Exhibits type={"user"} cancelBtnVisible={true} />
      </div>
    </div>
  );
};
export default TicketHistory;
