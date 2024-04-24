// 이미지 라이브러리
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageList from "@mui/material/ImageList";

import Stack from "@mui/material/Stack";

import author from "../../assets/author.png";

import BootModalForAdmin from "../../libs/BootModalForAdmin";
import { useState } from "react";
import { useEffect } from "react";

// api
import { ongetAllExhibitsHandler } from "../../apis/servicehandeler/AdminApiHandler";
import AdminExhibitItem from "./AdminExhibitItem";

const AdminExhibitList = () => {
  const [modalShow, setModalShow] = useState(false); // 드랍다운
  const [mockData, setMockData] = useState([{}]); // 받는 형식이 배열 안 객체라

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

  // 전시 data 가져오기
  useEffect(() => {
    ongetAllExhibitsHandler((response) => {
      if (Array.isArray(response.data)) {
        setMockData(response.data);
      } else {
        console.error("응답 데이터가 배열이 아닙니다.");
      }
    });
  }, []);

  return (
    <>
      <Stack
        justifyContent="center" // 가로 방향으로 중앙 정렬
        alignItems="center" // 세로 방향으로 중앙 정렬
        style={{ marginTop: 50 }}
      >
        <ImageList
          sx={{ maxWidth: 1000, height: "auto", overflowY: "hidden" }}
          cols={3}
          gap={8} // 이미지 사이의 간격 설정
        >
          // todo 아이템 으로 또 빼보고 그 다음에 item.exhibit받아와보기 !!
          {mockData.map((item) => {
            return <AdminExhibitItem key={item.exhibitId} {...item} />;
          })}
        </ImageList>
      </Stack>
    </>
  );
};

export default AdminExhibitList;
