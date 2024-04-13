import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../components/Button";
import BusinessInfo from "../components/BusinessInfo";
const Signupbusiness = () => {
  // whatuser
  const uselocation = useLocation();
  const { whatUser } = uselocation.state;
  const nav = useNavigate();
  const goUserSignup = () => {
    nav(`/signupuser`, { replace: true });
  };
  const goBusinessSignup = () => {
    // whatUser에 따라 회원가입 다르게 해야함
    alert("회원가입 누구? " + whatUser);
    console.log("회원가입 누구? " + whatUser);
  };

  return (
    <div>
      <div>
        <Button
          text={"개인"}
          isVisible={true}
          type={"thin"}
          onClick={goUserSignup}
        />
        <Button
          text={"사업자"}
          isVisible={true}
          type={"bold"}
          onClick={goBusinessSignup}
        />
      </div>
      <BusinessInfo isSignup={true} />
    </div>
  );
};
export default Signupbusiness;
