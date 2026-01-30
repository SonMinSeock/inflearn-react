import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryStateContext } from '../App';

/**
 * useDiary 커스텀 훅
 * 그 일기가 유효한지 보장해주는 커스텀 훅이다.
 * URL에 있는 id를 기준으로 전체 일기 목록에서 해당 일기 하나를 찾아주고
 * 없으면 사용자에게 알려준 뒤 홈으로 돌려보내고
 * 있으면 그 일기 데이터를 그대로 반환한다
 */

export default function useDiary(id) {
  const data = useContext(DiaryStateContext);
  const [diary] = useState(() => {
    const item = data.find((item) => String(item.id) === String(id));
    return item ?? null;
  });
  const nav = useNavigate();

  useEffect(() => {
    if (!diary) {
      window.alert('존재하지 않는 일기입니다.');
      // navigate 기능은 컴포넌트들이 다 마운트 하고 난뒤 수행한다. 즉 UI 다 그려져야 수행한다.
      nav('/', { replace: true });
      return;
    }
  }, [diary, nav]);

  return diary;
}
