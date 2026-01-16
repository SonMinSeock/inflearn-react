import { memo, useContext } from 'react';
import './TodoItem.css';
import { TodoContext } from '../App';
function TodoItem({ id, isDone, content, date }) {
  const { onUpdate, onDelete } = useContext(TodoContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="todoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
}

/**
 * memo 함수에는 두 번째 콜백 함수가 있다.
 * 콜백 반환 값에 따라서 Props가 바뀌었는지 판단 가능하다.
 * return true -> Props가 바꾸지 않았다고 판단 -> 리렌더링 X
 * return false -> Props가 바꿨다고 판단 -> 리렌더링 O
 */

// HOC -> 고차 컴포넌트
// export default memo(TodoItem, (prevProps, nextProps) => {
//   /**
//    * 이전 props와 현재 props의 id, isDone, content, date 변경되었는지 비교하고 return boolean 값으로 반환 하면된다.
//    */
//   // if (prevProps.id !== nextProps.id) return false;
//   // if (prevProps.content !== nextProps.content) return false;
//   // if (prevProps.isDone !== nextProps.isDone) return false;
//   // if (prevProps.date !== nextProps.date) return false;

//   // return true;

//   if (
//     prevProps.id !== nextProps.id ||
//     prevProps.content !== nextProps.content ||
//     prevProps.isDone !== nextProps.isDone ||
//     prevProps.date !== nextProps.date
//   ) {
//     return false;
//   } else {
//     return true;
//   }
// });

export default memo(TodoItem);
