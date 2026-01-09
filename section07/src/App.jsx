import { useState, useEffect } from 'react';
import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const onClickButton = (value) => {
    setCount(count + value);
  };

  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]);
  // 배열이 의존성 배열 -> deps

  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
