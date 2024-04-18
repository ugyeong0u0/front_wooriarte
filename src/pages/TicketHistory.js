import Button from "../components/Button";
import Exhibits from "../components/Exhibits";

// 예매 내역
// todo("미완 ")
const TicketHistory = () => {
  return (
    <div className="childTicketHistoryContainer">
      <div className="ticketHistoryExhibitsContainer">
        <Exhibits type={"user"} cancelBtnVisible={true} />
      </div>
    </div>
  );
};
export default TicketHistory;
