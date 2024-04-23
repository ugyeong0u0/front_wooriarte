import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

// 캘린더
//calendarLabel : 박스에 표시할 이름
export default function DatePickerOpenTo({ calendarType, onDateChange }) {
  console.log(calendarType);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          label={`${calendarType}`}
          openTo="year"
          views={["year", "month"]}
          onChange={onDateChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

const locations = [
  "서울특별시",
  "부산광역시",
  "대구광역시",
  "인천광역시",
  "광주광역시",
  "대전광역시",
  "울산광역시",
  "세종특별자치시",
  "경기도",
  "강원도",
  "충청북도",
  "충청남도",
  "전라북도",
  "전라남도",
  "경상북도",
  "경상남도",
  "제주특별자치도",
];

// 위치 셀렉트
// todo 비즈니스 메인에도 이벤트함수 반영하기
export function SelectSizesExample({
  size,
  type,
  selectedLocation,
  onLocationChange,
}) {
  let selectComponentStyle = {
    maxWidth: "200px", // 최대 가로 길이를 200px로 설정
  };
  let selectComponent;

  switch (size) {
    case "large":
      selectComponent = (
        <Form.Select size="lg">
          <option>Large select</option>
        </Form.Select>
      );
      break;
    case "default":
      if (type === "location") {
        selectComponent = (
          <Form.Select
            name="address"
            style={selectComponentStyle}
            value={selectedLocation}
            onChange={onLocationChange}
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </Form.Select>
        );
      } else {
        selectComponent = (
          <Form.Select>
            <option>Default select</option>
          </Form.Select>
        );
      }
      break;
    case "small":
      selectComponent = (
        <Form.Select size="sm">
          <option>Small select</option>
        </Form.Select>
      );
      break;
    default:
      selectComponent = <p>선택 옵션이 유효하지 않습니다.</p>;
  }

  return (
    <>
      {selectComponent}
      <br />
    </>
  );
}
