export default function CurrencyInput({ currency, value, onChangeInput }) {
  return (
    <div>
      <label>{currency}:</label>
      <input type="number" value={value} onChange={(event) => onChangeInput(currency, Number(event.target.value))} />
    </div>
  );
}
