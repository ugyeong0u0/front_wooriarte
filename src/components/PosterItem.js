import Button from "./Button";
import { useNavigate } from "react-router-dom";
// isVisible은 마이페이지 = true , 메인이면 false로
const Poster = ({
  id,
  imageurl,
  postName,
  location,
  date,
  isVisible,
  totalTicket,
}) => {
  const nav = useNavigate();
  const cancelTicket = () => {
    if (window.confirm("취소하시겠습니까?")) {
      console.log("취소o");
    } else {
      console.log("취소x.");
    }
  };
  return (
    <div
      onClick={() => {
        // 아이템 클릭 시 이동 보이게하기
        if (!isVisible) nav(`/exhibititeminfo/${id}`); // 마이페이지 예매 내역에선 클릭가능 x
      }}
    >
      <img src={imageurl} />
      <div />
      <div>
        <span> {postName}</span>
        <span>{location}</span>
      </div>
      <span>{date}</span>
      {isVisible && (
        <div>
          <span> 예매수{totalTicket}</span>
          <Button text={"예매취소"} isVisible={true} onClick={cancelTicket} />
        </div>
      )}
    </div>
  );
};
export default Poster;
