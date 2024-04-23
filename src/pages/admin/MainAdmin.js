import { useNavigate } from "react-router-dom";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AdminMatchingList from "../../components/admin/AdminMatchingList";
import AdminItmeList from "../../components/admin/AdminItemList";

// 이미지 라이브러리
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageList from "@mui/material/ImageList";

import Stack from "@mui/material/Stack";

import author from "../../assets/author.png";
import { useState } from "react";

import BootModalForAdmin from "../../libs/BootModalForAdmin";

let mockData = [];
mockData = [
  {
    id: 1,
    postName: "아이템1",
    location: "서울시 마포구",
    imageurl: author,
    createdDate: new Date("2024-04-19").getTime(),
  },
  {
    id: 2,
    postName: "아이템2",
    location: "서울시 마포구",
    imageurl: author,
    createdDate: new Date("2024-04-19").getTime(),
  },
  {
    id: 3,
    postName: "아이템3",
    location: "서울시 마포구",
    imageurl: author,
    createdDate: new Date("2024-04-19").getTime(),
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const MainAdmin = () => {
  const [modalShow, setModalShow] = useState(false); // 드랍다운 숫자 저장
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    <div
      className="parentContainer"
      style={{
        width: "100%",
        marginBottom: 40,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "100%",
          width: "100%",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            width: "150px", // Tabs 너비 고정
            minWidth: "150px", // 최소 너비 설정
          }}
        >
          <Tab label="매칭관리" {...a11yProps(0)} />
          <Tab label="아이템승인 " {...a11yProps(1)} />
          <Tab label="전시정보" {...a11yProps(2)} />
        </Tabs>

        <TabPanel
          value={value}
          index={0}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 180,
            marginTop: 10,
            height: "100%", // 필요한 높이 지정
            width: "100%", // 필요한 너비 지정
          }}
        >
          <span>매칭관리</span>
          <AdminMatchingList />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h2>아이템 승인 </h2>
          <AdminItmeList />
          {/* 개인정보 수정 */}
        </TabPanel>

        <TabPanel value={value} index={2}>
          <span>전시정보</span>
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
              {mockData.map((item) => (
                <>
                  <ImageListItem
                    key={item.id}
                    onClick={() => handleItemInfo(item.id)}
                  >
                    <img src={item.imageurl} />
                    <hr style={{ margin: "5px 0" }} />{" "}
                    <ImageListItemBar
                      title={item.postName + " " + item.location}
                      subtitle={
                        <div>
                          <span>{item.createdDate}</span>
                          <div />
                          <span>판매:</span>
                        </div>
                      }
                      position="below"
                    />
                  </ImageListItem>
                  <BootModalForAdmin
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    type={"update"}
                    id={item.id}
                  />
                </>
              ))}
            </ImageList>
          </Stack>
          {/* <BootModalForAdmin
            show={modalShow}
            onHide={() => setModalShow(false)}
            type={"create"}
            id={matchingId}
          /> */}
        </TabPanel>
      </Box>
    </div>
  );
};
export default MainAdmin;
