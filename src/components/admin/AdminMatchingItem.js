import Form from "react-bootstrap/Form";
import Stack from "@mui/material/Stack";
import Button from "react-bootstrap/Button";

import BootModalForAdmin from "../../libs/BootModalForAdmin";
import { useState } from "react";
import { useEffect } from "react";

//?--- matchingId: 관리자가 매칭 상태 수정 및 생성 시 쓰임
const AdminMatchingItem = ({ text, matchingId, setUpdateCount }) => {
  const [modalShow, setModalShow] = useState(false); // 드랍다운 숫자 저장

  const [selectedStatus, setSelectedStatus] = useState(""); // 선택된 상태를 저장하기 위한 state

  // 드롭다운에서 선택된 값을 state에 저장
  const handleSelectChange = (event) => {
    setSelectedStatus(event.target.value);
  };
  // todo 매칭 상태 변경 api
  const updateState = (matchingId) => {
    // todo 버튼 상태 바디에 보냄
    // todo api연결 및 성공시
    setUpdateCount((prev) => prev + 1);
  };
  useEffect(() => {
    console.log(selectedStatus);
  }, [selectedStatus]);

  // todo 전시 생성하기 -> 모달 나옴
  const addExhibit = () => {
    // myposterForBusiness. js 보기
    setModalShow(true);
  };

  return (
    <>
      <Stack spacing={2} direction="row">
        <Form.Select
          aria-label="Default select example"
          value={selectedStatus} // 드롭다운의 선택된 값
          onChange={handleSelectChange} // 상태 선택 변화 처리
        >
          <option value="0">현재 상태</option>
          <option value="REQUESTWAITING">매칭수락대기중 </option>
          <option value="CANCEL">매칭취소</option>
          <option value="FINISH">매칭완료</option>
          <option value="WAITING">전시준비대기중</option>
          <option value="PREPARING">전시준비중</option>
        </Form.Select>
        <Button variant="primary" onClick={() => updateState(matchingId)}>
          수정
        </Button>{" "}
        <Button variant="outline-dark" onClick={() => addExhibit()}>
          전시데이터 생성
        </Button>{" "}
      </Stack>
      <BootModalForAdmin
        show={modalShow}
        onHide={() => setModalShow(false)}
        type={"create"}
        id={matchingId}
      />
    </>
  );
};

export default AdminMatchingItem;
