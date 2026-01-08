import useInput from '../hooks/useInput';

// 3가지 Hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부, 반복문으로 호출될 수는 없다.
// 3. 나만의 커스텀 훅을 만들수 있다.

// const state = useState(); // X

export default function HookExam() {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  //   if (true) {
  //     const state = useState();
  //   }

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
}
