import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import "../styles/ExhibitItemInfo.css";
import { useLocation, useParams } from "react-router-dom";
import image1 from "../assets/image 1.png";
import { useNavigate } from "react-router-dom";

// + - 아이콘
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Tooltip from "@mui/material/Tooltip";
// 배치
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Payment from "../payment";

// 구매 다이어로그로 넘김
import { BuyingDialog } from "../libs/ScrollDialog";

// api
import { onGetExhibitInfoHandler } from "../apis/servicehandeler/AdminApiHandler";

const ExhibitItemInfo = () => {
  const nav = useNavigate();
  const uselocation = useLocation();
  const { exhibitId } = uselocation.state; // from mainuser.js

  const [exhibitInfoState, setExhibitInfoState] = useState({
    name: "", // 전시명
    intro: "", // 전시소개
    startDate: "", // 시작날짜
    endDate: "", // 끝날짜
    artistName: "", // 직가명
    hostName: "", // 주최자명
    price: "", // 가격
    address: "", // 주소
    urls: "",
  });

  useEffect(() => {
    console.log("전시정보 불러오기 useEffect");

    console.log("전시 modal id " + exhibitId);
    onGetExhibitInfoHandler({ exhibitId: exhibitId }, (response) => {
      console.log(response);
      setExhibitInfoState((prevState) => ({
        name: response.data.name, // 전시명
        intro: response.data.intro, // 전시소개
        startDate: response.data.startDate, // 시작날짜
        endDate: response.data.endDate, // 끝날짜
        artistName: response.data.artistName, // 직가명
        hostName: response.data.hostName, // 주최자명
        price: response.data.price, // 가격
        address: response.data.city, // 주소
        urls: response.data.urls,
      }));
    });
  }, []);

  // 예매할 티켓 수
  const [ticketNumber, setTicketNumber] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0); // 총 가격 상태
  const param = useParams(); // parameter 번호, post번호

  useEffect(() => {
    setTotalPrice(ticketNumber * exhibitInfoState.price); // 총 가격 계산 후 상태 업데이트
  }, [ticketNumber]); // ticketNumber가 변경될 때마다 이 효과를 재실행

  const plusTicket = () => {
    if (ticketNumber + 1 < 500) {
      setTicketNumber((ticketNumber) => ticketNumber + 1);
    }
  };

  const minusTicket = () => {
    if (ticketNumber - 1 >= 0) {
      setTicketNumber((ticketNumber) => ticketNumber - 1);
    }
  };

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <div class="gray-line"></div>
        <Container
          maxWidth="80%"
          style={{
            marginTop: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={10}>
            <div>
              <img
                src={exhibitInfoState.urls[0]}
                style={{ maxHeight: 500, maxWidth: 500 }}
              />
            </div>

            <Stack
              direction="col"
              spacing={2}
              style={{ alignItems: "center", marginRight: 10 }}
            >
              <div className="exhibitInfoContainer">
                <div>
                  <h1>{exhibitInfoState.name}</h1>
                </div>
                <div
                  style={{
                    height: 2,
                    backgroundColor: "black" /* 선의 색상을 회색으로 설정 */,
                    width: 300 /* 선의 너비를 부모 요소의 전체 너비로 설정 */,
                    marginBottom: 30,
                  }}
                ></div>
                <div>
                  <span>작가이름 </span>
                  <span>{exhibitInfoState.artistName}</span>
                </div>

                <div>
                  <span>주최자 </span>
                  <span>{exhibitInfoState.hostName}</span>
                </div>

                <div>
                  <span>관람장소 </span>
                  <span>{exhibitInfoState.address}</span>
                </div>
                <div>
                  <span>관람기간 </span>
                  <span>
                    {exhibitInfoState.startDate +
                      "~" +
                      exhibitInfoState.endDate}
                  </span>
                </div>
                <div>
                  <span>관람료 </span>
                  <span>{exhibitInfoState.price}원</span>
                </div>
                <div />

                <div>
                  <Stack
                    direction="row"
                    spacing={2}
                    style={{ alignItems: "center" }}
                  >
                    <Tooltip title="Minus">
                      <IconButton onClick={minusTicket}>
                        <RemoveIcon />
                      </IconButton>
                    </Tooltip>
                    <span>{ticketNumber}</span>
                    <Tooltip title="Plus">
                      <IconButton onClick={plusTicket}>
                        <AddIcon />
                      </IconButton>
                    </Tooltip>
                  </Stack>

                  <div style={{ marginBottom: 20 }}>
                    <span>총 결제 금액 : </span>
                    <span>
                      {ticketNumber}개 x {exhibitInfoState.price} ={totalPrice}
                      원
                    </span>
                  </div>
                  <Payment
                    exhibitId={exhibitId}
                    ticketNumber={ticketNumber}
                  ></Payment>
                </div>
              </div>
            </Stack>
          </Stack>

          {/* 구분선 */}
          <div class="gray-line" style={{ maxWidth: 40, marginTop: 100 }}></div>
          <h2 style={{ marginTop: 20 }}>전시 소개 </h2>
          <div class="gray-line" style={{ maxWidth: 40 }}></div>

          <span
            style={{
              marginBottom: 200,
              padding: 20,

              display: "flex", // 플렉스박스 레이아웃 적용
              alignItems: "center", // 수직 방향 중앙 정렬
              justifyContent: "center", // 수평 방향 중앙 정렬
            }}
          >
            {exhibitInfoState.intro}
          </span>
        </Container>
      </React.Fragment>
    </div>
  );
};
export default ExhibitItemInfo;
