//? 공간대여자용

import axios from "axios";
import { jsx } from "react/jsx-runtime";
// 변수명 임시 지정
const DOMAIN = "http://localhost:8080"; // TODO: 도메인 주소 확인 필요

//?----------------------------- 작가 url
const LoginAuthor_URL = () => `${DOMAIN}/project-managers/login`;
const SignupAuthor_URL = () => `${DOMAIN}/project-managers`;

const FindAuthorId_URL = () => `${DOMAIN}/project-managers/find-id`;

const findAuthorPass_URL = () => `${DOMAIN}/project-managers/set-pwd`;

const DeleteAuthor_URL = ({ id }) => `${DOMAIN}/project-managers/${id}`;

//todo 비번 확인
// const confirmSpacePw_URL = ({ id }) => `${DOMAIN}/user/${id}/verify-pwd`;
const GetAuthorInfo_URL = ({ id }) => `${DOMAIN}/project-managers/${id}`;
const UpdateAuthorInfo_URL = ({ id }) => `${DOMAIN}/project-managers/${id}`;

//?------------------------------작가 작품 url
const AddAuthorProject_URL = () => `${DOMAIN}/project-item`;

// 작가 작품 수정 및 조회
const GetAuthoritem_URL = ({ posterId }) =>
  `${DOMAIN}/project-item/${posterId}`;

// 작가만의 아이템 모두 조회
const getAllAuthorProject_URL = ({ id }) =>
  `${DOMAIN}/project-item/project-manager/${id}`;

// 작가 아이템 삭제
const DeleteAuthorProject_URL = ({ id }) => `${DOMAIN}/project-item/${id}`;

//?------------------------------작가 신청 url
const ApplyToSpaceItem_URL = ({ itemId }) =>
  `${DOMAIN}/project/${itemId}/request`;

//?------------------------------작가 매칭 url
const WaitingMatchingResult_URL = ({ id }) =>
  `${DOMAIN}/project-managers/${id}/waitings`; // 대기
const GetOfferedMatching_URL = ({ id }) =>
  `${DOMAIN}/project-managers/${id}/offers`; // 제공
const GetSuccessMatching_URL = ({ id }) =>
  `${DOMAIN}/project-managers/${id}/success`; // 성공

