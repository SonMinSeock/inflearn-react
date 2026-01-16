import { useContext, useRef, useState } from 'react';
import './Editor.css';
import { TodoContext } from '../App';
export default function Editor() {
  /**
   * useContext 훅
   * Context Provider 통해 컨텍스트에 있는 데이터를 불러와서 사용하고자 한다.
   * useContext 훅을 이용해서 관련 데이터가 있는 컨텍스트를 임포트해서 인자로 받아서 컨텍스트 데이터를 봔한해준다.
   */
  const { onCreate } = useContext(TodoContext);

  const [content, setContent] = useState('');
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    // keyCode의 13값은 Enter 키 코드이다.
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content.trim() === '') {
      contentRef.current.focus();
      return;
    }

    onCreate(content);
    setContent('');
  };

  return (
    <div className="editor">
      <input
        ref={contentRef}
        value={content}
        placeholder="새로운 Todo..."
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}
