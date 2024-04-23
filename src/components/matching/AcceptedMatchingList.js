import { useEffect, useState } from "react";
import { onGetSuccessMatchingAuthorHandler } from "../../apis/servicehandeler/AuthorApiHandler";
import { onGetSuccessMatchingSpaceHandler } from "../../apis/servicehandeler/SpaceApiHandler";
import MatchingItem from "../../components/matching/MathingItem";
const AcceptedMatchingList = ({ updateCount }) => {
  const [mockData, setMockData] = useState([{}]); // 받는 형식이 배열 안 객체라

  // 대기 중 매칭
  useEffect(() => {
    let id = localStorage.getItem("userId");
    let userType = localStorage.getItem("userType");
    console.log("성사된Matching 사업자 id " + id);
    console.log("성사된Matching 사업자 type " + userType);
    if (userType === "author") {
      // 대기중인 매칭
      onGetSuccessMatchingAuthorHandler({ authorId: id }, (response) => {
        if (Array.isArray(response.data)) {
          setMockData(response.data);
        } else {
          console.error("성사된 데이터가 배열이 아닙니다.");
        }
      });
    } else if (userType === "space") {
      onGetSuccessMatchingSpaceHandler({ spaceId: id }, (response) => {
        if (Array.isArray(response.data)) {
          setMockData(response.data);
          console.log("서버응답데이터" + response.data);
          console.log("상태에 넣은 데이터 " + mockData);
        } else {
          console.error("응답 데이터가 배열이 아닙니다.");
        }
      });
    } else {
      alert("성사된 matching 잘못된 접근");
    }
  }, [updateCount]);

  return (
    <>
      <>
        {mockData.length > 0 ? (
          mockData.map((item) => (
            <MatchingItem
              key={item.matchingId}
              text={`매칭 ID: ${item.matchingId}, 프로젝트 아이템: ${item.projectItemId}, 공간 아이템: ${item.spaceItemId}`}
            />
          ))
        ) : (
          <span>없음</span>
        )}
      </>
    </>
  );
};
export default AcceptedMatchingList;
