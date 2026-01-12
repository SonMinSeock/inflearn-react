import './Editor.css';
export default function Editor() {
  return (
    <div className="editor">
      <input placeholder="새로운 Todo..." />
      <button>추가</button>
    </div>
  );
}
