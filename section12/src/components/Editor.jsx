import { useState } from 'react';
import Button from './Button';
import './Editor.css';
import EmotionItem from './EmotionItem';
import { getStringDate } from '../util/get-string-date';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../util/constants';

export default function Editor({ initData, onSubmit }) {
  const [input, setInput] = useState(() => {
    if (initData) {
      return {
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      };
    } else {
      return {
        createdDate: new Date(),
        emotionId: 1,
        content: '',
      };
    }
  }); // 사용자가 입력한 데이터

  const nav = useNavigate();

  const onChangeInput = (e) => {
    // console.log(e.target.name); // 어떤 요소에 입력이 들어온건지
    // console.log(e.target.value); // 입력된 값이 무엇인지

    let name = e.target.name;
    let value = e.target.value;

    // 문자열 "2026-01-29" -> Date 객체로 변환
    if (name === 'createdDate') {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" name="createdDate" value={getStringDate(input.createdDate)} onChange={onChangeInput} />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
              onClick={() =>
                onChangeInput({
                  target: {
                    name: 'emotionId',
                    value: item.emotionId,
                  },
                })
              }
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          id={'content'}
          name={'content'}
          value={input.content}
          placeholder="오늘은 어땠나요?"
          onChange={onChangeInput}
        />
      </section>
      <section className="button_section">
        <Button text={'취소하기'} onClick={() => nav(-1)} />
        <Button type={'POSITIVE'} text={'작성완료'} onClick={onClickSubmitButton} />
      </section>
    </div>
  );
}
