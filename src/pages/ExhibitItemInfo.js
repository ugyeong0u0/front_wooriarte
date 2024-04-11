import { useState } from "react";
import Button from "../components/Button";
import "../styles/ExhibitItemInfo.css";
import { useParams } from "react-router-dom";
import image1 from "../assets/image 1.png";
import { useNavigate } from "react-router-dom";
const ExhibitItemInfo = () => {
  const nav = useNavigate();
  // 시작시 useEffect로 전시 조회하기
  const price = 5000;
  const explanation = "이경준 사진전";
  const imageurl = image1;
  const postName = "전시1";
  const location = "강남구";
  const date = "2024-03~2024-04";

  // 예매할 티켓 수
  const [ticketNumber, setTicketNumber] = useState(0);
  const param = useParams(); // parameter 번호, post번호

  const plusTicket = () => {
    if (ticketNumber + 1 < 500) {
      setTicketNumber((ticketNumber) => ticketNumber + 1);
    }
  };

  const minusTicket = () => {
    if (ticketNumber - 1 >= 0) {
      setTicketNumber((ticketNumber) => ticketNumber - 1);
    }
  };

  const getTicket = () => {
    // todo("예매하기 클릭이벤트 넣기")

    if (localStorage.getItem("login-result") !== null) {
      nav("/buyingticket", {
        state: { ticketNumber: ticketNumber, price: price },
      });
    } else {
      alert("로그인 후 예매가능");
    }
  };

  return (
    <div>
      <div className="parentContainer">
        <div className="exhibitImageContainer">
          <img src={imageurl} />
        </div>
        <div className="exhibitInfoContainer">
          <div>
            <span>{postName}</span>
          </div>
          <div>
            <span>관람장소 </span>
            <span>{location}</span>
          </div>
          <div>
            <span>관람기간 </span>
            <span>{date}</span>
          </div>
          <div>
            <span>관람료 </span>
            <span>{price}원</span>
          </div>
          <div>
            <span>관람장소 </span>
            <span>{postName}</span>
          </div>
          <div />
          <span>{explanation}</span>

          <div>
            <Button text={"-"} isVisible={true} onClick={minusTicket} />
            <span>{ticketNumber}</span>
            <Button text={"+"} isVisible={true} onClick={plusTicket} />
            <Button text={"예매하기"} isVisible={true} onClick={getTicket} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExhibitItemInfo;
