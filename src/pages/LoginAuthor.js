import Button from "../components/Button";

const LoginAuthor = () => {
  return (
    <>
      <h2>Login</h2>
      <div>
        <Button text={"개인"} isVisible={true} />
        <Button text={"사업자"} isVisible={true} />
      </div>

      <div>
        <Button text={"작가"} isVisible={true} />
        <Button text={"임대사업자"} isVisible={true} />
      </div>
    </>
  );
};
export default LoginAuthor;