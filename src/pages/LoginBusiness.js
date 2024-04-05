import Button from "../components/Button";

const LoginBusiness = () => {
  return (
    <>
      <h2>Login</h2>
      <div>
        <Button text={"작가"} isVisible={true} />
        <Button text={"공간대여자"} isVisible={true} />
      </div>
    </>
  );
};
export default LoginBusiness;
