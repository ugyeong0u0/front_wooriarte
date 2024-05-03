import { grey } from "@mui/material/colors";
import "../styles/Footer.css";

const CuFooter = () => {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "black",
        padding: 20,
        textAlign: "left",
      }}
    >
      <span style={{ fontSize: 10, color: grey }}>
        서울 마포구 월드컵북로 434 상암 IT Tower
        <div />© 2024 WOORI ARTE. All Rights Reserved. Design by WOORI FISA
      </span>
    </div>
  );
};
export default CuFooter;
