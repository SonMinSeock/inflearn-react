// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState, useRef } from 'react';

// let count = 0; // 권장 안함!

export default function Register() {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    // count++;
    console.log(countRef.current);
    // console.log(count);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    // 제출하기 전에 검수 작업 할려고한다.
    // 사용자 입력 값 유무 확인
    if (input.name === '') {
      // 이름 입력 하지않으면 해당 입력창 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={'이름'} />
      </div>
      <div>
        <input type="date" name="birth" value={input.birth} onChange={onChange} />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value={''}></option>
          <option value={'kr'}>한국</option>
          <option value={'us'}>미국</option>
          <option value={'uk'}>영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
}
