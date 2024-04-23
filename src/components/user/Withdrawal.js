import Button from "react-bootstrap/Button";
import Stack from "@mui/material/Stack";
// 체크박스
import * as React from "react";
import { red } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

// css
import "../../styles/Withdrawal.css";

// api
import { onDeleteUserHandler } from "../../apis/servicehandeler/ApiHandler";
import { onDeleteAuthorHandler } from "../../apis/servicehandeler/AuthorApiHandler";
import { onDeleteSpaceHandler } from "../../apis/servicehandeler/SpaceApiHandler";

import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const WithDrawalUser = () => {
  const nav = useNavigate();
  // 회원탈퇴 버튼 활성화
  const [enableBtn, setEnableBtn] = React.useState(false);
  // 체크 상태
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  // 동의 한 후 탈퇴 가능하게
  useEffect(() => {
    if (checked) setEnableBtn(true);
    else setEnableBtn(false);
  }, [checked]);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // 탈퇴하기 클릭 리스너
  const widthDrawalHandler = () => {
    let userType = localStorage.getItem("userType");
    let id = localStorage.getItem("userId");
    if (userType === "user") {
      onDeleteUserHandler({ userId: id }, () => {
        console.log("탈퇴눌림");
        // 성공시 콜백
        setTimeout(() => {
          alert("탈퇴완료");
          console.log("유저탈퇴 successful, navigating back");
          localStorage.removeItem("userId");
          localStorage.removeItem("userType");

          nav(`/`);
        }, 2000); // 성공시 alert뜨기
      });
    } else if (userType === "author") {
      // todo 선언하기
      onDeleteAuthorHandler({ id }, () => {
        console.log("작가 탈퇴 눌림");
        localStorage.removeItem("userId");
        localStorage.removeItem("userType");
        nav(`/`);
      });
    } else if (userType === "space") {
      onDeleteSpaceHandler({ id }, () => {
        console.log("공간대여자 탈퇴 눌림");
        localStorage.removeItem("userId");
        localStorage.removeItem("userType");
        nav(`/`);
      });
    } else {
      console.log("회원 탈퇴 잘못된 접근 ");
    }
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
