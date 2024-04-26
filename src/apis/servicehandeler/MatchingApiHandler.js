import { matchingAccDenyRequest } from "../matching-api-manager";

//!----------------------------매칭 수락 거절
export const matchingAccDenyResponse = (response, callback) => {
  if (!response) {
    alert("네트워크 이상");
    return;
  }
  if (response.status >= 200 && response.status < 300) {
    console.log("작가/ 스페이스 매칭 수락/거절 : " + response.data);

    callback();
    return;
  } else {
    alert("작가/ 스페이스 매칭 수락/거절 실패");
    console.log(response.status);
    return;
  }
};
// 작가/ 스페이스 매칭 수락/거절
export const onMatchingAccDenyHandler = ({ matchingId, result }, callback) => {
  matchingAccDenyRequest({ matchingId, boolResult: result }).then((response) =>
    matchingAccDenyResponse(response, callback)
  );
};
