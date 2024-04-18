import * as React from "react";

// 레이아웃
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import Button from "react-bootstrap/Button";

const Matching = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="80%">
        <Box sx={{ bgcolor: "#00000000", width: "100%" }}>
          <h2>신청현황</h2>
          <Stack
            justifyContent="center" // 가로 방향으로 중앙 정렬
            alignItems="center" // 세로 방향으로 중앙 정렬
          >
            {/* 신청현황아이템 */}
          </Stack>

          <h2>제안</h2>
          <Stack
            justifyContent="center" // 가로 방향으로 중앙 정렬
            alignItems="center" // 세로 방향으로 중앙 정렬
            direction="row" // 요소들을 가로 방향으로 배치
          >
            {/* 제안 받은 것 */}
            <Button variant="primary">수락</Button>{" "}
            <Button variant="outline-dark">거절</Button>
          </Stack>
          <Stack
            justifyContent="center" // 가로 방향으로 중앙 정렬
            alignItems="center" // 세로 방향으로 중앙 정렬
          >
            <h2>성사된 매칭</h2>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
};
export default Matching;
