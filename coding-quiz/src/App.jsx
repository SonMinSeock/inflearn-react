import { useCallback, useMemo, useReducer, useRef } from 'react';
import './App.css';
import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactList';
import { reducer } from './reducers/reducer';
import { ContactDispatchContext, ContactStateContext } from './contexts/contactContext';

function App() {
  const [contacts, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  // Contact 생성 함수
  const onCreateContact = useCallback((name, contact) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        name: name,
        contact: contact,
      },
    });
  }, []);

  // Contact 삭제 함수
  const onDeleteContact = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  }, []);

  // memoization
  const memoizedDispatches = useMemo(() => {
    return { onCreateContact, onDeleteContact };
  }, []);

  return (
    <div className="App">
      <ContactStateContext.Provider value={contacts}>
        <ContactDispatchContext.Provider value={memoizedDispatches}>
          <h2>Contact List</h2>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;
