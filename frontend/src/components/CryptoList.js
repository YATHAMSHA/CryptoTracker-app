import React, { useEffect, useState } from 'react';
import { getCryptocurrencies } from '../api/coinMarketCapAPI';
import CryptoCard from './CryptoCard';
import '../styles/CryptoList.css';

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCryptocurrencies();
      setCryptos(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return (
    <div className="crypto-list">
      {cryptos.map((crypto, index) => (
        <CryptoCard key={crypto.id} crypto={crypto} index={index + 1} />
      ))}
    </div>
  );
};

export default CryptoList;
