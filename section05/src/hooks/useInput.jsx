import { useState } from 'react';

// 커스텀 훅 만들어보기
function useInput() {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