//!----------------------------- 작가 로그인
export const LoginAuthorRequest = async ({ id, pwd }) => {
  console.log("작가 LoginRequest실행");
  console.log("리퀘안" + id + pwd);
  const result = await axios
    .post(LoginAuthor_URL(), { id: id, pwd: pwd })
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

//!----------------------------- 작가 회원가입
export const SignupAuthor = async ({
  businessNum,
  id,
  pwd,
  company,
  ceo,
  email,
  phone,
}) => {
  console.log("작가 회원가입 SignupSpace 실행");
  console.log(
    "작가 회원가입 리쿼안 :" +
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
    .post(SignupAuthor_URL(), {
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

//!----------------------------- 작가 아이디 찾기
export const findAuthorId = async ({ email }) => {
  console.log("작가 아이디 찾기 실행");
  console.log("작가 아이디 찾기 리쿼안 :" + email);
  const result = await axios
    .post(FindAuthorId_URL(), email, {
      headers: {
        "Content-Type": "text/plain",
      },
    })
    .then((response) => {
      console.log(response.status);
      return response;
    })
    .catch((error) => {
      console.error("작가 아이디 찾기 실패: " + error);
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
//!----------------------------- 작가 비번 재설정
export const findAuthorPw = async ({ id, pwd }) => {
  console.log("작가 비번 재설정 실행");
  console.log("작가비번 재설정 리퀘안 :" + id + "/" + pwd);
  const result = await axios
    // todo url 고치기
    .post(findAuthorPass_URL(), {
      id: id,
      pwd: pwd,
    })
    .then((response) => {
      console.log(response.status);
      return response;
    })
    .catch((error) => {
      console.error("작가 비번 재설정실패: " + error);
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
//!-----------------------------작가 탈퇴

export const deleteAuthor = async ({ id }) => {
  console.log("작가 삭제 실행");
  console.log("작가 삭제 id  :" + id);

  const url = DeleteAuthor_URL({ id: id });

  console.log("url" + url);
  const result = await axios.delete(url).catch((error) => {
    console.error("작가 삭제 실패: " + error);
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

//!---------------------------- 작가 마이페이지 비번 확인
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

//!---------------------------- 작가 마이페이지 정보 조회
export const getAuthorInfo = async ({ id }) => {
  console.log("작가 정보 조회 실행");
  console.log("작가 정보조회 id  :" + id);
  const url = GetAuthorInfo_URL({ id: id });

  const result = await axios
    .get(url)
    .then((response) => {
      console.log(response.status);
      return response;
    })
    .catch((error) => {
      console.error("작가 정보 조회 실패: " + error);
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

//!---------------------------- 작가 마이페이지 정보 수정
export const updateAuthorInfo = async ({
  authorId,
  businessNumber,
  id,
  pwd,
  company,
  ceo,
  email,
  phone,
}) => {
  console.log("작가 정보 수정 실행");
  console.log(
    "작가 정보수정 id  :" +
      authorId +
      businessNumber +
      id +
      pwd +
      company +
      ceo +
      email +
      phone
  );
  const url = UpdateAuthorInfo_URL({ id: authorId });

  const result = await axios
    .put(url, {
      businessNumber: businessNumber,
      id: id,
      pwd: pwd,
      company: company,
      ceo: ceo,
      email: email,
      phone: phone,
    })
    .then((response) => {
      console.log("작가 정보 수정 " + response.status);
      return response;
    })
    .catch((error) => {
      console.error("작가 수정 실패: " + error);
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
//!---------------------------- 작가 아이템 생성
export const addAuthorProject = async ({
  authorId,
  artistName,
  intro,
  phone,
}) => {
  console.log("작가 아이템 추가 실행");
  console.log("작가 정보조회 id  :" + authorId);
  console.log("작가 아이템  :" + authorId, artistName + intro + phone);
  const result = await axios
    .post(AddAuthorProject_URL(), {
      projectManagerId: authorId,
      artistName: artistName,
      intro: intro,
      phone: phone,
      approval: true,
      isDeleted: false,
    })
    .then((response) => {
      console.log("작가 아이템 추가 " + response.status);
      return response;
    })
    .catch((error) => {
      console.error("작가 아이템 추가 실패: " + error);
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
//!---------------------------- 모든 작가 아이템 불러오기
export const getAllAuthorProject = async () => {
  console.log("모든 작가 아이템 가져오기 실행");
  const result = await axios
    .get(AddAuthorProject_URL())
    .then((response) => {
      console.log("모든 작가 아이템 조회 " + response.status);
      return response;
    })
    .catch((error) => {
      console.error("모든 작가 아이템 조회 실패: " + error);
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
//!---------------------------- 작가 아이템 단건 조회
export const getAuthorItemInfo = async ({ posterId }) => {
  console.log("작가 아이템 단건 조회 시작");
  console.log("작가 아이템 번호 id  :" + posterId);
  const url = GetAuthoritem_URL({ posterId: posterId });
  console.log("작가 아이템 단건조회 url  :" + url);

  const result = await axios
    .get(url)
    .then((response) => {
      console.log("작가 아이템 단건조회 " + response.status);
      return response;
    })
    .catch((error) => {
      console.error("작가 아이템 단건조회 실패: " + error);
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

//!---------------------------- 작가 아이템 수정
export const updateAuthorItemInfo = async ({
  posterId,
  artistName,
  intro,
  phone,
}) => {
  console.log("작가 아이템 수정 실행");
  console.log("작가 아이템 id  :" + posterId);
  const url = GetAuthoritem_URL({ posterId: posterId });

  const result = await axios
    .put(url, {
      artistName,
      intro,
      phone,
      approval: true,
      startDate: "2024-04-04T11:29:26.197299",
      endDate: "2024-04-12T11:29:26.197299",
      isDeleted: false,
      city: "INCHEON",
    })
    .then((response) => {
      console.log("작가 작품 수정 " + response.status);
      return response;
    })
    .catch((error) => {
      console.error("작가 작품 수정 실패: " + error);
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
//!-----------------------------작가 아이템 삭제

export const deleteAuthorItem = async ({ posterId }) => {
  console.log("작가 아이템 삭제 실행");
  console.log("작가 아이템 삭제 posterid  :" + posterId);

  const url = GetAuthoritem_URL({ posterId: posterId });

  console.log("url" + url);
  const result = await axios.delete(url).catch((error) => {
    console.error("작가 아이템 삭제 실패: " + error);
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
//!---------------------------- 작가 -> 공간 신청
export const applyToSpaceItem = async ({ authorItemId, spaceItemId }) => {
  console.log("작가 -> 공간 신청 실행");
  console.log("신청 공간 아이템 id  :" + authorItemId);
  const url = ApplyToSpaceItem_URL({ itemId: authorItemId });

  const result = await axios
    .post(url, { spaceItemId })
    .then((response) => {
      console.log("작가 -> 공간 신청 status" + response.status);
      return response;
    })
    .catch((error) => {
      console.error("작가 -> 공간 신청  실패: " + error);
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
//!---------------------------- 작가 매칭대기
export const waitingMatchingResult = async ({ authorId }) => {
  console.log("작가 매칭대기 실행");
  console.log("작가 id  :" + authorId);
  const url = WaitingMatchingResult_URL({ id: authorId });

  const result = await axios
    .get(url)
    .then((response) => {
      console.log("작가 매칭대기 실행 status" + response.status);
      return response;
    })
    .catch((error) => {
      console.error("작가 매칭대기 실행 실패: " + error);
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
//!---------------------------- 작가 신청받은 조회
export const getOfferedMatching = async ({ authorId }) => {
  console.log("작가 성사된 매칭 조회  실행");
  console.log("작가 id  :" + authorId);
  const url = GetOfferedMatching_URL({ id: authorId });

  const result = await axios
    .get(url)
    .then((response) => {
      console.log("작가 신청받은 조회  실행 status" + response.status);
      return response;
    })
    .catch((error) => {
      console.error("작가 신청받은 조회 실행 실패: " + error);
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
//!---------------------------- 작가 성공매칭 조회
export const getSuccessMatching = async ({ authorId }) => {
  console.log("작가 성공매칭 조회 실행");
  console.log("작가 id  :" + authorId);
  const url = GetSuccessMatching_URL({ id: authorId });

  const result = await axios
    .get(url)
    .then((response) => {
      console.log(" 작가 성공매칭 조회 실행 status" + response.status);
      return response;
    })
    .catch((error) => {
      console.error(" 작가 성공매칭 조회 실행 실패: " + error);
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

//!---------------------------- 작가의 아이템들 조회
export const getOneAuthorProjects = async ({ authorId }) => {
  console.log("작가의 아이템들 조회  실행");
  console.log("작가 id  :" + authorId);
  const url = getAllAuthorProject_URL({ id: authorId });

  const result = await axios
    .get(url)
    .then((response) => {
      console.log("작가의 아이템들 조회 실행 status" + response.status);
      return response;
    })
    .catch((error) => {
      console.error("작가의 아이템들 조회 실행 실패: " + error);
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
//!-----------------------------작가 아이템 삭제

export const deleteSingleExhibit = async ({ projectItemId }) => {
  console.log(" 작가 아이템 삭제실행");
  console.log(" 작가 아이템 삭제 id  :" + projectItemId);

  const url = DeleteAuthorProject_URL({ id: projectItemId });

  console.log("작가 아이템 삭제 url" + url);
  const result = await axios.delete(url).catch((error) => {
    console.error("작가 아이템 삭제 실패: " + error);
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
