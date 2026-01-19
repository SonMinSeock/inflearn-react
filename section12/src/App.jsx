import './App.css';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';
import { Route, Routes } from 'react-router-dom';

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 생성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

/**
 * pathname이 위 3게 경로가 아니고 다른 경로로 요청하면 Notfound 컴포넌트를 렌더링 하고 싶으면,
 * 와일드카드인 "*" path로 설정해서 element에 Notfound 컴포넌트로 설정하면 된다.
 */

/**
 * Router 주의사항
 * Routes 안에 일반 요소로 사용 못하며, Route 컴포넌트만 사용가능하다.
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
