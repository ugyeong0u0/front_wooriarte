import Button from "./Button";
import "../styles/Header.css";
/*
isLogin 값이 true => 로그인 ok , mypage만 보여야함
false => 비로그인 , 로그인 버튼만 보여야함 
*/
const Header = ({ isLogin }) => {
  return (
    <div>
      <header className="header">
        <div>
          <text>WOORI ARTE</text>

          <Button
            text={isLogin ? "LOGOUT" : "LOGIN"}
            isVisible={isLogin}
          ></Button>
          <Button text={"MyPage"} isVisible={isLogin}></Button>
        </div>
      </header>
    </div>
  );
};
export default Header;
