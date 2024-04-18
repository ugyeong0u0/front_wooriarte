import {
  LoginSpaceRequest,
  SignupSpace,
  findSpaceId,
  findSpacePw,
  deleteSpace,
  confirmSpacePw,
  getSpaceInfo,
  updateSpaceInfo,
} from "../space-api-manager";

//!----------------------------스페이스 로그인
// 유저 로그인 결과값
export const LoginSpaceResponse = (response, callback) => {
  if (!response) {
    alert("네트워크 이상");
    return;
  }
  if (response.status >= 200 && response.status < 300) {
    alert(response.data);
    console.log("스페이스 id : " + response.data);
    // 임시로 localhost저장
    localStorage.setItem("userId", response.data);
    localStorage.setItem("userType", "space"); // 유저 타입으로 저장

    callback(console.log("localhost저장완료"));
    return;
  } else {
    alert("로그인 실패");
    console.log(response.status);
    return;
  }
};
// 유저 로그인 editor에서 로그인 누를 시
export const onLoginSpaceHandler = ({ id, pwd }, callback) => {
  const requestBody = {
    id,
    pwd,
  };
  LoginSpaceRequest({ id, pwd }).then((response) =>
    LoginSpaceResponse(response, callback)
  );
};
//!----------------------------스페이스 회원가입
// 스페이스 회원가입 응답
export const signupSpaceResponse = (response, callback) => {
  if (!response) {
    alert("네트워크 이상");
    return;
  }
  if (response.status >= 200 && response.status < 300) {
    alert(response.data);
    console.log("회원가입 성공");
    callback();
    return;
  } else {
    alert("회원가입 실패");
    console.log(response.status);
    return;
  }
};
// 스페이스 회원가입 외부에서 누를 시
export const onSignupSpaceHandler = (
  { businessNum, id, pwd, company, ceo, email, phone },
  callback
) => {
  SignupSpace({
    businessNum,
    id,
    pwd,
    company,
    ceo,
    email,
    phone,
  }).then((response) => signupSpaceResponse(response, callback));
};

//!----------------------------스페이스 아이디 찾기
// 스페이스 아이디 찾기 응답
export const findfindSpaceIdResponse = (response, callback) => {
  if (!response) {
    alert("네트워크 이상");
    return;
  }
  if (response.status >= 200 && response.status < 300) {
    alert(response.data);
    console.log("스페이스 아이디 찾기 성공");
    callback();
    return;
  } else {
    alert("회원가입 실패");
    console.log(response.status);
    return;
  }
};
// 스페이스 아이디 찾기 누를 시
export const onFindSpaceIdHandler = ({ email }, callback) => {
  findSpaceId({ email }).then((response) =>
    findfindSpaceIdResponse(response, callback)
  );
};

//!----------------------------스페이스 비번찾기
// todo 스페이스 비번 찾기 응답
// export const findSpacePwResponse = (response, callback) => {
//   if (!response) {
//     alert("네트워크 이상");
//     return;
//   }
//   if (response.status >= 200 && response.status < 300) {
//     alert(response.data);
//     console.log("비번 찾기 성공");
//     callback();
//     return;
//   } else {
//     alert("비번찾기 실패");
//     console.log(response.status);
//     return;
//   }
// };
// // 스페이스 비번 찾기 누름
// export const onFindUserPwHandler = ({ userId, userName, email }, callback) => {
//   findSpacePw({ userId, userName, email }).then((response) =>
//   findSpacePwResponse(response, callback)
//   );
// };

//!---------------------------- 공간대여자 탈퇴하기

// 공간대여자 탈퇴 응답
export const deleteSpaceResponse = (response, callback) => {
  if (!response) {
    alert("네트워크 이상");
    return;
  }
  if (response.status >= 200 && response.status < 300) {
    alert(response.status);
    console.log("스페이스 탈퇴 성공");
    callback();
    return;
  } else {
    alert("탈퇴 실패");
    console.log(response.status);
    return;
  }
};
// 공간대여자 삭제누름
export const onDeleteSpaceHandler = ({ id }, callback) => {
  console.log("스페이스 아이디" + id);
  deleteSpace({ id }).then((response) =>
    deleteSpaceResponse(response, callback)
  );
};
//!---------------------------- 공간대여자 마이페이지 비번 확인
// // 공간대여자 비번 확인 응답
// export const confirmSpacePwResponse = (response, callback) => {
//   if (!response) {
//     alert("네트워크 이상");
//     return;
//   }
//   if (response.status >= 200 && response.status < 300) {
//     alert(response.data);
//     console.log("비번 확인 성공");
//     callback();
//     return;
//   } else {
//     alert("비번확인 실패");
//     console.log(response.status);
//     return;
//   }
// };
// // 공간대여자 비번확인 누름
// export const onConfirmSpacePwHandler = ({ userId, password }, callback) => {
//   confirmSpacePw({ userId, password }).then((response) =>
//   confirmSpacePwResponse(response, callback)
//   );
// };

//!---------------------------- 공간대여자 마이페이지 정보 조회
// 유저 정보 조회 응답
// todo 정보 받아야함
export const getSpaceInfoResponse = (response, callback) => {
  if (!response) {
    alert("네트워크 이상");
    return;
  }
  if (response.status >= 200 && response.status < 300) {
    alert(response.data.name);
    console.log("스페이스 정보 조회 성공");
    callback(response);
    return;
  } else {
    alert("스페이스 정보 조회 실패");
    console.log(response.status);
    return;
  }
};
// 유저 정보조회 이벤트
export const onGetSpaceInfoHandler = ({ id }, callback) => {
  getSpaceInfo({ id }).then((response) =>
    getSpaceInfoResponse(response, callback)
  );
};

// //!---------------------------- 스페이스 마이페이지 정보 수정
// // 스페이스 정보 조회 응답
// export const updateSpaceInfoResponse = (response, callback) => {
//   if (!response) {
//     alert("네트워크 이상 ");
//     return;
//   }
//   if (response.status >= 200 && response.status < 300) {
//     alert(response.data);
//     console.log("스페이스 정보 조회 성공");
//     callback();
//     return;
//   } else {
//     alert("스페이스 정보 조회 실패");
//     console.log(response.status);
//     return;
//   }
// };
// // 유저 정보조회 이벤트
// export const onUpdateUserInfoHandler = (
//   { spaceId, businessNumber, id, pwd, company, ceo, email, phone },
//   callback
// ) => {
//   updateSpaceInfo({
//     spaceId,
//     businessNumber,
//     id,
//     pwd,
//     company,
//     ceo,
//     email,
//     phone,
//   }).then((response) => updateSpaceInfoResponse(response, callback));
// };

//!---------------------------- 예매자 페이지 전시 리스트 모두 가져오기
// export const getUserMainPosterResponse = (response, callback) => {
//   if (!response) {
//     alert("네트워크 이상 ");
//     return;
//   }
//   if (response.status >= 200 && response.status < 300) {
//     alert(response.data);
//     console.log("유저 정보 조회 성공");
//     callback();
//     return;
//   } else {
//     alert("유저 정보 조회 실패");
//     console.log(response.status);
//     return;
//   }
// };
// // 유저 정보조회 이벤트
// export const ongetUserMainPosterHandler = (
//   { userId, id, pwd, name, email, phone },
//   callback
// ) => {
//   updateUserInfo({ userId, id, pwd, name, email, phone }).then((response) =>
//     getUserMainPosterResponse(response, callback)
//   );
// };
