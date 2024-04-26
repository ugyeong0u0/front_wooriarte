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
} from "../apis/servicehandeler/SpaceApiHandler";
import {
  onAllAuthorProjectHandler,
  onGetAuthorItemInfoHandler,
} from "../apis/servicehandeler/AuthorApiHandler";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous"
></link>;

const BusinessItemInfo = () => {
  const nav = useNavigate();
  const uselocation = useLocation();
  // 포스팅올린 사람의 정보는 어느시점에서 주는건지 posterid 로? 찾는건지?
  const { userType, posterId } = uselocation.state; // 작가인지 공간대여자인지 신청하기 눌렀을 때 정보 가져올 api 다름

  const [projectInfo, setProjectInfo] = useState({
    projectItemId: 1,
    projectManagerId: 1,
    artistName: "",
    intro: "",
    phone: "",
    startDate: "",
    endDate: "",
    city: "",
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
  });

  useEffect(() => {
    console.log("현재 보고있는  아이템상세보기 " + posterId);
    console.log("비즈니스 아이템상세보기 " + userType);

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
        });
      });
    } else if (userType === "space") {
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
        });
        console.log("공간 정보 업데이트 성공");
      });
    } else {
      console.log("비즈니스아이템 상세보기 들어온 유저 타입x");
    }
  }, []);

  // 신청하기 : 어떤 작품이나 공간을 신청할것이지 선택하는 페이지가 나와야함
  const goApply = (receivedId) => {
    console.log("신청버튼 클릭 눌림");
    // 작가나 공간대여자 각자의 아이템 다 나오는 페이지로 가야함
    //senderId : 신청자의 작품 가져오기 위함
    // posterid는 어떤 아이템에 신청하는지
    let senderId = localStorage.getItem("userId");
    // todo 다이어로그로 변경?
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
  };

  console.log("유저 타입: " + userType);
  return (
    <div className="businessItemInfo">
      <div className="infoContainer">
        <CustomCarousel isInfo={true}>
          {images.map((image, index) => {
            return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
          })}
        </CustomCarousel>
        {userType === "author" ? (
          <div className="info">
            <h1>프로젝트 정보</h1>
            <p>작가 이름: {projectInfo.artistName}</p>
            <p>프로젝트 소개: {projectInfo.intro}</p>
            <p>연락처: {projectInfo.phone}</p>
            <p>시작 날짜: {projectInfo.startDate}</p>
            <p>종료 날짜: {projectInfo.endDate}</p>
            <p>도시: {projectInfo.city}</p>
          </div>
        ) : (
          <div className="info">
            <h1>공간 정보</h1>
            <p>소개: {spaceInfo.intro}</p>
            <p>호스트 이름: {spaceInfo.hostName}</p>
            <p>도시: {spaceInfo.city}</p>
            <p>크기: {spaceInfo.size}</p>
            <p>주차 가능: {spaceInfo.parking ? "예" : "아니오"}</p>
            <p>요금: {spaceInfo.fee}원</p>
            <p>연락처: {spaceInfo.phone}</p>
            <p>시작 날짜: {spaceInfo.startDate}</p>
            <p>종료 날짜: {spaceInfo.endDate}</p>
          </div>
        )}
      </div>
      <button
        className="applyBtn"
        type="button"
        class="btn btn-dark"
        onClick={() => {
          if (userType === "author") goApply(projectInfo.projectItemId);
          else {
            goApply(spaceInfo.spaceItemId);
          }
        }}
      >
        신청하기
      </button>
    </div>
  );
};
export default BusinessItemInfo;
