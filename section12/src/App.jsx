import './App.css';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';
import { Route, Routes } from 'react-router-dom';
/**
 * 아래 이미지들은 public 아니고 assets에 넣었을까?
 * [이유]
 * vite가 내부적으로 진행하는 이미지 최적화 설정 때문에 그렇다.
 * 이미지 최적화 할게 아니면 assets 폴더 아닌 public 폴더에 넣어도 된다.
 */
import Edit from './pages/Edit';
import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import Loading from './components/Loading';

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 생성하는 New 페이지
// 3. "/diary/:id" : 일기를 상세히 조회하는 Diary 페이지
// 4. /edit/:id : 해당 일기를 편집하는 Edit 페이지

/**
 * pathname이 위 3게 경로가 아니고 다른 경로로 요청하면 Notfound 컴포넌트를 렌더링 하고 싶으면,
 * 와일드카드인 "*" path로 설정해서 element에 Notfound 컴포넌트로 설정하면 된다.
 */

/**
 * Router 주의사항
 * Routes 안에 일반 요소로 사용 못하며, Route 컴포넌트만 사용가능하다.
 */

/**
 * 라우터 이용해서 페이지 이동하는 방법
 * 1. Link 컴포넌트 이용하는 방법
 * - Link 컴포넌트 이용하면 a태그 처럼 대체 하며, CSR 사용하고 있다.
 * - Link 컴포넌트 이용안하고 a태그로 사용하면 CSR 사용 안하기 때문에 페이지 이동할때 마다 새로고침 하게된다.
 * 2. button 요소 이용하는 방법 (useNavigate 훅 이용)
 * - 이벤트 핸들러 이용하여 특정 조건을 통해 페이지 이동하고 싶을때 사용한다.
 */

/**
 * redcuer 함수
 *
 */
function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE': {
      nextState = [action.data, ...state];
      break;
    }
    case 'UPDATE': {
      nextState = state.map((item) => (String(item.id) === String(action.data.id) ? action.data : item));
      break;
    }
    case 'DELETE': {
      nextState = state.filter((item) => String(item.id) !== String(action.data));
      break;
    }
    default:
      return state;
  }

  // 로컬스토리지 저장
  localStorage.setItem('diary', JSON.stringify(nextState));

  return nextState;
}

/**
 * Context 정의
 */
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      data: id,
    });
  };

  useEffect(() => {
    // 로컬스토리지 diary 데이터 불러오기
    const storedData = localStorage.getItem('diary');

    if (!storedData) {
      setIsLoading(false);
      return;
    }

    // json 파싱
    const parsedData = JSON.parse(storedData);

    // parsedData 배열 유무 확인
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    // id 값 설정
    let maxedId = 0;

    parsedData.forEach((item) => {
      if (Number(item.id) > maxedId) {
        maxedId = Number(item.id);
      }
    });

    idRef.current = maxedId + 1;

    dispatch({
      type: 'INIT',
      data: parsedData,
    });

    setIsLoading(false);
  }, []);

  // 로딩 중 이면 페이지 컴포넌트 렌더링 하기전에 로딩 컴포넌트 렌더링하기
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
