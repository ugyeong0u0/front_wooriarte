import PosterItem from "../components/PosterItem";
import image1 from "../assets/image 1.png";
import author from "../assets/author.png";
import space from "../assets/space.png";

// 이미지 리스트 라이브러리
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useEffect } from "react";

// api
import { onGetExhibitTicketUserHandler } from "../apis/servicehandeler/ApiHandler";
import { WhatshotRounded } from "@mui/icons-material";
import { containerClasses } from "@mui/material";
import { useState } from "react";
// 각 메인에서 아이템 각 컴포넌트의 부모 컴포넌트
// type :  관람예정인지, 관람완료인지
// items : 전시 아이템에 대한 정보
// todo(임시)
// isEditable : 작가별 사업자별 아이템 수정
const Exhibits = ({ type, cancelBtnVisible, isEditable, whatTab }) => {
  console.log("Exhibits 유저 타입" + type);

  const [mockData, setMockData] = useState([{}]); // 받는 형식이 배열 안 객체라
  // 작가 메인에서
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (whatTab === 0) {
      console.log("Exhibits" + whatTab);
      onGetExhibitTicketUserHandler({ userId, value: whatTab }, (response) => {
        if (Array.isArray(response.data.tickets)) {
          setMockData(response.data.tickets);
        } else {
          console.error("응답 데이터가 배열이 아닙니다.");
        }
      });
    } else {
      console.log("Exhibits" + whatTab);
      onGetExhibitTicketUserHandler({ userId, value: whatTab }, (response) => {
        if (Array.isArray(response.data.tickets)) {
          setMockData(response.data.tickets);
        } else {
          console.error("응답 데이터가 배열이 아닙니다.");
        }
      });
    }
  }, [whatTab]);
  return (
    <div className="exhibitsPosterItemContainer">
      <ImageList sx={{ width: "100%", height: "100%" }} cols={3}>
        {!mockData && <span>없음</span>}
        {mockData &&
          mockData.map((item) => {
            return (
              <PosterItem
                key={item.ticketId}
                {...item}
                whatType={type}
                isVisible={cancelBtnVisible}
                isDialog={false}
                isEditable={isEditable}
              />
            );
          })}
      </ImageList>
    </div>
  );
};
export default Exhibits;
