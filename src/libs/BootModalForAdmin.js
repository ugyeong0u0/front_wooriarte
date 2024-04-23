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

// api 통신
import { onAddAuthorProjectHandler } from "../apis/servicehandeler/AuthorApiHandler";
import { onAddSpaceItemHandler } from "../apis/servicehandeler/SpaceApiHandler";
// 라디오 버튼
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
//!--------------전시 생성/수정용 모달
// 달력 위치
import DatePickerOpenTo, { SelectSizesExample } from "../libs/Open";
// todo props 에 전시 생성인지 수정인지 구분 필요 create/ update, matchingId/exhibitId 들어감
// 작가랑 공간대여자 아이템 추가하기
export default function BootModalForAdmin(props) {
  // 전시생성 버튼 활성화
  const [enableNextBtn, setEnableNextBtn] = useState(false);

  //  전시 내용
  const [exhibitInfoState, setExhibitInfoState] = useState({
    name: "",
    intro: "",
    startDate: "",
    endDate: "",
    artistName: "",
    hostName: "",
    price: "",
    address: "",
  });

  // 전시 입력상태 감지
  const handleExhibitInfoStateChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    setExhibitInfoState({
      ...exhibitInfoState,
      [e.target.name]: e.target.value,
    });
  };
  // 입력이 달라지면 상태 감지

  useEffect(() => {
    console.log("저장 버튼 useEffect");
    if (props.type === "create") {
      if (
        exhibitInfoState.name.length > 1 &&
        exhibitInfoState.intro.length > 1 &&
        exhibitInfoState.artistName.length > 1 &&
        exhibitInfoState.price.length > 1 &&
        exhibitInfoState.address.length > 1
      ) {
        console.log("빈값없음");
        setEnableNextBtn(true); // 다음 버튼 비활성화
      } else {
        console.log("필수 입력 필드가 비어있습니다.");
        setEnableNextBtn(false); // 다음 버튼 비활성화
      }
    }
  }, [exhibitInfoState]);

  // 처음에만 전시 정보 불러오기
  useEffect(() => {
    console.log("전시정보 불러오기 useEffect");
    if (props.type === "update") {
      // todo 전시 정보 불러오기
    }
  }, []);
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

  const deleteExhibits = () => {
    // todo update의 경우 삭제 api
  };
  // 전시 정보 수정하기 api
  const updateExhibit = () => {
    // 전시 정보 생성의 경우
    if (props.type === "create") {
      // todo 시작날짜 끝날짜 넣기 + 지역은 서버에 작가만 넣어둠
      // todo 전시 정보 생성하기 api
      //   onAddAuthorProjectHandler(
      //     {
      //       authorId,
      //       artistName: authorInfoState.name,
      //       intro: authorInfoState.explanation,
      //       phone: authorInfoState.phoneNumber,
      //     },
      //     () => {
      //       console.log("전시 추가 성공");
      //       props.onHide(); // 부모컴포넌트 프롭
      //     }
      //   );
      // todo 날짜 업데이트 하기
      // todo 전시 수정하기
    } else if (props.type === "update") {
      //   onAddSpaceItemHandler(
      //     {
      //       spaceRentalId: spaceRentalId,
      //       intro: exhibitInfoState.intro,
      //       hostname: exhibitInfoState.hostName,
      //       city: exhibitInfoState.address,
      //       size: exhibitInfoState.size,
      //       parking: newParking,
      //       fee: exhibitInfoState.fee,
      //       phone: exhibitInfoState.phoneNumber,
      //       startDate: "2024-05-01T09:00:00",
      //       endDate: "2024-05-01T09:00:00",
      //     },
      //     () => {
      //       console.log(" 전시 수정 성공");
      //       props.onHide(); // 부모컴포넌트 프롭
      //     }
      //   );
    } else {
      console.log("아이템등로 잘못된 접근");
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.type === "create" ? "전시생성하기" : "전시 수정하기"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>information</h4>
        {/* // todo 작가 아이템에도 달력, 위치 넣어야함 서버에도 */}
        <Box>
          <Stack spacing={2}>
            <TextField
              name="name"
              id="standard-number-busi"
              label="전시명"
              type="search"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              onChange={handleExhibitInfoStateChange}
              value={exhibitInfoState.name} // 상태와 입력 필드 연결
            />
            <TextField
              name="intro"
              id="outlined-multiline-static"
              label="전시 소개"
              multiline
              rows={10}
              onChange={handleExhibitInfoStateChange}
              value={exhibitInfoState.intro}
            />
            <TextField
              name="artistName"
              id="outlined-multiline-static"
              label="아티스트이름"
              type="search"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              onChange={handleExhibitInfoStateChange}
              value={exhibitInfoState.artistName}
            />
            {/* // todo 날짜 비즈니스 메인하고 함께 설정하기 */}
            {/* <DatePickerOpenTo calendarType="시작월" />
              <DatePickerOpenTo calendarType="끝월" /> */}
            <Stack spacing={16} direction="row">
              <SelectSizesExample
                name="addess"
                size={"default"}
                type={"location"}
                selectedLocation={exhibitInfoState.address}
                onLocationChange={handleExhibitInfoStateChange}
              />
              <TextField
                name="price"
                id="standard-search-id"
                label="가격"
                type="number"
                variant="standard"
                onChange={handleExhibitInfoStateChange}
                value={exhibitInfoState.price}
              />
            </Stack>
            // todo 사진 올리기
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>
          닫기
        </Button>

        <ButtonBoot onClick={updateExhibit} disabled={!enableNextBtn}>
          등록하기
        </ButtonBoot>
        {props.type === "update" && (
          <Button variant="dark" onClick={() => deleteExhibits()}>
            삭제하기
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
