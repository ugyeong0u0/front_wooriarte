import axios from "axios";
import { jsx } from "react/jsx-runtime";
// 변수명 임시 지정
const DOMAIN = "http://localhost:8080"; // TODO: 도메인 주소 확인 필요

const LoginSpace_URL = () => `${DOMAIN}/login`;

export const LogInRequest = async ({ id, pw }) => {
  console.log("LoginRequest실행");
  console.log("리퀘안" + id + pw);
  const result = await axios
    .post(LoginSpace_URL(), { id: id, pwd: pw })
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
// export const LogInRequest = async ({ id, pw }) => {
//   console.log("LoginRequest실행");
//   console.log("리퀘안" + id + pw);
//   const result = await axios
//     .post(LoginSpace_URL(), { id: id, pwd: pw })
//     .then((response) => {
//       return response; // 응답 데이터를 그대로 반환
//     })
//     .catch((error) => {
//       console.log("실패" + error.data);
//       if (!error.response || !error.response.data) return null; // 에러 응답이 없거나 데이터가 없는 경우 null 반환
//       return error.response.data; // 에러 응답의 데이터 반환
//       // 에러 DTO api 반환시
//     });
//   // console.log("result" + result.data);
//   return result;
// };
