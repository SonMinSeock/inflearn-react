import { useNavigate } from 'react-router';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <header>
        <h1>한입 가계부</h1>
        <div className="new_button" onClick={() => navigate('/new-transaction')}>
          + 작성하기
        </div>
      </header>
      <main className="transaction_list"></main>
    </div>
  );
}
