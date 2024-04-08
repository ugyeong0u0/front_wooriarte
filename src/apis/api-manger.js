import axios from "axios";
// 변수명 임시 지정
const DOMAIN = "http://127.0.0.1:3306"; // TODO: 도메인 주소 확인 필요

const LoginSpace_URL = () => `${DOMAIN}/space-rental/login`;

export const LogInRequest = async (requestBody) => {
  const result = await axios
    .post(LoginSpace_URL(), requestBody)
    .then((response) => {
      return response.data; // 응답 데이터를 그대로 반환
    })
    .catch((error) => {
      if (!error.response || !error.response.data) return null; // 에러 응답이 없거나 데이터가 없는 경우 null 반환
      return error.response.data; // 에러 응답의 데이터 반환
      // 에러 DTO api 반환시
    });

  return result;
};
