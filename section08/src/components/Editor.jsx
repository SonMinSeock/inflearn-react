import { useRef, useState } from 'react';
import './Editor.css';
export default function Editor({ onCreate }) {
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
