// 추후 useEffect로 초기 설정하기
import { useEffect } from "react";
import image1 from "../assets/image 1.png";
import mainAdBanner from "../assets/mainAdBanner.png";
import PosterItem from "../components/PosterItem";
import "../styles/MainUser.css";

import * as React from "react";

// api
import { ongetAllExhibitsHandler } from "../apis/servicehandeler/AdminApiHandler";

// 사진
import author from "../assets/author.png";
// 레이아웃
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// 상위 3개 노출
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

// 사진움직이기
import CustomCarouselForMain from "../libs/CustomeCarouselForMain";
import { mainCarouselImage } from "../util/Images";

// 작가 사업자 로그인하러 가기 카드이미지
import ParticipateCard from "../libs/ParticipateCard";
import { cardImg } from "../util/Images";

// 전시 보이기
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import PosterForMain from "../components/PosterForMain";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Carousel } from "react-bootstrap";

import quotation from "../assets/quotation.png";
import author3 from "../assets/author3.jpg";
import gian from "../assets/gian.jpg";
import kimuj from "../assets/kimuj.jpg";
const mockData = [
  {
    id: 1,
    postName: "전시1",
    location: "서울시 마포구",
    imageurl: image1,
    createdDate: new Date("2024-04-19").getTime(),
  },
  {
    id: 2,
    postName: "전시2",
    location: "서울시 마포구",
    imageurl: image1,
    createdDate: new Date("2024-04-19").getTime(),
  },
  {
    id: 3,
    postName: "전시3",
    location: "서울시 마포구",
    imageurl: image1,
    createdDate: new Date("2024-04-19").getTime(),
  },
];
// stack 배치 사용
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
];

const images = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];

let mockData2 = [];
// 메인별 목데이터

mockData2 = [
  {
    id: 1,
    postName: "전시1",
    location: "서울시 마포구",
    imageurl: image1,
    createdDate: new Date("2024-04-19").getTime(),
  },
  {
    id: 2,
    postName: "전시2",
    location: "서울시 마포구",
    imageurl: image1,
    createdDate: new Date("2024-04-19").getTime(),
  },
  {
    id: 3,
    postName: "전시3",
    location: "서울시 마포구",
    imageurl: image1,
    createdDate: new Date("2024-04-19").getTime(),
  },
];

