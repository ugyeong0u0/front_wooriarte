//? 작가, 공간대여자 둘의 매칭 신청/ 거절 api

import axios from "axios";
import { jsx } from "react/jsx-runtime";
// 변수명 임시 지정
const DOMAIN = "http://localhost:8080"; // TODO: 도메인 주소 확인 필요

//?------------------------------ 작가/ 스페이스 매칭 수락/거절
const MatchingAccDeny_URL = ({ matchingId }) =>
  `${DOMAIN}/matching/${matchingId}`;

//!----------------------------- 작가/ 스페이스 매칭 수락/거절
export const matchingAccDenyRequest = async ({ matchingId, boolResult }) => {
  console.log("작가/ 스페이스 매칭 수락/거절 실행");
  console.log("작가/ 스페이스 매칭 수락/거절" + matchingId + boolResult);
  const url = MatchingAccDeny_URL({ matchingId });

  const result = await axios
    .post(url, boolResult, {
      headers: {
        "Content-Type": "text/plain",
      },
    })
    .then((response) => {
      console.log(response.status);
      return response; // 응답 데이터를 그대로 반환
    })
    .catch((error) => {
      console.log("실패" + error);
      if (!error.response || !error.response.data) return null; // 에러 응답이 없거나 데이터가 없는 경우 null 반환
      return error.response; // 에러 응답의 데이터 반환
      // 에러 DTO api 반환시
    });
  // console.log("result" + result.data);
  return result;
};
