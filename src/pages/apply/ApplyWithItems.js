import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import space from "../../assets/space.png";
import * as React from "react";
// 라디오 버튼용
import Radio from "@mui/material/Radio";
import { pink } from "@mui/material/colors";
import PosterItem from "../../components/PosterItem";

// alert용
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

// css
import "../../styles/apply/ApplyWithItems.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous"
></link>;

const ApplyWithItems = () => {
  const uselocation = useLocation();
  const nav = useNavigate();

  const mockData = [
    {
      id: 1,
      postName: "장소1",
      location: "서울시 마포구",
      imageurl: space,
      createdDate: new Date("2024-04-19").getTime(),
    },
    {
      id: 2,
      postName: "장소2",
      location: "서울시 마포구",
      imageurl: space,
      createdDate: new Date("2024-04-19").getTime(),
    },
    {
      id: 3,
      postName: "장소3",
      location: "서울시 마포구",
      imageurl: space,
      createdDate: new Date("2024-04-19").getTime(),
    },
  ];

  const { userType, posterId } = uselocation.state; // 작가인지 공간대여자인지 신청하기 눌렀을 때 정보 가져올 api 다름

  const [applyBtnState, setApplyBtnState] = useState(false); // 어떤 작품을 제출할건지 선책됐는지 여부

  const [showAlert, setShowAlert] = useState(false); // 신청sucessAlert 보이기 상태
  const [showErrorAlert, setErrorShowAlert] = useState(false); // errprAlert 보이기 상태
  const [abledBtn, setAbledBtn] = useState(true); // 취소하기, 신청하기 버튼 신청 후 안보이게 처리
  // 라디오 그룹 라이브러리 가져옴
  const [selectedValue, setSelectedValue] = React.useState("a");

  // 신청할 아이템
  const [selectedItem, setSelectedItem] = useState(-1);
  const handleSelectedItem = (itemId) => {
    setSelectedItem(itemId);
    console.log(
      "ApplyWithItem_라디오버튼으로 선택된 id : 타입 + 번호 출력" +
        typeof itemId +
        itemId
    );
  };

  // 취소하기, 신청하기 버튼 신청 후 안보이게 처리
  const handleAbleBtn = () => {
    setAbledBtn(false);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  // 신청할 작품이 선택됐다면 신청가능하게
  const convertBtnState = () => {
    setApplyBtnState(true);
  };

  const goApply = () => {
    console.log("신청하기눌림");

    // todo 신청할 것이 선택 됐다면 => 신청 api 보내기
    // todo 신청할게 선택x라면
    if (selectedItem == -1) {
      setErrorShowAlert(true);
      setTimeout(() => {
        setErrorShowAlert(false);
      }, 2000);
    } else {
      setErrorShowAlert(false);
      // todo 신청 api
      // 신청완료시
      setShowAlert(true);
      // todo 신청하기 못눌리게하고 3초있다가 메인으로 가기 이때 뒤로가기 못하게 하기
      handleAbleBtn();
      setTimeout(() => {
        nav(`/mainbusiness`, { replace: true });
      }, 2000);
    }
  };
  // 신청 취소하기
  const goBack = () => {
    nav(-1, { replace: true });
  };

  // 컴포넌트는 return에서만 가능, 버튼 외 이벤트가 발생해야 함수 트리거 ()=> {} 아니면 리랜더 무한루프 오류남

  return (
    <div>
      {showAlert && (
        <Alert variant="filled" severity="success">
          신청 성공. 메인으로 이동합니다.
        </Alert>
      )}
      {showErrorAlert && (
        <Alert variant="filled" severity="error">
          신청할 아이템을 선택해주세요
        </Alert>
      )}
      <div className="applyItemsContainer">
        {mockData.map((item) => {
          return (
            <div>
              <Radio
                {...controlProps(String(item.id))}
                sx={{
                  color: pink[800],
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
                onClick={() => handleSelectedItem(item.id)}
              />
              <PosterItem
                key={item.id}
                {...item}
                date={item.createdDate}
                whatType={"author"}
                isVisible={false}
                isDialog={true}
              />
            </div>
          );
        })}
      </div>
      {/* 아이템 목록이 있다면 함수 넣기   */}
      {abledBtn && (
        <div>
          <button
            className="applyBtn"
            type="button"
            class="btn btn-dark"
            onClick={goBack}
          >
            취소하기
          </button>
          <button
            className="applyBtn"
            type="button"
            class="btn btn-success"
            onClick={goApply}
          >
            신청하기
          </button>
        </div>
      )}
    </div>
  );
};
export default ApplyWithItems;
