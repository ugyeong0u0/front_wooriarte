import React from "react";

import images from "../util/Images";

import CustomCarousel from "../libs/CustomCarousel";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/BusinessItemInfo.css";
// todo 예쁘게 꾸미기
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

  let senderId = 1; // 신청자 id 임의로 설정 -> 추후 local에서 가져오기

  // 신청하기 : 어떤 작품이나 공간을 신청할것이지 선택하는 페이지가 나와야함
  const goApply = () => {
    console.log("신청버튼 클릭 눌림");
    // 작가나 공간대여자 각자의 아이템 다 나오는 페이지로 가야함
    //senderId : 신청자의 작품 가져오기 위함
    // posterid는 어떤 아이템에 신청하는지
    nav(`/applywithitems/${senderId}`, {
      state: {
        // 누구에게 신청하는지에 대한 값이  빠짐 ***

        // userType은 id로 찾을때 api가 나뉘어져서 필요?
        userType: userType,
        posterId: posterId,
      },
    });
  };

  console.log("유저 타입: " + userType);
  return (
    <div className="businessItemInfo">
      <div className="infoContainer">
        <CustomCarousel>
          {images.map((image, index) => {
            return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
          })}
        </CustomCarousel>
        <div className="info">
          <div>
            <h1>건물소개</h1>
            <h2>a건물</h2>
          </div>
          <div>
            <h1>주소</h1>
            <h2>서울시 강남구</h2>
          </div>
          <div>
            <h1>면적</h1>
            <h2>10평</h2>
          </div>
          <div>
            <h1>주차 가능 여부</h1>
            <h2>가능</h2>
          </div>
          <div>
            <h1>연락처</h1>
            <h2>010-xxxx-xxxx</h2>
          </div>
          <ul>
            <li>
              <p>Autoplay</p>
            </li>
            <li>
              <p>Next and Previous Buttons</p>
            </li>
            <li>
              <p>Select a desired slide</p>
            </li>
          </ul>
          <h3>Made by rem029</h3>
        </div>
      </div>
      <button
        className="applyBtn"
        type="button"
        class="btn btn-dark"
        onClick={goApply}
      >
        신청하기
      </button>
    </div>
  );
};
export default BusinessItemInfo;
