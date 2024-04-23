import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import EditText from "./EditText";
import TextField from "@mui/material/TextField";
import { validateEmail } from "../util/GlobalFunc"; // 이메일 형식
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { useNavigate, useSearchParams } from "react-router-dom";
// api
import {
  onsignupAuthorHandler,
  onGetAuthorInfoHandler,
  onUpdateUserInfoHandler,
} from "../apis/servicehandeler/AuthorApiHandler"; // 작가
import {
  onSignupSpaceHandler,
  onUpdateSpaceInfoHandler,
  onGetSpaceInfoHandler,
} from "../apis/servicehandeler/SpaceApiHandler"; //공간대여자

//회원가입
import { common } from "@mui/material/colors";

//!------1. 사업자 회원가입 2. 정보 수정 시 사용

// isbusinessInfo true => 회원정보 수정에 쓰임 , false =:> 회원가입 때 쓰임
const BusinessInfo = ({ isBusinessInfo, whatUser }) => {
  console.log("회원정보 수정?" + isBusinessInfo);
  console.log("businessInfo 회원가입 누구?" + whatUser);

  const nav = useNavigate();
  // 다음 버튼 활성화
  const [enableNextBtn, setEnableNextBtn] = useState(false);

  const [businessInfoState, setBusinessInfoState] = useState({
    businessNumber: "",
    company: "",
    owner: "",
    id: "",
    phoneNumber: "",
    email: "",
    password: "",
    authPassword: "",
  });

  useEffect(() => {
    if (whatUser === "author" && isBusinessInfo) {
      let id = localStorage.getItem("userId");
      console.log(" BusinessInfo작가 id: " + id);

      // 작가 정보 가져오기
      onGetAuthorInfoHandler({ id }, (response) => {
        console.log(" 작가 개인정보 응답값 받음");
        setBusinessInfoState((prevState) => ({
          businessNumber: response.data.businessNumber,
          company: response.data.company,
          owner: response.data.ceo,
          id: response.data.id,
          phoneNumber: response.data.phone,
          email: response.data.email,
          password: " ",
          authPassword: " ",
        }));
      });
    } else if (whatUser === "space" && isBusinessInfo) {
      console.log("공간대여자 정보 조회");
      let id = localStorage.getItem("userId");

      // 공간대여자 정보 가져오기
      onGetSpaceInfoHandler({ id }, (response) => {
        console.log(" 공간대여자 개인정보 응답값 받음");
        setBusinessInfoState((prevState) => ({
          businessNumber: response.data.businessNumber,
          company: response.data.company,
          owner: response.data.ceo,
          id: response.data.id,
          phoneNumber: response.data.phone,
          email: response.data.email,
          password: " ",
          authPassword: " ",
        }));
      });
    } else if (!isBusinessInfo) {
      console.log("회원가입");
    } else {
      alert("BusinessInfo 잘못된 접근입니다. ");
    }
  }, []); //  초기에만 실행

  // 입력이 달라지면 상태 감지
  const handleChangeState = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setBusinessInfoState({
      ...businessInfoState,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (businessInfoState.authPassword === businessInfoState.password) {
      console.log("비번일치");
      if (
        businessInfoState && // null undefined
        businessInfoState.company !== "" &&
        businessInfoState.id !== "" &&
        businessInfoState.owner !== "" &&
        businessInfoState.businessNumber &&
        businessInfoState.businessNumber.length == 8 &&
        businessInfoState.phoneNumber &&
        businessInfoState.phoneNumber.length > 8
      ) {
        console.log("빈값없음");
        if (validateEmail(businessInfoState.email)) {
          console.log("이메일일치");
          if (
            businessInfoState.password > 3 &&
            businessInfoState.password === businessInfoState.authPassword
          ) {
            setEnableNextBtn(true); // 다음 버튼 활성화
          } else setEnableNextBtn(false);
        } else {
          console.log("이메일불일치");
          setEnableNextBtn(false); // 다음 버튼 비활성화
        }
      } else {
        console.log("필수 입력 필드가 비어있습니다.");
        setEnableNextBtn(false); // 다음 버튼 비활성화
      }
    } else {
      console.log("비번불일치");
      setEnableNextBtn(false); // 다음 버튼 비활성화
    }
  }, [businessInfoState]); // businessInfoState 객체의 모든 변경에 반응

  const submitsignup = () => {
    if (businessInfoState.id !== "" && businessInfoState.password !== "") {
      // 회원가입 통신

      if (whatUser === "author") {
        onsignupAuthorHandler(
          {
            businessNum: parseInt(businessInfoState.businessNumber),
            id: businessInfoState.id,
            pwd: businessInfoState.password,
            company: businessInfoState.company,
            ceo: businessInfoState.owner,
            email: businessInfoState.email,
            phone: businessInfoState.phoneNumber,
          },
          () => {
            // 성공시 콜백
            console.log("Signup successful, navigating back");
            nav(`/loginauthor`); // 로그인 페이지로 가기
          }
        );
      } else if (whatUser === "space") {
        onSignupSpaceHandler(
          {
            businessNum: parseInt(businessInfoState.businessNumber),
            id: businessInfoState.id,
            pwd: businessInfoState.password,
            company: businessInfoState.company,
            ceo: businessInfoState.owner,
            email: businessInfoState.email,
            phone: businessInfoState.phoneNumber,
          },
          () => {
            // 성공시 콜백
            console.log("Signup successful, navigating back");
            nav(`/loginspace`); // 로그인 페이지로 가기
          }
        );
      } else {
        alert("비즈니스 회원가입 유저틀림 잘못된 접근");
      }
    }
  };

  // 비즈니스 정보 저장 통신
  // todo 서버에 비번변경도 추가해야함
  const saveInfo = () => {
    if (businessInfoState.id !== "" && businessInfoState.password !== "") {
      let id = localStorage.getItem("userId");
      if (whatUser === "author") {
        onUpdateUserInfoHandler(
          {
            authorId: id,
            businessNumber: parseInt(businessInfoState.businessNumber),
            id: businessInfoState.id,
            pwd: businessInfoState.password,
            company: businessInfoState.company,
            ceo: businessInfoState.owner,
            email: businessInfoState.email,
            phone: businessInfoState.phoneNumber,
          },
          () => {
            // 성공시 콜백
            console.log("작가 정보 수정successful");
          }
        );
      } else if (whatUser === "space") {
        onUpdateSpaceInfoHandler(
          {
            spaceId: id,
            businessNumber: parseInt(businessInfoState.businessNumber),
            id: businessInfoState.id,
            pwd: businessInfoState.password,
            company: businessInfoState.company,
            ceo: businessInfoState.owner,
            email: businessInfoState.email,
            phone: businessInfoState.phoneNumber,
          },
          () => {
            // 성공시 콜백
            console.log("공간대여자 정보 수정 successful");
          }
        );
      } else {
        alert("비즈니스 회원가입 유저틀림 잘못된 접근");
      }
    }
  };

  return (
    <div>
      <Stack spacing={2}>
        {isBusinessInfo && <h2>회원 정보 수정</h2>}
        {!isBusinessInfo && <h2>회원 가입</h2>}
        <div>
          <TextField
            name="businessNumber"
            id="standard-number-busi"
            label="사업자번호"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={handleChangeState}
            value={businessInfoState.businessNumber} // 상태와 입력 필드 연결
          />
        </div>
        <div>
          <TextField
            name="company"
            id="standard-search-company"
            label="회사명"
            type="search"
            variant="standard"
            onChange={handleChangeState}
            value={businessInfoState.company}
          />
        </div>
        <div>
          <TextField
            name="owner"
            id="standard-search-name"
            label="대표자명"
            type="search"
            variant="standard"
            onChange={handleChangeState}
            value={businessInfoState.owner}
          />
        </div>
        <div>
          <TextField
            name="id"
            id="standard-search-id"
            label="아이디"
            type="search"
            variant="standard"
            onChange={handleChangeState}
            value={businessInfoState.id}
          />
        </div>
        <div>
          <TextField
            name="phoneNumber"
            id="standard-number"
            label="전화번호"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={handleChangeState}
            value={businessInfoState.phoneNumber}
          />
        </div>
        <div>
          <TextField
            name="email"
            id="standard-search-email"
            label="이메일"
            type="search"
            variant="standard"
            onChange={handleChangeState}
            value={businessInfoState.email}
          />
        </div>
        <div>
          <TextField
            name="password"
            id="standard-search-Password"
            label="비밀번호"
            type="password"
            variant="standard"
            onChange={handleChangeState}
          />
        </div>
        <div>
          <TextField
            name="authPassword"
            id="standard-search-authPassword"
            label="비밀번호확인"
            type="password"
            variant="standard"
            onChange={handleChangeState}
          />
        </div>
        <div />
        {!isBusinessInfo && (
          <button
            type="button"
            class="btn btn-success"
            onClick={submitsignup}
            disabled={!enableNextBtn}
          >
            회원가입
          </button>
        )}
        {isBusinessInfo && (
          <button
            type="button"
            class="btn btn-dark"
            onClick={saveInfo}
            disabled={!enableNextBtn}
            style={{ marginTop: 15 }}
          >
            저장
          </button>
        )}
      </Stack>
    </div>
  );
};
export default BusinessInfo;
