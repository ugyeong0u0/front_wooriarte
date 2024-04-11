import { LogInRequest } from "../api-manger";

export const SignInResponse = (response, callback) => {
  if (!response) {
    alert("네트워크 이상");
    return;
  }
  if (response.status >= 200 && response.status < 300) {
    alert(response.data);
    console.log(response.data);
    // 임시로 localhost저장
    localStorage.setItem("login-result", response.data);
    callback(console.log("localhost저자완료"));
    return;
  } else {
    alert("로그인 실패");
    console.log(response.status);
    return;
  }
};
export const onLoginButtonHandler = ({ id, pw }, callback) => {
  const requestBody = {
    id,
    pw,
  };
  LogInRequest({ id, pw }).then((response) =>
    SignInResponse(response, callback)
  );
};
