import { useState, useMemo } from 'react';
import './List.css';
import TodoItem from './TodoItem';
export default function List({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilterData = () => {
    if (search.trim() === '') {
      return todos;
    }

    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLocaleLowerCase()));
  };

  const filteredTodos = getFilterData();

  /**
   * getAnalyzedData : 투두리스트 데이터 분석 함수
   * 1. 투두리스트 총 갯수 -> totalCount 변수
   * 2. 투두 완료된 총 갯수 -> doneCount 변수
   * 3. 투두 완료 안된 총 갯수 -> notDoneCount 변수
   * 4. totalCount, doneCount, notDoneCount 값을 객체로 반환
   */

  // const getAnalyzedData = () => {
  //   console.log('getAnalyzedData 호출!');
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo) => todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;

  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount,
  //   };
  // };

  /**
   * useMemo 훅
   * 1. 첫 번째 인자가 콜백 함수
   * - 콜백함수 -> 메모이제이션 작업 할 코드를 여기서 작성하고 값을 return 하면 return 한 값을 그대로 반환 해준다.
   * 2. 두 번째 인자가 deps 배열 즉 의존성 배열
   * - todos 의존성 추가하면, todos 변경될때 마다 useMemo의 콜백 호출하겠다는 의미이다.
   * - todos 조작(생성, 수정, 삭제) 할때마다 todos의 총 갯수와, 완료, 미완료 갯수를 구할려고 한다.
   */
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log('todos 분석!');
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="list">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input value={search} placeholder="검색어를 입력하세요" onChange={onChangeSearch} />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
}
