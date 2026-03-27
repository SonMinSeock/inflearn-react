import { useNavigate } from 'react-router';
import './Home.css';
import { TransactionStateContext } from '../contexts/context';
import TransactionItem from '../components/TransactionItem';
import { useContext } from 'react';

export default function Home() {
  const transactions = useContext(TransactionStateContext);
  const navigate = useNavigate();

  const sortedTransactions = transactions.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div className="Home">
      <header>
        <h1>한입 가계부</h1>
        <div className="new_button" onClick={() => navigate('/new-transaction')}>
          + 작성하기
        </div>
      </header>
      <main className="transaction_list">
        {sortedTransactions.map((transaction) => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))}
      </main>
    </div>
  );
}
