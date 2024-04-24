import {
  getAllMatchingsForAdmin,
  addExhibit, // 전시 생성
  getAllExhibits,
  getExhibitInfo,
  deleteSingleExhibit,
} from "../admin-api-manager";

//!-------------------------------관리자 모든 매칭 조회

// 콜백있음
export const onGetAllMatchingsForAdminResponse = (response, callback) => {
  if (!response) {
    alert("네트워크 이상 ");
    return;
  }
  if (response.status >= 200 && response.status < 300) {
    console.log("관리자 모든 매칭 조회 성공");
    callback(response);
    return;
  } else {
    alert("관리자 모든 매칭 조회 실패");
    console.log(response.status);
    return;
  }
};
// 작가 정보조회 이벤트
export const onGetAllMatchingsForAdminHandler = (callback) => {
  getAllMatchingsForAdmin().then((response) =>
    onGetAllMatchingsForAdminResponse(response, callback)
  );
};

//!---------------------------- 전시생성
// 전시 생성 조회 응답
export const onAddExhibitResponse = (response, callback) => {
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
// 전시 생성 이벤트
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
    city,
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
    city,
  }).then((response) => onAddExhibitResponse(response, callback));
};
//!-------------------------------모든 전시 조회 : 어드민/ 예매자 메인 모든

// 콜백있음
export const onGetAllExhibitsResponse = (response, callback) => {
  if (!response) {
    alert("네트워크 이상 ");
    return;
  }
  if (response.status >= 200 && response.status < 300) {
    console.log("모든 전시 조회 성공");
    callback(response);
    return;
  } else {
    alert("모든 전시 조회 실패");
    console.log(response.status);
    return;
  }
};
// 작가 정보조회 이벤트
export const ongetAllExhibitsHandler = (callback) => {
  getAllExhibits().then((response) =>
    onGetAllExhibitsResponse(response, callback)
  );
};
//!---------------------------- 전시 단건 조회
//* response 존재
// todo
export const getExhibitInfoResponse = (response, callback) => {
  if (!response) {
    alert("네트워크 이상");
    return;
  }
  if (response.status >= 200 && response.status < 300) {
    alert(response.data.name);
    console.log("전시 단건 조회 성공");
    callback(response);
    return;
  } else {
    alert("전시 단건 조회 실패");
    console.log(response.status);
    return;
  }
};
// 전시 단건 조회 이벤트
export const onGetExhibitInfoHandler = ({ exhibitId }, callback) => {
  getExhibitInfo({ exhibitId }).then((response) =>
    getExhibitInfoResponse(response, callback)
  );
};
//!-----------------------------관리자 전시 삭제
//? 여기부터
// 전시 삭제 응답
export const deleteSingleExhibitResponse = (response, callback) => {
  if (!response) {
    alert("네트워크 이상");
    return;
  }
  if (response.status >= 200 && response.status < 300) {
    alert(response.status);
    console.log("전시 삭제 성공");
    callback();
    return;
  } else {
    alert("탈퇴 실패");
    console.log(response.status);
    return;
  }
};
// 유저 삭제누름
export const onDeleteSingleExhibitHandler = ({ exhibitId }, callback) => {
  console.log("전시 삭제id" + exhibitId);
  deleteSingleExhibit({ exhibitId }).then((response) =>
    deleteSingleExhibitResponse(response, callback)
  );
};
