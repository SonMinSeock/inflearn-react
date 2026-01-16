import { useRef, useReducer, useCallback, createContext, useMemo } from 'react';
import './App.css';
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';

const mockData = [
  { id: 0, isDone: false, content: 'React 공부하기', date: new Date().getTime() },
  { id: 1, isDone: false, content: 'TypeScript 공부하기', date: new Date().getTime() },
  { id: 2, isDone: false, content: 'NextJS 공부하기', date: new Date().getTime() },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) => (item.id === action.targetId ? { ...item, isDone: !item.isDone } : item));
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

// 투두리스트의 컨텍스트 만들어보기
// 1. 상태 변경 될수 있는 컨텍스트 -> TodoStateContext
// 2. 상태 변경 안하는거 컨텍스트 -> TodoDispatchContext
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  /**
   * onCreate, onUpdate, onDelete 함수가 리렌더링 할때마다 함수를 다시 만든다. 즉 다른 주소값으로 저장되는거다.
   * onCreate, onUpdate, onDelete 함수를 초반에만 생성하고 리렌더링 할때 다시 생성 안하도록 하고 싶다.
   * useCallback 훅 이용하면 된다.
   */

  // const onCreate = (content) => {
  //   dispatch({
  //     type: 'CREATE',
  //     data: {
  //       id: idRef.current++,
  //       isDone: false,
  //       content: content,
  //       date: new Date().getTime(),
  //     },
  //   });
  // };

  // const onUpdate = (targetId) => {
  //   dispatch({
  //     type: 'UPDATE',
  //     targetId: targetId,
  //   });
  // };

  // const onDelete = (targetId) => {
  //   dispatch({
  //     type: 'DELETE',
  //     targetId: targetId,
  //   });
  // };

  // 마운트 할때만 함수 생성하고자 한다. deps를 빈 deps로 하면 된다.
  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  }, []);

  // onCreate, onUpdate, onDelete 메서드들로 이루어진 객체를 memoized 하기
  // 이런 이유로 useMemo 훅 이용했다.
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="app">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
      {/* <Exam /> */}
    </div>
  );
}

export default App;
