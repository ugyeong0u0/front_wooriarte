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

  return (
    <>
      <ImageListItem key={exhibitId} onClick={() => handleItemInfo(exhibitId)}>
        <img src={url} />
        <hr style={{ margin: "5px 0" }} />{" "}
        <ImageListItemBar
          title={
            <>
              <span style={{ fontWeight: "bold", fontSize: "30px" }}>
                {name}
              </span>
              <span style={{ float: "right", fontWeight: "bold" }}>{city}</span>{" "}
            </>
          }
          subtitle={
            <div>
              <span style={{ color: "gray" }}>
                전시기간 : {startDate + "~" + endDate}
              </span>
              <div />
              <span style={{ color: "gray" }}>표 가격 :{price}원</span>
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
