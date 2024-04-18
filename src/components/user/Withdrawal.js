import Button from "react-bootstrap/Button";
import Stack from "@mui/material/Stack";
// 체크박스
import * as React from "react";
import { red } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

// css
import "../../styles/Withdrawal.css";

import { onDeleteUserHandler } from "../../apis/servicehandeler/ApiHandler"; // api

import { useNavigate, useSearchParams } from "react-router-dom";

const WithDrawalUser = () => {
  const nav = useNavigate();
  // 회원탈퇴 버튼 활성화
  const [enableBtn, setEnableBtn] = React.useState(false);
  // 체크 상태
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (checked) setEnableBtn(true);
    else {
      setEnableBtn(false);
    }
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // 탈퇴하기 클릭 리스너
  const widthDrawalHandler = () => {
    let id = localStorage.getItem("userId");
    onDeleteUserHandler({ userId: id }, () => {
      console.log("탈퇴눌림");
      // 성공시 콜백
      setTimeout(() => {
        alert("탈퇴완료");
        console.log("유저탈퇴 successful, navigating back");
        nav(`/`);
      }, 2000); // 성공시 alert뜨기
    });
  };

  return (
    <div className="withdrawalContainer">
      <h2 style={{ marginBottom: 15 }}> 회원탈퇴</h2>
      <div className="content">
        <span>
          아이디 <span class="highlight">재사용</span>및{" "}
          <span class="highlight">복구 불가</span>
        </span>
      </div>
      <div />
      <span>
        사용하고 계신 아이디를 탈퇴하기면 본인과 타인 모두 재사용 및 복구가
        불가하오니 신중하게 선택하시길 바랍니다.
      </span>
      <Stack
        spacing={2}
        direction="row"
        style={{ alignItems: "center", marginBottom: 20, marginTop: 10 }}
      >
        <Checkbox
          {...label}
          onChange={handleChange}
          sx={{
            color: red[800],
            "&.Mui-checked": {
              color: red[600],
            },
          }}
        />
        <span>위 내용을 모두 확인했으며, 이에 동의합니다.</span>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="success">취소하기</Button>{" "}
        <Button
          variant="outline-danger"
          disabled={!enableBtn}
          onClick={widthDrawalHandler}
        >
          탈퇴하기
        </Button>{" "}
      </Stack>
    </div>
  );
};
export default WithDrawalUser;
