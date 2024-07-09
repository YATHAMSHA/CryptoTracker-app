import React, { useEffect, useState } from 'react';
import { getCryptocurrencies } from '../api/coinMarketCapAPI';
import Converter from '../components/Converter';
import '../styles/ConverterPage.css';

const ConverterPage = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCryptocurrencies();
      setCryptos(data);
    };
    fetchData();
  }, []);

  return (
    <div className="converter-page">
      <h1>Cryptocurrency Converter</h1>
      {cryptos.length > 0 ? <Converter cryptos={cryptos} /> : <div>Loading...</div>}
    </div>
  );
};

export default ConverterPage;
