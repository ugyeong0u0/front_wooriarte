import PosterItem from "../components/PosterItem";
import image1 from "../assets/image 1.png";
import author from "../assets/author.png";
import space from "../assets/space.png";

// 이미지 리스트 라이브러리
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
// 각 메인에서 아이템 각 컴포넌트의 부모 컴포넌트
// type :  관람예정인지, 관람완료인지
// items : 전시 아이템에 대한 정보
// todo(임시)
// isEditable : 작가별 사업자별 아이템 수정
const Exhibits = ({ type, cancelBtnVisible, isEditable }) => {
  console.log("Exhibits 유저 타입" + type);
  let mockData = [];
  // 작가 메인에서
  if (type === "author") {
    mockData = [
      {
        id: 1,
        postName: "장소1",
        location: "서울시 마포구",
        imageurl: author,
        createdDate: new Date("2024-04-19").getTime(),
      },
      {
        id: 2,
        postName: "장소2",
        location: "서울시 마포구",
        imageurl: author,
        createdDate: new Date("2024-04-19").getTime(),
      },
      {
        id: 3,
        postName: "장소3",
        location: "서울시 마포구",
        imageurl: author,
        createdDate: new Date("2024-04-19").getTime(),
      },
    ];
  } else if (type === "space") {
    mockData = [
      {
        id: 1,
        postName: "장소1",
        location: "서울시 마포구",
        imageurl: space,
        createdDate: new Date("2024-04-19").getTime(),
      },
      {
        id: 2,
        postName: "장소2",
        location: "서울시 마포구",
        imageurl: space,
        createdDate: new Date("2024-04-19").getTime(),
      },
      {
        id: 3,
        postName: "장소3",
        location: "서울시 마포구",
        imageurl: space,
        createdDate: new Date("2024-04-19").getTime(),
      },
    ];
  } else {
    mockData = [
      {
        id: 1,
        postName: "전시1",
        location: "서울시 마포구",
        imageurl: image1,
        createdDate: new Date("2024-04-19").getTime(),
      },
      {
        id: 2,
        postName: "전시2",
        location: "서울시 마포구",
        imageurl: image1,
        createdDate: new Date("2024-04-19").getTime(),
      },
      {
        id: 3,
        postName: "전시3",
        location: "서울시 마포구",
        imageurl: image1,
        createdDate: new Date("2024-04-19").getTime(),
      },
    ];
  }
  return (
    <div className="exhibitsPosterItemContainer">
      <ImageList sx={{ width: "100%", height: "100%" }} cols={3}>
        {mockData.map((item) => {
          return (
            <PosterItem
              key={item.id}
              {...item}
              date={item.createdDate}
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
