import { replace, useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useContext, useEffect, useState } from 'react';
import { DiaryDispatchContext, DiaryStateContext } from '../App';
import useDiary from '../hooks/useDiary';
import Loading from '../components/Loading';

export default function Edit() {
  const { id } = useParams();
  const nav = useNavigate();
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const currentDiaryItem = useDiary(id);

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

  if (!currentDiaryItem) {
    return <Loading />;
  }

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
