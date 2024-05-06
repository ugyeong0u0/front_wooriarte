// 이미지 라이브러리
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageList from "@mui/material/ImageList";
import author from "../../assets/author.png";

import BootModalForAdmin from "../../libs/BootModalForAdmin";
import { useState } from "react";

const AdminExhibitItem = ({
  exhibitId,
  name,
  city,
  startDate,
  endDate,
  price,
  setUpdateCount,
  url,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const handleItemInfo = (id) => {
    setModalShow(true);
  };
  const formatDate = (date) => {
    return String(date).replace(/-/g, ".");
  };

  return (
    <>
      <ImageListItem key={exhibitId} onClick={() => handleItemInfo(exhibitId)}>
        <img
          src={url}
          style={{
            width: 230,
            height: 380,
            objectFit: "cover",
          }}
        />
        <hr style={{ margin: "5px 0" }} />{" "}
        <ImageListItemBar
          title={
            <>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "30px",
                  marginBottom: 4,
                }}
              >
                {name}
              </span>
              <span style={{ float: "right", fontWeight: "bold" }}>{city}</span>{" "}
            </>
          }
          subtitle={
            <div style={{ marginTop: 5 }}>
              <span
                style={{
                  color: "gray",

                  fontSize: "10px",
                  textAlign: "left", // 왼쪽 정렬
                  display: "block", // span을 블록 요소로 만들어 줄 전체를 차지하게 함
                  width: "100%", // 너비 100%로 설정
                }}
              >
                전시기간 : {formatDate(startDate) + "~" + formatDate(endDate)}
              </span>
              <div />
              <span
                style={{
                  color: "gray",
                  marginTop: 3,
                  fontSize: "10px",
                  textAlign: "left", // 왼쪽 정렬
                  display: "block", // span을 블록 요소로 만들어 줄 전체를 차지하게 함
                  width: "100%", // 너비 100%로 설정
                }}
              >
                표 가격 :{price}원
              </span>
            </div>
          }
          position="below"
        />
      </ImageListItem>
      {modalShow && (
        <BootModalForAdmin
          show={modalShow}
          onHide={() => setModalShow(false)}
          type={"update"}
          id={exhibitId}
          setUpdateCount={setUpdateCount}
        />
      )}
    </>
  );
};

export default AdminExhibitItem;
