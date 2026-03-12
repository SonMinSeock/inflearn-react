import { useState } from 'react';
import CurrencyInput from './CurrencyInput';
import { EXCHANGE_RATE } from '../constants/constant';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState({
    krw: 0,
    usd: 0,
  });

  const onChangeInput = (currency, value) => {
    if (currency === 'krw') {
      setAmount({
        krw: value,
        usd: value / EXCHANGE_RATE,
      });
    } else {
      setAmount({
        krw: value * EXCHANGE_RATE,
        usd: value,
      });
    }
  };

  return (
    <div>
      {Object.keys(amount).map((currency) => (
        <CurrencyInput key={currency} currency={currency} value={amount[currency]} onChangeInput={onChangeInput} />
      ))}
    </div>
  );
}
