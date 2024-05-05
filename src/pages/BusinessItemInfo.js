import React, { useState } from "react";

import images from "../util/Images";

import CustomCarousel from "../libs/CustomCarousel";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/BusinessItemInfo.css";
import { useEffect } from "react";
// api
import {
  onGetAllSpaceItemHandler,
  onGetSpaceItemInfoHandler,
  onGetSpacePhotoHandler,
} from "../apis/servicehandeler/SpaceApiHandler";
import {
  onAllAuthorProjectHandler,
  onGetAuthorItemInfoHandler,
  onGetAuthorPhotoHandler,
} from "../apis/servicehandeler/AuthorApiHandler";

import MuiDialog from "../libs/MuiDialog";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { grey } from "@mui/material/colors";
import { RiSpace } from "react-icons/ri";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous"
></link>;

const BusinessItemInfo = () => {
  const nav = useNavigate();
  const uselocation = useLocation();
  const [enableDialog, setEnableDialog] = useState(false); //  다이어로그
  // exhibitType은 mainbusiness.js에서 작가 아이템인지 공간아이템인지 보기위함
  // exhibitType이 unpage인건 매칭에서 보려고
  const { userType, posterId, exhibitsType = "unpage" } = uselocation.state; // 작가인지 공간대여자인지 신청하기 눌렀을 때 정보 가져올 api 다름

  // 사진리스트
  const [imgList, setImgList] = useState([]);

  const [projectInfo, setProjectInfo] = useState({
    projectItemId: 1,
    projectManagerId: 1,
    artistName: "",
    intro: "",
    phone: "",
    startDate: "",
    endDate: "",
    city: "",
    title: "",
  });

  const [spaceInfo, setSpaceInfo] = useState({
    spaceItemId: 1,
    spaceRentalId: 1,
    intro: "아름다운 도시의 중심에 위치한 공간입니다.",
    hostName: "홍길동",
    city: "서울",
    size: "20평",
    parking: true,
    fee: 50000,
    phone: "01012345678",
    startDate: "2024-04-22T05:23:02.924441",
    endDate: "2024-04-22T05:23:02.924441",
    createdAt: "2024-04-22T05:23:02.924441",
    title: "",
  });

  useEffect(() => {
    console.log("현재 보고있는  아이템상세보기 " + posterId);
    console.log("비즈니스 아이템상세보기 " + userType);
    if (exhibitsType === "unpage") {
      if (userType === "author") {
        onGetAuthorItemInfoHandler({ posterId }, (response) => {
          setProjectInfo({
            projectItemId: response.data.projectItemId,
            projectManagerId: response.data.projectManagerId,
            artistName: response.data.artistName,
            intro: response.data.intro,
            phone: response.data.phone,
            startDate: response.data.startDate,
            endDate: response.data.endDate,
            city: response.data.city,
            title: response.data.title,
          });
        });
        console.log("작가 사진조회"); // todo
        onGetAuthorPhotoHandler({ id: posterId }, (response) => {
          if (Array.isArray(response.data)) {
            let now = new Date();
            const newImgList = response.data.map((item) => ({
              id: now.toString, // 각 이미지에 대한 고유 ID
              previewUrl: item.url, // 미리보기 URL
              originFile: item.url, // 원본 파일 정보는 서버에서 받아올 수 없으므로 null 처리
            }));
            setImgList(newImgList);
          }
        });
      } else if (userType === "space") {
        // alert("space안" + posterId);
        onGetSpaceItemInfoHandler({ posterId }, (response) => {
          setSpaceInfo({
            spaceItemId: response.data.spaceItemId,
            spaceRentalId: response.data.spaceRentalId,
            intro: response.data.intro,
            hostName: response.data.hostName,
            city: response.data.city,
            size: response.data.size,
            parking: response.data.parking,
            fee: response.data.fee,
            phone: response.data.phone,
            startDate: response.data.startDate,
            endDate: response.data.endDate,
            createdAt: response.data.createdAt,
            title: response.data.title,
          });
          console.log("공간 정보 업데이트 성공");
        });
        console.log("공간 사진조회"); // todo
        onGetSpacePhotoHandler({ id: posterId }, (response) => {
          if (Array.isArray(response.data)) {
            let now = new Date();
            const newImgList = response.data.map((item) => ({
              id: now.toString, // 각 이미지에 대한 고유 ID
              previewUrl: item.url, // 미리보기 URL
              originFile: item.url, // 원본 파일 정보는 서버에서 받아올 수 없으므로 null 처리
            }));
            setImgList(newImgList);
          }
        });
      } else {
        console.log("비즈니스아이템 상세보기 들어온 유저 타입x");
      }
    } else {
      if (exhibitsType === "author") {
        onGetAuthorItemInfoHandler({ posterId }, (response) => {
          setProjectInfo({
            projectItemId: response.data.projectItemId,
            projectManagerId: response.data.projectManagerId,
            artistName: response.data.artistName,
            intro: response.data.intro,
            phone: response.data.phone,
            startDate: response.data.startDate,
            endDate: response.data.endDate,
            city: response.data.city,
            title: response.data.title,
          });
        });
        console.log("작가 사진조회"); // todo
        onGetAuthorPhotoHandler({ id: posterId }, (response) => {
          if (Array.isArray(response.data)) {
            let now = new Date();
            const newImgList = response.data.map((item) => ({
              id: now.toString, // 각 이미지에 대한 고유 ID
              previewUrl: item.url, // 미리보기 URL
              originFile: item.url, // 원본 파일 정보는 서버에서 받아올 수 없으므로 null 처리
            }));
            setImgList(newImgList);
          }
        });
      } else if (exhibitsType === "space") {
        onGetSpaceItemInfoHandler({ posterId }, (response) => {
          setSpaceInfo({
            spaceItemId: response.data.spaceItemId,
            spaceRentalId: response.data.spaceRentalId,
            intro: response.data.intro,
            hostName: response.data.hostName,
            city: response.data.city,
            size: response.data.size,
            parking: response.data.parking,
            fee: response.data.fee,
            phone: response.data.phone,
            startDate: response.data.startDate,
            endDate: response.data.endDate,
            createdAt: response.data.createdAt,
            title: response.data.title,
          });
          console.log("공간 정보 업데이트 성공");
        });
        console.log("공간 사진조회"); // todo
        onGetSpacePhotoHandler({ id: posterId }, (response) => {
          if (Array.isArray(response.data)) {
            let now = new Date();
            const newImgList = response.data.map((item) => ({
              id: now.toString, // 각 이미지에 대한 고유 ID
              previewUrl: item.url, // 미리보기 URL
              originFile: item.url, // 원본 파일 정보는 서버에서 받아올 수 없으므로 null 처리
            }));
            setImgList(newImgList);
          }
        });
      } else {
        console.log("비즈니스아이템 상세보기 들어온 유저 타입x");
      }
    }
  }, []);

  // 신청하기 : 어떤 작품이나 공간을 신청할것이지 선택하는 페이지가 나와야함
  const goApply = (receivedId) => {
    // 작가->작가x 공간->공간x , 자기 작품 신청 막음
    if (userType === exhibitsType) {
      setEnableDialog(true);
    } else {
      console.log("신청버튼 클릭 눌림");
      // 작가나 공간대여자 각자의 아이템 다 나오는 페이지로 가야함
      //senderId : 신청자의 작품 가져오기 위함
      // posterid는 어떤 아이템에 신청하는지
      let senderId = localStorage.getItem("userId");
      nav(`/applywithitems/${senderId}`, {
        state: {
          // 누구에게 신청하는지에 대한 값이  빠짐 ***

          // userType은 id로 찾을때 api가 나뉘어져서 필요?
          userType: userType,
          posterId: posterId,
          senderId: senderId,
          receivedId: receivedId,
        },
      });
    }
  };
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  console.log("유저 타입: " + userType);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%">
        {exhibitsType === "unpage" ? (
          userType === "author" ? (
            <div>
              <h1 style={{ marginBottom: 10, marginTop: 10 }}>
                Author: {projectInfo.artistName}
              </h1>
              <h1 style={{ marginBottom: 10, marginTop: 10 }}>
                Author: {projectInfo.title}
              </h1>
              <span style={{ marginLeft: 10, color: "gray", fontSize: "12px" }}>
                {" "}
                {projectInfo.city}
              </span>
              <span style={{ color: "gray", fontSize: "12px" }}>
                {projectInfo.startDate} ~ {projectInfo.endDate}
              </span>
            </div>
          ) : (
            <div>
              <h1 style={{ marginBottom: 10, marginTop: 10 }}>
                Rental: {spaceInfo.hostName}
              </h1>
              <h1 style={{ marginBottom: 10, marginTop: 10 }}>
                Rental: {spaceInfo.title}
              </h1>
              <span style={{ marginLeft: 10, color: "gray", fontSize: "12px" }}>
                {spaceInfo.city}
              </span>
              <span style={{ color: "gray", fontSize: "12px" }}>
                : {spaceInfo.startDate} ~ {spaceInfo.endDate}
              </span>
            </div>
          )
        ) : exhibitsType === "author" ? (
          <div>
            <h2 style={{ marginBottom: 10, marginTop: 10 }}>
              Author: {projectInfo.title}
            </h2>
            <h2 style={{ marginBottom: 10, marginTop: 10 }}>
              Author: {projectInfo.artistName}
            </h2>
            <span style={{ marginLeft: 10, color: "gray", fontSize: "12px" }}>
              {projectInfo.city}
            </span>
            <span style={{ color: "gray", fontSize: "12px" }}>
              {projectInfo.startDate} ~ {projectInfo.endDate}
            </span>
          </div>
        ) : (
          <div>
            <h2 style={{ marginBottom: 10, marginTop: 10 }}>
              Rental: {spaceInfo.hostName}
            </h2>
            <h2 style={{ marginBottom: 10, marginTop: 10 }}>
              Rental: {spaceInfo.title}
            </h2>
            <span style={{ marginLeft: 10, color: "gray", fontSize: "12px" }}>
              {spaceInfo.city}
            </span>
            <span style={{ color: "gray", fontSize: "12px" }}>
              {spaceInfo.startDate} ~ {spaceInfo.endDate}
            </span>
          </div>
        )}

        <div
          style={{
            height: "2px",
            background: "black",
            width: "100%",
            marginTop: 10,
            marginBottom: 40,
          }}
        ></div>
        <Box sx={{ width: "100%", height: " 100%", marginTop: 20 }}>
          <Stack spacing={15} alignItems="center" justifyContent="center">
            {/* <CustomCarousel isInfo={true}>
              {images.map((image, index) => {
                return (
                  <img key={index} src={image.imgURL} alt={image.imgAlt} />
                );
              })}
            </CustomCarousel> */}

            <ImageList variant="woven" cols={3} gap={5}>
              {imgList.map((item) => (
                <ImageListItem key={item.id}>
                  <img
                    srcSet={`${item.previewUrl}`}
                    src={`${item.previewUrl}`}
                    alt={item.title}
                    loading="lazy"
                    style={{ maxWidth: 250, maxHeight: 170 }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
            {exhibitsType === "unpage" ? (
              userType === "author" ? (
                <div className="info">
                  <p>연락처: {projectInfo.phone}</p>

                  <div
                    style={{
                      height: "1px",
                      background: "black",
                      width: "100%",
                      marginTop: 10,
                      marginBottom: 40,
                    }}
                  ></div>
                  <p>프로젝트 소개 </p>
                  <p> {projectInfo.intro}</p>

                  <button
                    className="applyBtn"
                    type="button"
                    class="btn btn-dark"
                    style={{
                      marginTop: 50,
                      marginBottom: 50,

                      marginLeft: 0, // 왼쪽에 정렬되도록 marginLeft 제거
                      float: "right", // 버튼을 왼쪽으로 정렬
                    }}
                    onClick={() => {
                      if (userType === "author")
                        goApply(projectInfo.projectItemId);
                      else {
                        goApply(spaceInfo.spaceItemId);
                      }
                    }}
                  >
                    신청하기
                  </button>
                </div>
              ) : (
                <div className="info">
                  <p>크기: {spaceInfo.size}</p>
                  <p>주차 가능: {spaceInfo.parking ? "예" : "아니오"}</p>
                  <p>요금: {spaceInfo.fee}원</p>
                  <p>연락처: {spaceInfo.phone}</p>
                  <div
                    style={{
                      height: "1px",
                      background: "black",
                      width: "100%",
                      marginTop: 10,
                      marginBottom: 40,
                    }}
                  ></div>
                  <p>소개</p>
                  <p>{spaceInfo.intro}</p>

                  <button
                    className="applyBtn"
                    type="button"
                    class="btn btn-dark"
                    style={{
                      marginTop: 50,
                      marginBottom: 50,

                      marginLeft: 0, // 왼쪽에 정렬되도록 marginLeft 제거
                      float: "right", // 버튼을 왼쪽으로 정렬
                    }}
                    onClick={() => {
                      if (userType === "author")
                        goApply(projectInfo.projectItemId);
                      else {
                        goApply(spaceInfo.spaceItemId);
                      }
                    }}
                  >
                    신청하기
                  </button>
                </div>
              )
            ) : exhibitsType === "author" ? (
              <div className="info">
                <p>연락처: {projectInfo.phone}</p>
                <div
                  style={{
                    height: "1px",
                    background: "black",
                    width: "100%",
                    marginTop: 10,
                    marginBottom: 40,
                  }}
                ></div>
                <p>프로젝트 소개</p>
                <p>{projectInfo.intro}</p>

                <button
                  className="applyBtn"
                  type="button"
                  style={{
                    marginTop: 50,
                    marginBottom: 50,

                    marginLeft: 0, // 왼쪽에 정렬되도록 marginLeft 제거
                    float: "right", // 버튼을 왼쪽으로 정렬
                  }}
                  class="btn btn-dark"
                  onClick={() => {
                    if (userType === "author")
                      goApply(projectInfo.projectItemId);
                    else {
                      goApply(spaceInfo.spaceItemId);
                    }
                  }}
                >
                  신청하기
                </button>
              </div>
            ) : (
              <div className="info">
                <p>크기: {spaceInfo.size}</p>
                <p>주차 가능: {spaceInfo.parking ? "예" : "아니오"}</p>
                <p>요금: {spaceInfo.fee}원</p>
                <p>연락처: {spaceInfo.phone}</p>
                <div
                  style={{
                    height: "1px",
                    background: "black",
                    width: "100%",
                    marginTop: 10,
                    marginBottom: 40,
                  }}
                ></div>
                <p>소개 </p>
                <p> {spaceInfo.intro}</p>

                <button
                  className="applyBtn"
                  type="button"
                  class="btn btn-dark"
                  style={{
                    marginTop: 50,
                    marginBottom: 50,

                    marginLeft: 0, // 왼쪽에 정렬되도록 marginLeft 제거
                    float: "right", // 버튼을 왼쪽으로 정렬
                  }}
                  onClick={() => {
                    if (userType === "author")
                      goApply(projectInfo.projectItemId);
                    else {
                      goApply(spaceInfo.spaceItemId);
                    }
                  }}
                >
                  신청하기
                </button>
              </div>
            )}

            {enableDialog && (
              <MuiDialog
                title={"알림"}
                content={`같은 ${
                  userType === "author" ? "작가" : "공간대여자"
                }끼리는 신청할 수 없습니다.`}
                result={true}
                page={"login"}
                parentClick={setEnableDialog}
              />
            )}
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
};
export default BusinessItemInfo;
