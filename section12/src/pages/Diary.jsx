import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { getStringDate } from '../util/get-string-date';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import useDiary from '../hooks/useDiary';
import Loading from '../components/Loading';
import usePageTitle from '../hooks/usePageTitle';

export default function Diary() {
  const params = useParams();
  const currentDiary = useDiary(params.id);
  const nav = useNavigate();
  // 페이지 탭 타이틀 수정
  usePageTitle(`${params.id}번 일기`);

  if (!currentDiary) {
    return <Loading />;
  }

  const title = `${getStringDate(new Date(currentDiary.createdDate))} 기록`;

  return (
    <div>
      <Header
        title={title}
        leftChild={<Button text={'< 뒤로 가기'} onClick={() => nav(-1)} />}
        rightChild={<Button text={'수정하기'} onClick={() => nav(`/edit/${params.id}`)} />}
      />
      <Viewer {...currentDiary} />
    </div>
  );
}
