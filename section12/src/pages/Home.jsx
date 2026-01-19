import { useSearchParams } from 'react-router-dom';

export default function Home() {
  // 만약, 쿼리스트링 값을 받고 싶을땐, useSearchParams 훅을 이용하면 된다.
  const [params, setParams] = useSearchParams();
  // 예를 들어, /?value=hello 일때
  console.log(params.get('value'));

  return <div>Home</div>;
}
