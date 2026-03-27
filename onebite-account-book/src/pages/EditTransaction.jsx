import './EditTransaction.css';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { TransactionStateContext } from '../contexts/context';
import TransactionEditor from '../components/TransactionEditor';

export default function EditTransaction() {
  const { id } = useParams();
  const transtactions = useContext(TransactionStateContext);

  const currentTransaction = transtactions.find((transaction) => transaction.id === Number(id));

  return (
    <div className="EditTransaction">
      <header>
        <h1>기록 수정하기</h1>
      </header>
      <TransactionEditor type={'EDIT'} initData={currentTransaction} />
    </div>
  );
}
