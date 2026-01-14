import { useState, useRef } from 'react';
import './App.css';
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';
import Exam from './components/Exam';

const mockData = [
  { id: 0, isDone: false, content: 'React 공부하기', date: new Date().getTime() },
  { id: 1, isDone: false, content: 'TypeScript 공부하기', date: new Date().getTime() },
  { id: 2, isDone: false, content: 'NextJS 공부하기', date: new Date().getTime() },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // todos State와 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경
    setTodos(todos.map((todo) => (todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="app">
      {/* <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} /> */}
      <Exam />
    </div>
  );
}

export default App;
