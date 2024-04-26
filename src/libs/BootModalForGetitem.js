import ButtonBoot from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useEffect, useRef, useState } from "react";
// 레이아웃
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

// 업로드
import * as React from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// 라디오 버튼
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// 달력 위치
import DatePickerOpenTo, { SelectSizesExample } from "../libs/Open";

// api
import {
  onGetAuthorItemInfoHandler,
  onDeleteSingleProjectItemHandler,
  onUpdateAuthorItemInfoHandler,
} from "../apis/servicehandeler/AuthorApiHandler";
import {
  onGetSpaceItemInfoHandler,
  onUpdateSpaceItemInfoHandler,
  onDeleteSpaceItemHandler,
} from "../apis/servicehandeler/SpaceApiHandler";

//!------------ 작가랑 공간대여자 아이템 수정
export default function MyVerticallyCenteredModal({
  show,
  onHide,
  type,
  id,
  setUpdateCount,
}) {
  // 저장 버튼 활성화
  const [enableNextBtn, setEnableNextBtn] = useState(false);

  // 작가용
  const [authorInfoState, setauthorInfoState] = useState({
    name: " ",
    phoneNumber: " ",
    explanation: " ",
  });

  // 공간대여자용
  const [businessInfoState, setBusinessInfoState] = useState({
    hostName: "",
    intro: " ",
    address: "인천광역시",
    size: " ",
    phoneNumber: " ",
    parking: true,
    fee: 0,
  });

  // 공간 입력상태 감지
  const handleSpaceChangeState = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    setBusinessInfoState({
      ...businessInfoState,
      [e.target.name]: e.target.value,
    });
  };
  // 입력이 달라지면 상태 감지
  const handleChangeState = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setauthorInfoState({
      ...authorInfoState,
      [e.target.name]: e.target.value,
    });
  };

  // 처음에 아이템 정보 불러오기
  useEffect(() => {
    console.log("아이템정보 불러오기 useEffect");
    console.log("type " + type);
    if (type === "author") {
      console.log("아이템 정보 id " + id);
      onGetAuthorItemInfoHandler({ posterId: id }, (response) => {
        console.log("작가아이템 정보 응답값 받음");
        console.log(response);
        setauthorInfoState((prevState) => ({
          name: response.data.artistName, // 전시명
          phoneNumber: response.data.phone, // 전화번호
          explanation: response.data.intro, // 전시 소개
          // intro: response.data.intro, // 전시소개
          // startDate: response.data.startDate, // 시작날짜
          // endDate: response.data.endDate, // 끝날짜
          // artistName: response.data.artistName, // 직가명
          // hostName: response.data.hostName, // 주최자명
          // price: response.data.price, // 가격
          // address: response.data.city, // 주소
        }));
      });
    } else if (type === "space") {
      console.log("아이템 정보 id " + id);
      onGetSpaceItemInfoHandler({ posterId: id }, (response) => {
        console.log("공간대여자 아이템 정보 응답값 받음");
        console.log(response);
        setBusinessInfoState((prevState) => ({
          intro: response.data.intro, // 전시소개
          hostName: response.data.hostName, // 주최자명
          address: response.data.city,
          size: response.data.size,
          phoneNumber: response.data.phone,
          parking: response.data.parking,
          startDate: response.data.startDate, // 시작날짜
          endDate: response.data.endDate, // 끝날짜
          fee: response.data.fee,
        }));
      });
    }
  }, []);

  // 수정하기 버튼용
  useEffect(() => {
    console.log("저장 버튼 useEffect");
    if (type === "author") {
      if (
        authorInfoState &&
        authorInfoState.name.length > 1 &&
        authorInfoState.explanation.length > 3 &&
        authorInfoState.phoneNumber.length > 8
      ) {
        console.log("빈값없음");
        setEnableNextBtn(true); // 다음 버튼 비활성화
      } else {
        console.log("필수 입력 필드가 비어있습니다.");
        setEnableNextBtn(false); // 다음 버튼 비활성화
      }
    } else if (type === "space") {
      if (
        businessInfoState
        // &&
        // businessInfoState.address.length > 1 &&
        // businessInfoState.fee.length > 1 &&
        // businessInfoState.hostName.length > 1 &&
        // businessInfoState.intro.length > 5 &&
        // businessInfoState.parking.length > 1 &&
        // businessInfoState.phoneNumber.length > 5 &&
        // businessInfoState.size.length > 1
      ) {
        setEnableNextBtn(true);
      } else {
        setEnableNextBtn(false);
      }
    }
  }, [authorInfoState, businessInfoState]);
  //사진 첨부
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  //? 수정 하기 api
  const submitAuthorItem = () => {
    if (type === "author") {
      let authorId = localStorage.getItem("userId");
      // todo 시작날짜 끝날짜 넣기 + 지역은 서버에 작가만 넣어둠
      onUpdateAuthorItemInfoHandler(
        {
          posterId: id,
          artistName: authorInfoState.name,
          intro: authorInfoState.explanation,
          phone: authorInfoState.phoneNumber,
        },
        () => {
          console.log("작가 아이템 추가 성공");
          setUpdateCount((prev) => prev + 1);
          onHide(); // 부모컴포넌트 프롭
        }
      );
      // todo 날짜 업데이트 하기
    } else if (type === "space") {
      let newParking = businessInfoState.parking === "true" ? true : false;
      onUpdateSpaceItemInfoHandler(
        {
          spaceId: id,
          intro: businessInfoState.intro,
          hostname: businessInfoState.hostName,
          city: businessInfoState.address,
          size: businessInfoState.size,
          parking: newParking,
          fee: businessInfoState.fee,
          phone: businessInfoState.phoneNumber,
          startDate: "2024-05-01T09:00:00",
          endDate: "2024-05-01T09:00:00",
        },
        () => {
          console.log("스페이스 아이템 추가 성공");
          setUpdateCount((prev) => prev + 1);
          onHide(); // 부모컴포넌트 프롭
        }
      );
    } else {
      console.log("아이템등로 잘못된 접근");
    }
  };

  // 작가, 공간대여자 아이템 삭제 api
  const deleteExhibits = () => {
    if (type === "author") {
      onDeleteSingleProjectItemHandler({ projectItemId: id }, () => {
        console.log("작가아이템 삭제 완료!!!!!!!!!!!");
        // 모달 닫기
        setUpdateCount((prev) => prev + 1);
        onHide();
      });
    } else {
      onDeleteSpaceItemHandler({ spaceId: id }, () => {
        console.log("공간아이템 삭제 완료!!!!!!!!!!!");
        // 모달 닫기
        setUpdateCount((prev) => prev + 1);
        onHide();
      });
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {type === "author" ? "작품" : "공간"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>information</h4>
        {/* // todo 작가 아이템에도 달력, 위치 넣어야함 서버에도 */}
        {type === "author" ? (
          <Box>
            <Stack spacing={2}>
              <TextField
                name="name"
                id="standard-basic"
                label="작가이름"
                variant="standard"
                onChange={handleChangeState}
                value={authorInfoState.name}
              />
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
                value={authorInfoState.phoneNumber}
              />
              <TextField
                name="explanation"
                id="outlined-multiline-static"
                label="소개"
                multiline
                rows={10}
                onChange={handleChangeState}
                value={authorInfoState.explanation}
              />
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                사진 올리기
                <VisuallyHiddenInput type="file" />
              </Button>
            </Stack>
          </Box>
        ) : (
          // 건물 아이템 정보
          <Box>
            <Stack spacing={2}>
              <TextField
                name="hostName"
                id="standard-number-busi"
                label="임대인"
                type="search"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                onChange={handleSpaceChangeState}
                value={businessInfoState.hostName} // 상태와 입력 필드 연결
              />
              <TextField
                name="phoneNumber"
                id="standard-number"
                label="전화번호"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                onChange={handleSpaceChangeState}
                value={businessInfoState.phoneNumber}
              />
              <TextField
                name="intro"
                id="outlined-multiline-static"
                label="건물 소개"
                multiline
                rows={10}
                onChange={handleSpaceChangeState}
                value={businessInfoState.intro}
              />
              {/* // todo 날짜 비즈니스 메인하고 함께 설정하기 */}
              {/* <DatePickerOpenTo calendarType="시작월" />
              <DatePickerOpenTo calendarType="끝월" /> */}
              <Stack spacing={16} direction="row">
                <SelectSizesExample
                  name="address"
                  size={"default"}
                  type={"location"}
                  selectedLocation={businessInfoState.address}
                  onLocationChange={handleSpaceChangeState}
                />
                <TextField
                  name="size"
                  id="standard-search-id"
                  label="면적/평"
                  type="number"
                  variant="standard"
                  onChange={handleSpaceChangeState}
                  value={businessInfoState.size}
                />
              </Stack>
              {/* // todo 선택 창으로 변경하기 */}
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  주차여부
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="parking"
                  value={String(businessInfoState.parking)}
                  onChange={handleSpaceChangeState}
                >
                  <FormControlLabel
                    value={"true"}
                    control={<Radio />}
                    label="가능"
                  />
                  <FormControlLabel
                    value={"false"}
                    control={<Radio />}
                    label="불가능"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                name="fee"
                id="standard-search-authPassword"
                label="대여료/1일"
                type="number"
                variant="standard"
                onChange={handleSpaceChangeState}
              />

              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                사진 올리기
                <VisuallyHiddenInput type="file" />
              </Button>
            </Stack>
          </Box>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={onHide}>
          닫기
        </Button>

        <ButtonBoot onClick={submitAuthorItem} disabled={!enableNextBtn}>
          수정하기
        </ButtonBoot>
        <ButtonBoot onClick={() => deleteExhibits()}>삭제하기</ButtonBoot>
      </Modal.Footer>
    </Modal>
  );
}
