import {
  addExhibit, // 전시 생성
} from "../admin-api-manager";

//   //!-------------------------------관리자 모든 매칭 조회
//   // 작가 정보 조회 응답
// // todo 콜백있음
// export const onGetAllSpaceItemResponse = (response, callback) => {
//     if (!response) {
//       alert("네트워크 이상 ");
//       return;
//     }
//     if (response.status >= 200 && response.status < 300) {
//       alert("핸들러" + response.data);
//       console.log("모든 스페이스 아이템 조회 성공");
//       callback(response);
//       return;
//     } else {
//       alert("모든 스페이스 아이템 조회 실패");
//       console.log(response.status);
//       return;
//     }
//   };
//   // 작가 정보조회 이벤트
//   export const onGetAllSpaceItemHandler = (callback) => {
//     getAllSpaceItem().then((response) =>
//       onGetAllSpaceItemResponse(response, callback)
//     );
//   };

//!---------------------------- 전시생성
// 전시 생성 조회 응답
export const addExhibitResponse = (response, callback) => {
  if (!response) {
    alert("네트워크 이상 ");
    return;
  }
  if (response.status >= 200 && response.status < 300) {
    alert(response.data);
    console.log("전시생성 성공");
    callback();
    return;
  } else {
    alert("전시생성실패");
    console.log(response.status);
    return;
  }
};
// 스페이스 아이템 이벤트
export const onAddExhibitHandler = (
  {
    matchingId,
    name,
    intro,
    startDate,
    endDate,
    artistName,
    hostName,
    price,
    soldAmount,
  },
  callback
) => {
  addExhibit({
    matchingId,
    name,
    intro,
    startDate,
    endDate,
    artistName,
    hostName,
    price,
    soldAmount,
  }).then((response) => addExhibitResponse(response, callback));
};
