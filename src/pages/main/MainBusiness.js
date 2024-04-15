// 사업자 메인
import { useState } from "react";
import Button from "../../components/Button";
import Exhibits from "../../components/Exhibits";
import "../../styles/MainBusiness.css";
import DatePickerOpenTo, { SelectSizesExample } from "../../libs/Open";

const MainBusiness = () => {
  const [projectButtonType, setProjectButtonType] = useState("bold");
  const [spaceButtonType, setSpaceButtonType] = useState("thin");
  const [exhibitsType, setExhibitsType] = useState("author");
  // const [month, setMonth] = useState({
  //   startCalendar : false,
  //   endCalendar : false,
  // });
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
    setExhibitsType("author");
  };

  // 공간 눌렸을 때
  const getSpaceItems = () => {
    setSpaceButtonType("bold");
    setProjectButtonType("thin"); // 프로젝트 버튼을 thin으로 설정, 필요에 따라 조정
    setExhibitsType("space");
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <DatePickerOpenTo calendarType="시작월" />
          <span>~</span>
          <DatePickerOpenTo calendarType="끝월" />
          <SelectSizesExample size={"default"} type={"location"} />
        </div>

        <Exhibits
          className="exhibits"
          type={exhibitsType}
          cancelBtnVisible={false}
        />
      </div>
    </div>
  );
};

export default MainBusiness;
