import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Editor from '../components/Editor';
import Header from '../components/Header';
import { useContext, useEffect } from 'react';
import { DiaryDispatchContext } from '../App';
import usePageTitle from '../hooks/usePageTitle';

export default function New() {
  const nav = useNavigate(); // nav(-1) 호출 하면 뒤로가기로 수헹한다.
  const { onCreate } = useContext(DiaryDispatchContext);
  // 페이지 탭 타이틀 수정
  usePageTitle('새 일기 쓰기');

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    // 홈 화면 리다이렉트, 두 번째 인자에 replace true로 설정하면 뒤로가기 방지해준다.
    nav('/', { replace: true });
  };

  return (
    <div>
      <Header title={'새 일기 쓰기'} leftChild={<Button text={'< 뒤로 가기'} onClick={() => nav(-1)} />} />
      <Editor onSubmit={onSubmit} />
    </div>
  );
}
