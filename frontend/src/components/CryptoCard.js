import React from 'react';
import '../styles/CryptoCard.css';

const CryptoCard = ({ crypto, index }) => {
  const { name, symbol, quote } = crypto;
  const price = quote.USD.price.toFixed(2);
  const change24h = quote.USD.percent_change_24h.toFixed(2);
  const change7d = quote.USD.percent_change_7d.toFixed(2);

  return (
    <div className="crypto-card">
      <h2>{index}. {name} ({symbol})</h2>
      <p>Price: ${price}</p>
      <p style={{ color: change24h >= 0 ? 'green' : 'red' }}>
        24h: {change24h}%
      </p>
      <p style={{ color: change7d >= 0 ? 'green' : 'red' }}>
        7d: {change7d}%
      </p>
    </div>
  );
};

export default CryptoCard;
