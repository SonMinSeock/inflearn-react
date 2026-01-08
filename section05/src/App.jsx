import './App.css';
import HookExam from './components/HookExam';

// 리액트 컴포넌트 리렌더링 조건 (불필요한 리렌더링 방지할려면 아래 조건 확인 해야한다.)
// 1. state
// 2. props
// 3. 부모 컴포넌트 리렌더링 했을때

function App() {
  return (
    <>
      <HookExam />
    </>
  );
}

export default App;
