import './App.css';
import CurrencyConverter from './components/CurrencyConverter';
import CurrencyInput from './components/CurrencyInput';

function App() {
  return (
    <div>
      <h1>환율 변환기 (KRW-USD)</h1>
      <CurrencyConverter />
    </div>
  );
}

export default App;
