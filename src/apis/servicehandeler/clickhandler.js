import { LogInRequest } from "../api-manger";

export const SignInResponse = (responseBody) => {
  if (!responseBody) {
    alert("네트워크 이상");
    return;
  }
  if (responseBody === "success") {
    alert("로그인 성공");
    return;
  } else {
    alert("로그인 실패");
    return;
  }
};
export const onLoginButtonHandler = ({ id, password }) => {
  const requestBody = {
    id,
    password,
  };
  LogInRequest(requestBody).then(SignInResponse);
};
