import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import "../styles/ExhibitItemInfo.css";
import { useLocation, useParams } from "react-router-dom";
import image1 from "../assets/image 1.png";
import { useNavigate } from "react-router-dom";
import CustomCarousel from "../libs/CustomCarousel";

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
    urls: [],
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
        <Container
          maxWidth="80%"
          style={{
            marginTop: 30,
            marginLeft: 229, 
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Stack direction="row" spacing={10}>
          <div>
          <CustomCarousel isInfo={true}>
            {exhibitInfoState.urls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Image ${index}`}
                style={{
                  width: 405,
                  height: 576,
                  objectFit: "cover",
                }}
              />
            ))}
          </CustomCarousel>
            
            <img
              src={exhibitInfoState.urls[0]}
              style={{ height: 480, width: 337.5, objectFit: 'cover' }}
            />
          </div>

            <Stack
              direction="col"
              spacing={0}
              style={{ alignItems: "flex-start", marginRight: 10 }}
            >
              <div className="exhibitInfoContainer">
                <div>
                  <h1 style={{ fontSize: 36, fontWeight: 'bold' }}>{exhibitInfoState.name}</h1>
                </div> 
                {/* <br></br>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="selector-item1">
                  <div className="label">작가이름</div>
                </div>
                <span className="value" style={{ marginLeft: '10px' }}>{exhibitInfoState.artistName}</span>
                </div>
                <br></br>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="selector-item2">
                  <div className="label">주최자</div>
                </div>
                  <span className="value" style={{ marginLeft: '10px' }}>{exhibitInfoState.hostName}</span>
                </div> */}
                <br></br>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="selector-item3">
                  <div className="label">관람장소</div>
                </div>
                  <span className="value" style={{ marginLeft: '15px' }}>{exhibitInfoState.address}</span>
                </div>
                <br></br>
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap', minWidth: 0, justifyContent: 'flex-start' }}>
                <div className="selector-item3">
                  <div className="label">관람기간 </div>
                </div>
                <span className="value" style={{ marginLeft: '15px', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                    {exhibitInfoState.startDate +
                      "~" +
                      exhibitInfoState.endDate}
                  </span>
                </div>
                <br></br>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="selector-item3">
                  <div className="label">관람료 </div>
                </div>
                  <span className="value" style={{ marginLeft: '15px' }}>{exhibitInfoState.price}원</span>
                </div>
                <br></br>
                <div>
                  {/* <div style={{ marginBottom: 20 }}>
                    <span>총 결제 금액 : </span>
                    <span>
                      {ticketNumber}개 x {exhibitInfoState.price} ={totalPrice}
                      원
                    </span>
                  </div>
                  <div class="gray-line" style={{ maxWidth: 40, marginTop: 100 }}></div>
                    <h2 style={{ marginTop: 20 }}>전시 소개 </h2>
                  <div class="gray-line" style={{ maxWidth: 40 }}></div> */}
                  <div
                    style={{
                      fontSize: 15,
                      marginBottom: 10,
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      maxWidth: "calc(100% - 600px)", // `header-right-section`과 버튼들이 차지하는 공간을 고려하여 조정
                    }}
                  >
                    {exhibitInfoState.intro}
                  </div>
                  <br></br>
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
                    <Payment
                    exhibitId={exhibitId}
                    ticketNumber={ticketNumber}
                    ></Payment>
                  </Stack>
                </div>
              </div>
            </Stack>
          </Stack>

          {/* 구분선 */}
        </Container>
      </React.Fragment>
    </div>
  );
};
export default ExhibitItemInfo;
