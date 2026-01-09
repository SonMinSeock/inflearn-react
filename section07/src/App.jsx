import { useState, useEffect, useRef } from 'react';
import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import Even from './components/Even';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const isMountRef = useRef(false);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  /**
   * 라이프 사이클
   * 1. 마운트 : 탄생
   * 2. 업데이트: 변화, 리렌더링
   * 3. 언마운트: 죽음
   */

  // 1. 마운트
  useEffect(() => {
    console.log('mount');
  }, []);

  // 2. 업데이트: 변화, 리렌더링
  useEffect(() => {
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }
    console.log('update');
  });

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
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
