import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import BusinessInfo from "../components/BusinessInfo";
const Signupbusiness = () => {
  // whatuser
  const uselocation = useLocation();
  const { userInfo } = uselocation.state;
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
      <div>
        <Stack spacing={2} direction="row">
          <Button color="inherit" size="large" onClick={goUserSignup}>
            개인
          </Button>

          <Button color="info" size="large" onClick={goBusinessSignup}>
            사업자
          </Button>
        </Stack>
      </div>
      <BusinessInfo isSignup={true} />
    </div>
  );
};
export default Signupbusiness;
