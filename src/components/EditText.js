import "../styles/EditText.css";
// hint 는 흐리게 보이는 text 입력
const EditText = ({ hint }) => {
  return (
    <>
      <input placeholder={hint} />
    </>
  );
};
export default EditText;
