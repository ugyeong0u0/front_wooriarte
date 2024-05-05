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
import AdminExhibitList from "../../components/admin/AdminExhibitList";

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
  const [modalShow, setModalShow] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className="parentContainer"
      style={{
        width: "100%",
        marginBottom: 90,
        marginTop: 50,
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
            marginLeft: 12,
            width: "170px", // Tabs 너비 고정
            minWidth: "170px", // 최소 너비 설정
            ".MuiTab-root": {
              // 모든 탭에 적용되는 기본 스타일
              color: "#000", // 탭의 기본 글자색을 검정으로 설정
              display: "flex",
            },
            ".Mui-selected": {
              // 선택된 탭에만 적용되는 스타일
              color: "black !important", // 선택된 탭의 글자색을 검정으로 설정
              fontWeight: "bold", // 글자를 굵게
            },
            ".MuiTabs-indicator": {
              // 선택된 탭을 나타내는 하단 바의 스타일
              backgroundColor: "black", // 하단 바의 색을 검정으로 설정
              display: "none", // 하단 바를 보이지 않도록 설정
            },
          }}
        >
          <Tab style={{ marginRight: 50 }} label="매칭관리" {...a11yProps(0)} />
          <Tab
            style={{ marginRight: 40 }}
            label="아이템승인 "
            {...a11yProps(1)}
          />
          <Tab style={{ marginRight: 53 }} label="전시정보" {...a11yProps(2)} />
        </Tabs>

        <TabPanel
          value={value}
          index={0}
          style={{
            display: "flex",
            flexDirection: "column",

            marginBottom: 180,

            height: "100%", // 필요한 높이 지정
            width: "100%", // 필요한 너비 지정
          }}
        >
          <h2 style={{ marginBottom: 20 }}>매칭관리</h2>
          <div />
          <AdminMatchingList />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h2 style={{ marginBottom: 20 }}>아이템 승인 </h2>
          <AdminItmeList />
          {/* 개인정보 수정 */}
        </TabPanel>

        <TabPanel value={value} index={2}>
          <h2 style={{ marginBottom: 20 }}>전시정보</h2>
          <AdminExhibitList />
        </TabPanel>
      </Box>
    </div>
  );
};
export default MainAdmin;
