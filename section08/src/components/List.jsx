import { useState } from 'react';
import './List.css';
import TodoItem from './TodoItem';
export default function List({ todos, onUpdate }) {
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

  return (
    <div className="list">
      <h4>Todo List 🌱</h4>
      <input value={search} placeholder="검색어를 입력하세요" onChange={onChangeSearch} />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} />;
        })}
      </div>
    </div>
  );
}
