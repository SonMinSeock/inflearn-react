import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import NewTransaction from './pages/NewTransaction';
import EditTransaction from './pages/EditTransaction';
import { useCallback, useMemo, useReducer, useRef } from 'react';
import { reducer } from './reducers/reducer';
import { MOCK_DATA } from './lib/constants';
import { TransactionStateContext, TransactionDispatchContext } from './contexts/context';

function App() {
  const [transactions, dispatch] = useReducer(reducer, MOCK_DATA);
  const idRef = useRef(MOCK_DATA.length);

  const onCreateTransaction = useCallback((name, amount, type, category, date) => {
    dispatch({
      type: 'CREATE',
      data: { id: idRef.current++, name, amount, type, category, date },
    });
  }, []);

  const onUpdateTransaction = useCallback((id, name, amount, type, category, date) => {
    dispatch({
      type: 'UPDATE',
      data: { id, name, amount, type, category, date },
    });
  }, []);

  const onDeleteTransaction = useCallback((id) => {
    dispatch({ type: 'DELETE', id });
  }, []);

  const transactionActions = useMemo(
    () => ({
      onCreateTransaction,
      onUpdateTransaction,
      onDeleteTransaction,
    }),
    [onCreateTransaction, onUpdateTransaction, onDeleteTransaction],
  );

  return (
    <>
      <TransactionStateContext.Provider value={transactions}>
        <TransactionDispatchContext.Provider value={transactionActions}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-transaction" element={<NewTransaction />} />
            <Route path="/edit-transaction/:id" element={<EditTransaction />} />
          </Routes>
        </TransactionDispatchContext.Provider>
      </TransactionStateContext.Provider>
    </>
  );
}

export default App;
