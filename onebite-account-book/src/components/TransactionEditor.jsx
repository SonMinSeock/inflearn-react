import './TransactionEditor.css';
import { useContext, useState } from 'react';
import { TransactionDispatchContext } from '../contexts/context';
import { useNavigate } from 'react-router';
import { CATEGORIES } from '../lib/constants';

export default function TransactionEditor({ type, initData }) {
  const { onCreateTransaction, onUpdateTransaction } = useContext(TransactionDispatchContext);
  const navigate = useNavigate();

  const [input, setInput] = useState(() => {
    if (initData) {
      return {
        ...initData,
        date: new Date(initData.date).toISOString().slice(0, 10),
      };
    }

    return {
      name: '',
      amount: '',
      type: 'expense',
      category: CATEGORIES[0],
      date: new Date().toISOString().slice(0, 10),
    };
  });

  const onChange = (event) => {
    const { name, value } = event.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    if (!input.name.trim() || !input.amount.trim() || !input.category.trim() || !input.date) {
      return;
    }
    if (type === 'CREATE') {
      onCreateTransaction(input.name, input.amount, input.type, input.category, input.date);
    } else {
      onUpdateTransaction(initData.id, input.name, input.amount, input.type, input.category, input.date);
    }
    navigate('/', { replace: true });
  };

  const onCancel = () => navigate(-1);

  return (
    <div className="TransactionEditor">
      <div>
        <div className="description">분류</div>
        <select name="type" value={input.type} onChange={onChange}>
          <option value="expense">지출</option>
          <option value="income">수입</option>
        </select>
      </div>

      <div>
        <div className="description">지출/수입 이름</div>
        <input
          type="text"
          name="name"
          placeholder="지출 & 수입 이름을 입력하세요 ..."
          value={input.name}
          onChange={onChange}
        />
      </div>

      <div>
        <div className="description">지출/수입 금액</div>
        <input type="number" name="amount" placeholder="금액을 입력하세요" value={input.amount} onChange={onChange} />
      </div>

      <div>
        <div className="description">카테고리</div>
        <select name="category" value={input.category} onChange={onChange}>
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <div className="description">날짜</div>
        <input type="date" name="date" value={input.date} onChange={onChange} />
      </div>

      <div className="button_container">
        <button className="submit_button" onClick={onSubmit}>
          저장
        </button>
        <button className="cancel_button" onClick={onCancel}>
          취소
        </button>
      </div>
    </div>
  );
}
