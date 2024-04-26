import { useEffect, useState } from "react";
import AdminMatchingItem from "./AdminMatchingItem";

import { onGetAllMatchingsForAdminHandler } from "../../apis/servicehandeler/AdminApiHandler";

const AdminMatchingList = () => {
  const [mockData, setMockData] = useState([{}]); // 받는 형식이 배열 안 객체라
  const [updateCount, setUpdateCount] = useState(0); // 매칭 상태 변화에 따라 리랜더링
  // 대기 중 매칭
  useEffect(() => {
    // todo 관리자임을 확인하는 로직 필요
    // todo 모든 매칭 불러오기
    onGetAllMatchingsForAdminHandler((response) => {
      if (Array.isArray(response.data)) {
        setMockData(response.data);
      } else {
        console.error("응답 데이터가 배열이 아닙니다.");
      }
    });
  }, [updateCount]);
  return (
    <>
      {mockData.length > 0 ? (
        mockData.map((item) => (
          <AdminMatchingItem
            key={item.matchingId}
            text={`매칭 ID: ${item.matchingId}, 매칭 상태: ${item.matchingStatus}, 공간 아이템: ${item.spaceItemId}`}
            matchingId={item.matchingId}
            setUpdateCount={setUpdateCount}
            status={item.matchingStatus}
          />
        ))
      ) : (
        <span>없음</span>
      )}
    </>
  );
};
export default AdminMatchingList;
