// 추후 useEffect로 초기 설정하기
import { useEffect } from "react";
import image1 from "../assets/image 1.png";
import Poster from "../components/PosterItem";
import "../styles/MainUser.css";

const mockData = [
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

// 추후 무한 스크롤로 변경
const MainUser = () => {
  return (
    <div className="postContainer">
      {mockData.map((item) => (
        <Poster key={item.id} {...item} date={item.createdDate} />
      ))}
    </div>
  );
};
export default MainUser;
