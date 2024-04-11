import PosterItem from "../components/PosterItem";
import image1 from "../assets/image 1.png";
import "../styles/Exhibits.css";
// type :  관람예정인지, 관람완료인지
// items : 전시 아이템에 대한 정보
// todo(임시)
const Exhibits = ({ type, items }) => {
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
  return (
    <div className="exhibitsPosterItemContainer">
      {mockData.map((item) => {
        return <PosterItem key={item.id} {...item} isVisible={true} />;
      })}
    </div>
  );
};
export default Exhibits;