// 추후 무한 스크롤로 변경
const MainUser = () => {
  const [mockData, setMockData] = useState([{}]); // 받는 형식이 배열 안 객체라
  const nav = useNavigate();

  // 아이템 상세 보기 api
  const handleItemInfo = (exhibitId) => {
    console.log("exhibitId" + exhibitId);
    nav(`/exhibititeminfo/${exhibitId}`, { state: { exhibitId } });
  };

  useEffect(() => {
    ongetAllExhibitsHandler((response) => {
      if (Array.isArray(response.data)) {
        setMockData(response.data);
      } else {
        console.error("응답 데이터가 배열이 아닙니다.");
      }
    });
  }, []);

  const goWooriBank = () => {
    const url =
      "https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S02.do?cdPrdCd=102534&canvasser=88804648&utm_source=pc_google&utm_medium=card&utm_campaign=credit&utm_content=DA@%EC%B9%B4%EB%93%9C%EC%9D%98%EC%A0%95%EC%84%9D%E2%85%A1&utm_term=%EC%9A%B0%EB%A6%AC%EC%B9%B4%EB%93%9Cda&gclid=Cj0KCQjw0MexBhD3ARIsAEI3WHLGBO7mkYUjUuDa9Kp0KTFMx3_k_IenEW1FUeSCdf-hYrMlaP3oCs4aAo-gEALw_wcB/";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="100%">
          <CustomCarouselForMain>
            {mainCarouselImage.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </CustomCarouselForMain>
          <div class="gray-line" style={{ marginBottom: 10 }}></div>
        </Container>
        <Container maxWidth="80%">
          <Box sx={{ bgcolor: "#00000000", height: "100%", marginTop: 7 }}>
            {/* 추천 리스트 */}
            {/* <Stack
              justifyContent="center" // 가로 방향으로 중앙 정렬
              alignItems="center" // 세로 방향으로 중앙 정렬
              style={{ height: "100vh" }}
            >
              <ImageList
                sx={{ maxWidth: 1000, height: 500, overflowY: "hidden" }}
                cols={3}
              >
                {mockData2.map((item) => {
                  return (
                    <PosterForMain
                      key={item.id}
                      {...item}
                      date={item.createdDate}
                      whatType={"user"}
                    />
                  );
                })}
              </ImageList>
            </Stack> */}

            {/* 모든리스트 */}
            <Stack
              justifyContent="center" // 가로 방향으로 중앙 정렬
              alignItems="center" // 세로 방향으로 중앙 정렬
              style={{ marginTop: 50 }}
            >
              <ImageList
                sx={{ maxWidth: 1000, height: "auto", overflowY: "hidden" }}
                cols={4}
                gap={20} // 이미지 사이의 간격 설정
              >
                {mockData.map((item) => (
                  <ImageListItem
                    key={item.exhibitId}
                    onClick={() => handleItemInfo(item.exhibitId)}
                  >
                    <img
                      src={`${item.url}`}
                      alt={item.name}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }} // 모든 이미지가 동일한 가로 길이를 가지도록 가로 너비를 100%로 설정
                    />
                    <ImageListItemBar
                      title={item.name + " " + item.city}
                      subtitle={
                        <div>
                          <span>{item.artistName}</span>
                          <div />
                          <span>{item.startDate + "~" + item.endDate}</span>
                        </div>
                      }
                      position="below"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Stack>

            <section className="py-0" id="howitworks" style={{ marginTop: 30 }}>
              <div className="container">
                <hr className="mt-6"></hr>
                <div className="row">
                  <div className="col-12">
                    <p className="text-center"> You post, We exhibit.</p>
                    <h1 className="text-center lh-sm fs-lg-6 fs-xxl-7">
                      전시주최에 관심 있으신가요?
                    </h1>
                  </div>
                </div>
                <div className="row mt-6">
                  <div
                    className="col-12 col-md-4 d-flex flex-column align-items-center"
                    style={{ paddingRight: 80, paddingLeft: 80, marginTop: 30 }}
                  >
                    <div className="badge badge-circle bg-soft-primary flex-center">
                      {/* <div
                        className="text-primary fs-7 font-base"
                        style={{
                          color: "black",
                          fontSize: "30px",
                        }}
                      >
                        1
                      </div> */}
                    </div>
                    <h5 className="text-primary text-center mt-3">
                      사업자로 가입해보세요.
                    </h5>
                    <p className="text-center mx-xl-7">
                      사업자로 가입하여 수많은 작품과 공간을 둘러보세요.
                    </p>
                  </div>
                  <div
                    className="col-12 col-md-4 d-flex flex-column align-items-center"
                    style={{ paddingRight: 80, paddingLeft: 80, marginTop: 30 }}
                  >
                    <div className="badge badge-circle bg-soft-warning flex-center">
                      {/* <div
                        className="text-warning fs-7 font-base"
                        style={{
                          fontSize: "30px",
                        }}
                      >
                        2
                      </div> */}
                    </div>
                    <h5 className="text-primary text-center mt-3">
                      작품 혹은 공간을 소개해보세요.
                    </h5>
                    <p className="text-center mx-xl-7">
                      소개도 하고 맘에 드는 작품과 공간에 제안을 보내보세요.
                    </p>
                  </div>
                  <div
                    className="col-12 col-md-4 d-flex flex-column align-items-center"
                    style={{ paddingRight: 80, paddingLeft: 80, marginTop: 30 }}
                  >
                    <div className="badge badge-circle bg-soft-success flex-center">
                      {/* <div
                        className="text-success fs-7 font-base"
                        style={{
                          fontSize: "30px",
                        }}
                      >
                        3
                      </div> */}
                    </div>
                    <h5 className="text-primary text-center mt-3">
                      전시를 열어보세요.
                    </h5>
                    <p className="text-center mx-xl-7">
                      WOORI ATRE가 전시의 시작부터 끝을 책임져드립니다.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div class="gray-line" style={{ marginTop: 30 }}></div>

            <section
              className="pb-7 pt-5"
              id="testimonial"
              style={{ marginBottom: 30 }}
            >
              <div className="container-xxl">
                <div className="row flex-center h-100">
                  <div className="col-12">
                    <Carousel>
                      <Carousel.Item interval={10000}>
                        <div className="row h-100 align-items-center justify-content-around">
                          <div className="col-md-4 col-lg-5 col-xl-4 text-center order-1 d-none d-md-block">
                            <div className="wrapper square shadow-square-top">
                              <img
                                className="rounded-3 mt-4"
                                src={author3}
                                alt="testimonials"
                                width="325"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-xl-5 mb-4">
                            <img
                              className="img-fluid"
                              src={quotation}
                              alt="testimonials-bg"
                            />
                            <h2 className="my-5">
                              When it comes to both reliability and quality,{" "}
                              <span className="text-primary">ClickR</span> is
                              undoubtedly one of the best services out there.
                              Team was fast and responsible. 5 stars for them!
                            </h2>
                            <h6 className="text-700 fs-lg-0 mb-0">
                              Andrinna Malin
                            </h6>
                            <p className="fw-normal text-700 fs--1">
                              Designer, co-Founder at Nirvana Tech
                            </p>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item interval={5000}>
                        <div className="row h-100 align-items-center justify-content-around">
                          <div className="col-md-4 col-lg-5 col-xl-4 text-center order-1 d-none d-md-block">
                            <div className="wrapper square shadow-square-top">
                              <img
                                className="rounded-3 mt-4"
                                src={gian}
                                alt="testimonials"
                                width="325"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-xl-5 mb-4">
                            <img
                              className="img-fluid"
                              src={quotation}
                              alt="testimonials-bg"
                            />
                            <h2 className="my-5">
                              When it comes to both reliability and quality,{" "}
                              <span className="text-primary">ClickR</span> is
                              undoubtedly one of the best services out there.
                              Team was fast and responsible. 5 stars for them!
                            </h2>
                            <h6 className="text-700 fs-lg-0 mb-0">
                              Ainara Vergara,
                            </h6>
                            <p className="fw-normal text-700 fs--1">Designer</p>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item interval={3000}>
                        <div className="row h-100 align-items-center justify-content-around">
                          <div className="col-md-4 col-lg-5 col-xl-4 text-center order-1 d-none d-md-block">
                            <div className="wrapper square shadow-square-top">
                              <img
                                className="rounded-3 mt-4"
                                src={kimuj}
                                alt="testimonials"
                                width="325"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-xl-5 mb-4">
                            <img
                              className="img-fluid"
                              src={quotation}
                              alt="testimonials-bg"
                            />
                            <h2 className="my-5">
                              When it comes to both reliability and quality,{" "}
                              <span className="text-primary">ClickR</span> is
                              undoubtedly one of the best services out there.
                              Team was fast and responsible. 5 stars for them!
                            </h2>
                            <h6 className="text-700 fs-lg-0 mb-0">
                              Niek Bove,
                            </h6>
                            <p className="fw-normal text-700 fs--1">
                              Senior Developer
                            </p>
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
              </div>
            </section>

            {/* 문구배너  */}
            <img
              onClick={() => {
                goWooriBank();
              }}
              src={mainAdBanner}
              style={{
                width: "100% ",
                height: 220,
                display: "block",
                marginBottom: 20,
                marginTop: 70,
              }}
              alt="Responsive image"
            />
          </Box>
        </Container>
      </React.Fragment>

      {/* {mockData.map((item) => (
        <PosterItem
          key={item.id}
          {...item}
          date={item.createdDate}
          whatType={"user"}
          isVisible={false}
        />
      ))} */}
    </div>
  );
};
export default MainUser;
