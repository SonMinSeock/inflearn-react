import './App.css';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';

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

/**
 * 라우터 이용해서 페이지 이동하는 방법
 * 1. Link 컴포넌트 이용하는 방법
 * - Link 컴포넌트 이용하면 a태그 처럼 대체 하며, CSR 사용하고 있다.
 * - Link 컴포넌트 이용안하고 a태그로 사용하면 CSR 사용 안하기 때문에 페이지 이동할때 마다 새로고침 하게된다.
 * 2. button 요소 이용하는 방법 (useNavigate 훅 이용)
 * - 이벤트 핸들러 이용하여 특정 조건을 통해 페이지 이동하고 싶을때 사용한다.
 */

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav('/new');
  };

  return (
    <>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
