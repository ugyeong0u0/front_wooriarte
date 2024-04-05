import "../styles/EditText.css";
// hint 는 흐리게 보이는 text 입력
const EditText = ({ name, hint, onChange }) => {
  const handleChange = (e) => {
    // 부모 컴포넌트의 onChange 핸들러 호출
    onChange(e);
  };
  return (
    <>
      <input name={name} placeholder={hint} onChange={handleChange} />
    </>
  );
};
export default EditText;
