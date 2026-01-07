export default function Button({ children, text, color = 'black' }) {
  const onClickButton = (e) => {
    console.log(e); // 합성 이벤트 객체
    console.log(text);
  };
  return (
    <button style={{ color: color }} onClick={onClickButton}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
}
