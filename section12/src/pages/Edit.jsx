import { replace, useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useContext, useEffect, useState } from 'react';
import { DiaryDispatchContext, DiaryStateContext } from '../App';

export default function Edit() {
  const { id } = useParams();
  const nav = useNavigate();
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState(() => {
    // 해당 일기장을 찾는 로직
    const item = data.find((item) => String(item.id) === String(id));
    // 해당 일기장 있으면 일기장 데아터로 초기 상태값으로 할당, 없으면 null로 할당
    return item ?? null;
  });

  // 삭제하기 이벤트 핸들러
  const onClickDelete = () => {
    // 윈도우 팝업창
    if (window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요!')) {
      // 일기 삭제 로직
      onDelete(id);
      nav('/', { replace: true });
    }
  };

  // 수정하기 이벤트 핸들러
  const onSubmit = (input) => {
    if (window.confirm('일기를 정말 수정할까요?')) {
      onUpdate(id, input.createdDate.getTime(), input.emotionId, input.content);
      nav('/', { replace: true });
    }
  };

  useEffect(() => {
    // 해당 일기장이 있으면 아래 있는 로직들 (해당 일기장 찾는 로직) 수행 안함.
    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.');
      // navigate 기능은 컴포넌트들이 다 마운트 하고 난뒤 수행한다. 즉 UI 다 그려져야 수행한다.
      nav('/', { replace: true });
      return;
    }
  }, [currentDiaryItem, nav]);

  return (
    <div>
      <Header
        title={'일기 수정하기'}
        leftChild={<Button text={'< 뒤로 가기'} onClick={() => nav(-1)} />}
        rightChild={<Button type={'NEGATIVE'} text={'삭제하기'} onClick={onClickDelete} />}
      />
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  );
}
