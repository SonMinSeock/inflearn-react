export default function Controller({ onClickButton }) {
  const onClick = (e) => {
    onClickButton(+e.currentTarget.dataset.value);
  };

  return (
    <div>
      <button onClick={onClick} data-value={-1}>
        -1
      </button>
      <button onClick={onClick} data-value={-10}>
        -10
      </button>
      <button onClick={onClick} data-value={-100}>
        -100
      </button>
      <button onClick={onClick} data-value={100}>
        +100
      </button>
      <button onClick={onClick} data-value={10}>
        +10
      </button>
      <button onClick={onClick} data-value={1}>
        +1
      </button>
    </div>
  );
}
