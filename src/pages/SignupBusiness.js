import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import BusinessInfo from "../components/BusinessInfo";

// 배지
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
const Signupbusiness = () => {
  // whatuser
  const uselocation = useLocation();
  const { userInfo } = uselocation.state; // LoginEditor에서 옴
  const nav = useNavigate();

  const goUserSignup = () => {
    nav(`/signupuser`, { replace: true });
  };
  const goBusinessSignup = () => {
    // whatUser에 따라 회원가입 다르게 해야함
    alert("회원가입 누구? " + userInfo);
    console.log("회원가입 누구? " + userInfo);
  };

  return (
    <div>
      <Box
        sx={{
          marginTop: 5,
          marginBottom: 5,
          width: "100%", // 박스 너비 설정
          display: "flex", // flexbox 디스플레이 설정
          justifyContent: "center", // 가로 중앙 정렬
        }}
      >
        <div>
          <Stack spacing={2} direction="row">
            <Button color="inherit" size="large" onClick={goUserSignup}>
              개인
            </Button>
            <Badge color="info" badgeContent=" " variant="dot">
              <Button color="info" size="large" onClick={goBusinessSignup}>
                사업자
              </Button>
            </Badge>
          </Stack>
        </div>
      </Box>
      <Box
        sx={{
          marginTop: 5,
          marginBottom: 5,
          width: "100%", // 박스 너비 설정
          display: "flex", // flexbox 디스플레이 설정
          justifyContent: "center", // 가로 중앙 정렬
        }}
      >
        {/* 회원가입양식 */}
        <BusinessInfo isBusinessInfo={false} whatUser={userInfo} />
      </Box>
    </div>
  );
};
export default Signupbusiness;
