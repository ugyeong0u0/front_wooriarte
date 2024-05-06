import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Exhibits from "../../components/Exhibits";
import ModifyAuthorInfo from "../../pages/mypage/ModifyAuthorInfo";
import Matching from "../../components/business/Matching";
// import MyPosterForBusiness from "../../components/business/MyPosterForBusiness";
import WithDrawalUser from "../../components/user/Withdrawal";
import { Business } from "@mui/icons-material";
import BusinessItem from "../../components/business/BusinessItem";
import BusinessItemList from "../../components/business/BusinessItemList";

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

const AuthorMyPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className="parentContainer"
      style={{
        width: "100%",

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
          justifyContent: "flex-start",
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
            marginLeft: 22, // 왼쪽에 20px 공간 추가
            "& .MuiTab-textColorSecondary": {
              // 선택된 탭의 스타일
              color: "black", // 선택된 탭의 글자 색상 변경
            },
            "&& .MuiTab-root": {
              ///탭 왼쪽정렬
              alignItems: "baseline",
            },
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "white",
            },
          }}
        >
          <Tab
            label="아이템 관리"
            {...a11yProps(0)}
            sx={{ "&.Mui-selected": { color: "black", fontWeight: "bold" } }}
          />
          <Tab
            label="매칭신청 현황"
            {...a11yProps(1)}
            sx={{ "&.Mui-selected": { color: "black", fontWeight: "bold" } }}
          />
          <Tab
            label="개인정보 수정"
            {...a11yProps(2)}
            sx={{ "&.Mui-selected": { color: "black", fontWeight: "bold" } }}
          />
          <Tab
            label="회원탈퇴"
            {...a11yProps(3)}
            sx={{ "&.Mui-selected": { color: "black", fontWeight: "bold" } }}
          />
        </Tabs>

        <TabPanel value={value} index={0}>
          {/*todo 사업자용 만들기 아이템관리  */}
          {/* <MyPosterForBusiness whatType={"author"} /> */}
          <BusinessItemList whatType={"author"} />

          {/* 개인정보 수정 */}
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 180,
            marginTop: 30,
            marginLeft: -150,
            height: "200%", // 필요한 높이 지정
            width: "100%", // 필요한 너비 지정
          }}
        >
          <ModifyAuthorInfo />
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          style={{
            display: "flex",
            flexDirection: "column",

            marginBottom: 180,

            height: "100%", // 필요한 높이 지정
            width: "100%", // 필요한 너비 지정
          }}
        >
          <Matching />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <WithDrawalUser />
        </TabPanel>
      </Box>
    </div>
  );
};
export default AuthorMyPage;
