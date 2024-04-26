//? 공간대여자용

import axios from "axios";
import { jsx } from "react/jsx-runtime";
// 변수명 임시 지정
const DOMAIN = "http://localhost:8080"; // TODO: 도메인 주소 확인 필요

//?----------------------------- 공간대여자 url
const LoginSpace_URL = () => `${DOMAIN}/space-rentals/login`;
const SignupSpace_URL = () => `${DOMAIN}/space-rentals`;
const FindSpaceId_URL = () => `${DOMAIN}/space-rentals/find-id`;
// todo 비번 찾기
const findSpacePass_URL = () => `${DOMAIN}/space-rentals/set-pwd`;

const DeleteSpace_URL = ({ id }) => `${DOMAIN}/space-rentals/${id}`;

//todo 공간대여자 비번 확인
// const confirmSpacePw_URL = ({ id }) => `${DOMAIN}/user/${id}/verify-pwd`;
const getSpaceInfo_URL = ({ id }) => `${DOMAIN}/space-rentals/${id}`;
const updateSpaceInfo_URL = ({ id }) => `${DOMAIN}/space-rentals/${id}`;

//?----------------------------- 스페이스 아이템
const addSpaceItem_URL = () => `${DOMAIN}/space-item`;
const GetSpaceItem_URL = ({ id }) => `${DOMAIN}/space-item/${id}`;
// 공간대여자의 아이템만 가져오기
const GetSpacesSpaceItem_URL = ({ id }) =>
  `${DOMAIN}/space-item/space-rental/${id}`;

//?------------------------------공간 신청 url
const ApplyToAuthorItem_URL = ({ itemId }) =>
  `${DOMAIN}/space/${itemId}/request`;

//?------------------------------작가 매칭 url
const WaitingMatchingForSpace_URL = ({ id }) =>
  `${DOMAIN}/space-rental/${id}/waitings`; // 대기
const GetOfferedMatchingForSpace_URL = ({ id }) =>
  `${DOMAIN}/space-rental/${id}/offers`; // 제공
const GetSuccessMatchingForSpace_URL = ({ id }) =>
  `${DOMAIN}/space-rental/${id}/success`; // 성공

