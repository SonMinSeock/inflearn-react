// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState } from 'react';

export default function ReactComponent() {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  //   const onChangeName = (e) => {
  //     setInput({
  //       ...input,
  //       name: e.target.value,
  //     });
  //   };

  //   const onChangeBirth = (e) => {
  //     setInput({
  //       ...input,
  //       birth: e.target.value,
  //     });
  //   };

  //   const onChangeCountry = (e) => {
  //     setInput({
  //       ...input,
  //       country: e.target.value,
  //     });
  //   };

  //   const onChangeBio = (e) => {
  //     setInput({
  //       ...input,
  //       bio: e.target.value,
  //     });
  //   };

  console.log(input);

  return (
    <div>
      <div>
        <input name="name" value={input.name} onChange={onChange} placeholder={'이름'} />
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
    </div>
  );
}
