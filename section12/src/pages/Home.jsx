import { useSearchParams } from 'react-router-dom';

export default function Home() {
  const [params, setParams] = useSearchParams();

  return <div>Home</div>;
}
