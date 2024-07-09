import React, { useState } from 'react';
import '../styles/Converter.css';

const Converter = ({ cryptos }) => {
  const [fromCrypto, setFromCrypto] = useState('BTC');
  const [toCrypto, setToCrypto] = useState('ETH');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    const fromCryptoData = cryptos.find(crypto => crypto.symbol === fromCrypto);
    const toCryptoData = cryptos.find(crypto => crypto.symbol === toCrypto);
    const fromPrice = fromCryptoData.quote.USD.price;
    const toPrice = toCryptoData.quote.USD.price;
    const conversionResult = (amount * fromPrice) / toPrice;
    setResult(conversionResult);
  };

  return (
    <div className="converter">
      <div>
        <label className='from'>
          From:
          <select className='select1' value={fromCrypto} onChange={(e) => setFromCrypto(e.target.value)}>
            {cryptos.map((crypto) => (
              <option key={crypto.id} value={crypto.symbol}>{crypto.name}</option>
            ))}
          </select>
        </label>
      </div>
      <div className='todiv'>
        <label className='to'>
          To:
          <select className='select2' value={toCrypto} onChange={(e) => setToCrypto(e.target.value)}>
            {cryptos.map((crypto) => (
              <option key={crypto.id} value={crypto.symbol}>{crypto.name}</option>
            ))}
          </select>
        </label>
      </div>
      <div className='amountdiv'>
        <label className='amount'>
          Amount:
          <input className='input' type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
      </div>
      <button className='button' onClick={handleConvert}>Convert</button>
      {result && <div className='result'>Result: {result} {toCrypto}</div>}
    </div>
  );
};

export default Converter;