import Stack from "@mui/material/Stack";

import Button from "react-bootstrap/Button";

const AdminItem = ({ text, matchingId, setUpdateCount }) => {
  // 제안 수락/ 거절
  const AcceptPropsal = (matchingId, result) => {
    console.log("눌린 승인 버튼" + result);
    // todo api 연결하기
    // onMatchingAccDenyHandler({ matchingId, result }, () => {
    //   console.log("제안 수락/거절 성공");
    //   setUpdateCount((prev) => prev + 1);
    //   console.log("두번째 로딩");
    // });
  };
  return (
    <>
      <Stack spacing={2} direction="row">
        <span> {text}</span>
        <Button
          variant="primary"
          onClick={() => AcceptPropsal(matchingId, true)}
        >
          승인
        </Button>{" "}
        <Button
          variant="outline-dark"
          onClick={() => AcceptPropsal(matchingId, false)}
        >
          거절
        </Button>{" "}
      </Stack>
    </>
  );
};
export default AdminItem;
