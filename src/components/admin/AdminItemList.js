import { useEffect } from "react";
import AdminItem from "./AdminItem";
import { useState } from "react";

//!-------------------- 관리자 아이템 승인 창
const AdminItmeList = () => {
  const [mockData, setMockData] = useState([{}]); // 받는 형식이 배열 안 객체라
  const [updateCount, setUpdateCount] = useState(0); // useEffect 업데이트

  // 관리자 아이템 관리 목록
  useEffect(() => {
    // 관리자인지 확인하는 로직

    if (true) {
      // todo 아이템 승인 정보 불러오기
      // onGetOfferedMatchingAuthorHandler({ authorId: id }, (response) => {
      //   if (Array.isArray(response.data)) {
      //     setMockData(response.data);
      //   } else {
      //     console.error("응답 데이터가 배열이 아닙니다.");
      //   }
      // });
    } else {
      alert("관리자 외 접근");
    }
  }, [updateCount]);

  return (
    <>
      {mockData.length > 0 ? (
        mockData.map((item) => (
          // todo 아래 값 반환값에 따라 맞게 수정해야함
          <AdminItem
            key={item.matchingId}
            text={`매칭 ID: ${item.matchingId}, 프로젝트 아이템: ${item.projectItemId}, 공간 아이템: ${item.spaceItemId}`}
            matchingId={item.matchingId}
            setUpdateCount={setUpdateCount}
          />
        ))
      ) : (
        <span>없음</span>
      )}
    </>
  );
};
export default AdminItmeList;
