import axios from "axios";
import { jsx } from "react/jsx-runtime";
// 변수명 임시 지정
const DOMAIN = "http://localhost:8080"; // TODO: 도메인 주소 확인 필요

// 전시데이터 생성
const CreateSingleExhibit_URL = ({ id }) =>
  `${DOMAIN}/admin/matchings/${id}/exhibits`;

// 아이템 승인 거절
// const AcceptDenySingleItem_URL = ({id}) => `${DOMAIN}/admin/matchings/${id}/exhibits`;

// 모든 전시 정보 조회
// const GetAllExhibits_URL = () => `${DOMAIN}/admin/exhibits`; -> 빈배열 반환

// 전시 단건 조회, 전시 단건 정보 수정
const GetSingleExhibits_URL = ({ id }) => `${DOMAIN}/admin/exhibits/${id}`;

// 전시 단건 삭제
const DeleteSingleExhibits_URL = ({ id }) => `${DOMAIN}/exhibit/${id}`;

// //!----------------------------관리자 모든 매칭 조회
// export const getAllSpaceItem = async () => {
//     console.log("모든 스페이스 아이템 가져오기 실행");
//     const result = await axios
//       .get(addSpaceItem_URL())
//       .then((response) => {
//         console.log("모든 스페이스 아이템 조회 " + response.status);
//         return response;
//       })
//       .catch((error) => {
//         console.error("모든 스페이스 아이템 조회 실패: " + error);
//         if (error.response) {
//           // 에러 응답이 있는 경우
//           const { data, status } = error.response;
//           console.log(`에러 메시지: ${data.msg}, 에러 코드: ${status}`);
//           // 이곳에서 상태 코드나 에러 메시지에 따른 추가적인 에러 처리를 할 수 있습니다.
//         } else {
//           // 에러 응답이 없는 경우
//           console.log("에러 응답이 없습니다.");
//         }
//       });
//     return result;
//   };
//!---------------------------- 젼시 아이템 생성
export const addExhibit = async ({
  matchingId,
  name,
  intro,
  startDate,
  endDate,
  artistName,
  hostName,
  price,
  soldAmount,
}) => {
  console.log(
    "전시 생성 apimanager" +
      matchingId +
      name +
      intro +
      startDate +
      endDate +
      artistName +
      hostName +
      price +
      soldAmount
  );
  console.log("전시 생성 매칭id  :" + matchingId);
  const url = updateSpaceInfo_URL({ matchingId });
  const result = await axios
    .post(url, {
      matchingId,
      name,
      intro,
      startDate,
      endDate,
      artistName,
      hostName,
      price,
      soldAmount,
      isDeleted: false,
    })
    .then((response) => {
      console.log("전시 생성 " + response.status);
      return response;
    })
    .catch((error) => {
      console.error("전시 생성 실패: " + error);
      if (error.response) {
        // 에러 응답이 있는 경우
        const { data, status } = error.response;
        console.log(`에러 메시지: ${data.msg}, 에러 코드: ${status}`);
        // 이곳에서 상태 코드나 에러 메시지에 따른 추가적인 에러 처리를 할 수 있습니다.
      } else {
        // 에러 응답이 없는 경우
        console.log("에러 응답이 없습니다.");
      }
    });
  return result;
};
