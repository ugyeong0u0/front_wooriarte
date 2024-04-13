// 사업자 메인
import { useState } from "react";
import Button from "../../components/Button";
import Exhibits from "../../components/Exhibits";
import "../../styles/MainBusiness.css";
const MainBusiness = () => {
  const [projectButtonType, setProjectButtonType] = useState("bold");
  const [spaceButtonType, setSpaceButtonType] = useState("thin");
  const [calendarPresence, setCalendarPresence] = useState(false);
  // const [month, setMonth] = useState({
  //   startCalendar : false,
  //   endCalendar : false,
  // });

  // 월 선택시 => 달려보이게 안보이게 바꾸기
  const visibleCalendar = () => {
    console.log(calendarPresence);
    setCalendarPresence(!calendarPresence);
  };
  // // 시작 월 클릭눌렸을때
  // const selectStartMonth = () => {
  //   setCalendarPresence({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //   });

  // };
  // // 끝월 클릭눌렸을때
  // const selectEndMonth = () => {};

  // 프로젝트 눌렸을때
  const getProjectItems = () => {
    setSpaceButtonType("thin");
    setProjectButtonType("bold");
  };

  // 공간 눌렸을 때
  const getSpaceItems = () => {
    setSpaceButtonType("bold");
    setProjectButtonType("thin"); // 프로젝트 버튼을 thin으로 설정, 필요에 따라 조정
  };
  return (
    <div className="MainBusiness">
      <div>
        <Button
          text={"프로젝트"}
          isVisible={true}
          type={projectButtonType}
          onClick={getProjectItems}
        />
        <Button
          text={"공간"}
          isVisible={true}
          type={spaceButtonType}
          onClick={getSpaceItems}
        />
      </div>
      <div className="filtering">
        <div>
          <Button text={"월별"} isVisible={true} onClick={visibleCalendar} />
          <Button text={"장소"} isVisible={true} />
        </div>

        {calendarPresence && <input className="calendar" />}
        {/* zindex 설정하기 */}
        <Exhibits className="exhibits" />
      </div>
    </div>
  );
};

export default MainBusiness;
