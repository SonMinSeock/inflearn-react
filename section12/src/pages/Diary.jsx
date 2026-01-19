import { useParams, useLocation } from 'react-router-dom';

export default function Diary() {
  // 라우터에 정의한 params를 받고 싶을때, useParams 훅을 이용하여 params 객체를 반환해준다.
  const params = useParams();

  return <div>{params.id}번 일기입니다!</div>;
}