//!----------------------------- 스페이스 로그인
export const LoginSpaceRequest = async ({ id, pwd }) => {
  console.log("스페이스 LoginRequest실행");
  console.log("리퀘안" + id + pwd);
  const result = await axios
    .post(LoginSpace_URL(), { id: id, pwd: pwd })
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

//!----------------------------- 스페이스 회원가입
export const SignupSpace = async ({
  businessNum,
  id,
  pwd,
  company,
  ceo,
  email,
  phone,
}) => {
  console.log("스페이스 회원가입 SignupSpace 실행");
  console.log(
    "스페이스 회원가입 리쿼안 :" +
      businessNum +
      "/" +
      company +
      "/" +
      ceo +
      "/" +
      email +
      "/" +
      phone +
      "/" +
      pwd
  );
  const result = await axios
    .post(SignupSpace_URL(), {
      businessNumber: businessNum,
      id: id,
      pwd: pwd,
      company: company,
      ceo: ceo,
      email: email,
      phone: phone,
      isDeleted: false,
    })
    .then((response) => {
      console.log(response.status);
      return response;
    })
    .catch((error) => {
      console.error("회원가입 실패: " + error);
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

//!----------------------------- 스페이스 아이디 찾기
export const findSpaceId = async ({ email }) => {
  console.log("스페이스 아이디 찾기 실행");
  console.log("스페이스 아이디 찾기 리쿼안 :" + email);
  const result = await axios
    .post(FindSpaceId_URL(), email, {
      headers: {
        "Content-Type": "text/plain",
      },
    })
    .then((response) => {
      console.log(response.status);
      return response;
    })
    .catch((error) => {
      console.error("스페이스 아이디 찾기 실패: " + error);
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
//!----------------------------- 스페이스 비번 재설정
// export const findSpacePw = async ({ id, pwd }) => {
//   console.log("스페이스 비번 재설정 실행");
//   console.log("스페이스 아이디찾기 리쿼안 :" + id + "/" + pwd);
//   const result = await axios
//     .post(findSpacePass_URL(), {
//       id: id,
//       pwd : pwd,
//     })
//     .then((response) => {
//       console.log(response.status);
//       return response;
//     })
//     .catch((error) => {
//       console.error("스페이스 비번 재설정 실패: " + error);
//       if (error.response) {
//         // 에러 응답이 있는 경우
//         const { data, status } = error.response;
//         console.log(`에러 메시지: ${data.msg}, 에러 코드: ${status}`);
//         // 이곳에서 상태 코드나 에러 메시지에 따른 추가적인 에러 처리를 할 수 있습니다.
//       } else {
//         // 에러 응답이 없는 경우
//         console.log("에러 응답이 없습니다.");
//       }
//     });
//   return result;
// };
//!-----------------------------스페이스 삭제

export const deleteSpace = async ({ id }) => {
  console.log("공간대여자 삭제 실행");
  console.log("공간대여자 삭제 id  :" + id);

  const url = DeleteSpace_URL({ id: id });

  console.log("url" + url);
  const result = await axios.delete(url).catch((error) => {
    console.error("공간대여자 삭제 실패: " + error);
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

//!---------------------------- 공간대여자 마이페이지 비번 확인
// export const confirmSpacePw = async ({ userId, password }) => {
//   console.log("유저 비번확인 실행");
//   console.log("유저 삭제 id  :" + userId);
//   const url = confirmUserPw_URL({ id: userId });
//   console.log("url" + url);

//   const result = await axios
//     .post(url, { pwd: password })
//     .then((response) => {
//       console.log(response.status);
//       return response;
//     })
//     .catch((error) => {
//       console.error("유저 마이페이지 비번조회 실패: " + error);
//       if (error.response) {
//         // 에러 응답이 있는 경우
//         const { data, status } = error.response;
//         console.log(`에러 메시지: ${data.msg}, 에러 코드: ${status}`);
//         // 이곳에서 상태 코드나 에러 메시지에 따른 추가적인 에러 처리를 할 수 있습니다.
//       } else {
//         // 에러 응답이 없는 경우
//         console.log("에러 응답이 없습니다.");
//       }
//     });
//   return result;
// };

//!---------------------------- 공간대여자 마이페이지 정보 조회
export const getSpaceInfo = async ({ id }) => {
  console.log("스페이스 정보 조회 실행");
  console.log("스페이스 정보조회 id  :" + id);
  const url = getSpaceInfo_URL({ id: id });
  console.log("스페이스정보찾기 " + url);
  const result = await axios
    .get(url)
    .then((response) => {
      console.log(response.status);
      return response;
    })
    .catch((error) => {
      console.error("스페이스 정보 조회 실패: " + error);
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

//!---------------------------- 스페이스 마이페이지 정보 수정
export const updateSpaceInfo = async ({
  spaceId,
  businessNumber,
  id,
  pwd,
  company,
  ceo,
  email,
  phone,
}) => {
  console.log("스페이스 정보 수정 실행");
  console.log("스페이스 정보조회 id  :" + id);
  const url = updateSpaceInfo_URL({ id: spaceId });

  const result = await axios
    .put(url, {
      businessNumber: businessNumber,
      id: id,
      company: company,
      ceo,
      pwd: pwd,
      email: email,
      phone: phone,
    })
    .then((response) => {
      console.log("스페이스 정보 수정 " + response.status);
      return response;
    })
    .catch((error) => {
      console.error("스페이스 수정 실패: " + error);
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
// todo 여기서부터 확인하기

//!---------------------------- 스페이스 아이템 생성
export const addSpaceItem = async ({
  spaceRentalId,
  intro,
  hostname,
  city,
  size,
  parking,
  fee,
  phone,
  startDate,
  endDate,
}) => {
  console.log(
    "스페이스 아이템 추가 실행" +
      spaceRentalId +
      intro +
      hostname +
      city +
      size +
      parking +
      fee +
      phone +
      startDate +
      endDate
  );
  console.log("스페이스 정보조회 id  :" + spaceRentalId);
  const result = await axios
    .post(addSpaceItem_URL(), {
      spaceRentalId,
      intro,
      hostname,
      city,
      size,
      parking,
      fee,
      phone,
      approval: true,
      startDate,
      endDate,
      isDeleted: false,
    })
    .then((response) => {
      console.log("스페이스 아이템 추가 " + response.status);
      return response;
    })
    .catch((error) => {
      console.error("스페이스 아이템 추가 실패: " + error);
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
//!---------------------------- 모든 스페이스 아이템 조회
export const getAllSpaceItem = async () => {
  console.log("모든 스페이스 아이템 가져오기 실행");
  const result = await axios
    .get(addSpaceItem_URL())
    .then((response) => {
      console.log("모든 스페이스 아이템 조회 " + response.status);
      return response;
    })
    .catch((error) => {
      console.error("모든 스페이스 아이템 조회 실패: " + error);
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
//!---------------------------- 스페이스 아이템 단건 조회
export const getSpaceItemInfo = async ({ posterId }) => {
  console.log("스페이스 아이템 단건 조회 시작");
  console.log("스페이스 아이템 번호 id  :" + posterId);
  const url = GetSpaceItem_URL({ id: posterId });

  const result = await axios
    .get(url)
    .then((response) => {
      console.log("스페이스 아이템 단건조회 " + response.status);
      return response;
    })
    .catch((error) => {
      console.error("스페이스 아이템 단건조회 실패: " + error);
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
// todo 시작일 끝날짜 추가 필요
//!---------------------------- 스페이스 아이템 수정
export const updateSpaceItemInfo = async ({
  spaceId,
  intro,
  hostname,
  city,
  size,
  parking,
  fee,
  phone,
}) => {
  console.log("스페이스 아이템 수정 실행");
  const url = GetSpaceItem_URL({ id: spaceId });

  const result = await axios
    .put(url, {
      intro,
      hostname,
      city,
      size,
      parking,
      fee,
      phone,
      startDate: "2024-05-01T09:00:00",
      endDate: "2024-05-01T09:00:00",
    })
    .then((response) => {
      console.log("프로젝트 작품 수정 " + response.status);
      return response;
    })
    .catch((error) => {
      console.error("프로젝트 작품 수정 실패: " + error);
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
//!-----------------------------스페이스 아이템 삭제

export const deleteSpaceItem = async ({ spaceId }) => {
  console.log("스페이스 아이템 삭제 실행");
  console.log("스페이스 아이템 삭제 posterid  :" + spaceId);

  const url = GetSpaceItem_URL({ id: spaceId });

  console.log("url" + url);
  const result = await axios.delete(url).catch((error) => {
    console.error("스페이스 아이템 삭제 실패: " + error);
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
//!---------------------------- 공간 -> 작가 신청
export const applyToAuthorItem = async ({ authorItemId, spaceItemId }) => {
  console.log("공간 -> 작가 신청 실행");
  console.log("신청 공간 아이템 id  :" + spaceItemId);
  const url = ApplyToAuthorItem_URL({ itemId: spaceItemId });

  const result = await axios
    .post(url, { authorItemId })
    .then((response) => {
      console.log("공간 -> 작가 신청 status" + response.status);
      return response;
    })
    .catch((error) => {
      console.error("공간 -> 작가 신청  실패: " + error);
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
//!---------------------------- 스페이스 매칭대기
export const waitingMatchingForSpace = async ({ spaceId }) => {
  console.log("스페이스 매칭대기 실행");
  console.log("매칭대기 스페이스 id  :" + spaceId);
  const url = WaitingMatchingForSpace_URL({ id: spaceId });
  console.log("공간대여 매칭 대기 url" + url);
  const result = await axios
    .get(url)
    .then((response) => {
      console.log("스페이스 매칭대기 실행 status" + response.status);
      return response;
    })
    .catch((error) => {
      console.error("스페이스 매칭대기 실행 실패: " + error);
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
//!---------------------------- 스페이스 신청받은 조회
export const getOfferedMatchingForSpace = async ({ spaceId }) => {
  console.log("스페이스 신청받은 조회   실행");
  console.log("스페이스  id  :" + spaceId);
  const url = GetOfferedMatchingForSpace_URL({ id: spaceId });

  const result = await axios
    .get(url)
    .then((response) => {
      console.log("스페이스 신청받은 조회  실행 status" + response.status);
      return response;
    })
    .catch((error) => {
      console.error("스페이스 신청받은 조회 실행 실패: " + error);
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
//!---------------------------- 공간 성공매칭 조회
export const getSuccessMatchingForSpace = async ({ spaceId }) => {
  console.log("공간 성공매칭 실행");
  console.log("공간 id  :" + spaceId);
  const url = GetSuccessMatchingForSpace_URL({ id: spaceId });

  const result = await axios
    .get(url)
    .then((response) => {
      console.log(" 공간 성공매칭 조회  실행 status" + response.status);
      return response;
    })
    .catch((error) => {
      console.error(" 공간 성공매칭 조회  실행 실패: " + error);
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
//!---------------------------- 공간임대자의 아이템들 조회
export const getOneSpaceItems = async ({ spaceId }) => {
  console.log("공간임대자의 아이템들 조회 실행");
  console.log("공간임대자 id  :" + spaceId);
  const url = GetSpacesSpaceItem_URL({ id: spaceId });

  const result = await axios
    .get(url)
    .then((response) => {
      console.log("공간임대자 아이템들 조회 실행 status" + response.status);
      return response;
    })
    .catch((error) => {
      console.error("공간임대자 아이템들 조회 실행 실패: " + error);
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
