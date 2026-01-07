import './Main.css';
// jsx 주의사항
// 1. 중괄호 내부에는 표현식만 작성 가능하다. 조건문, 반복문 등 안됨.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
export default function Main() {
  const user = {
    name: 'Son',
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }

  // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
}
