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
}) => {
  const [modalShow, setModalShow] = useState(false);
  const handleItemInfo = (id) => {
    // todo 모달 수정
    // nav(`/authoredititem/${id}`, {
    //   state: {
    //     posterId: id,
    //     isEdit: true,
    //   },
    // });

    setModalShow(true);
  };

  return (
    <>
      <ImageListItem key={exhibitId} onClick={() => handleItemInfo(exhibitId)}>
        <img src={author} />
        <hr style={{ margin: "5px 0" }} />{" "}
        <ImageListItemBar
          title={name + " " + city + exhibitId}
          subtitle={
            <div>
              <span>{startDate + "~" + endDate}</span>
              <div />
              <span>판매:{price}</span>
            </div>
          }
          position="below"
        />
      </ImageListItem>
      <BootModalForAdmin
        show={modalShow}
        onHide={() => setModalShow(false)}
        type={"update"}
        id={exhibitId}
      />
    </>
  );
};

export default AdminExhibitItem;
