import React from 'react';
import CryptoList from '../components/CryptoList';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Cryptocurrency Tracker</h1>
      <CryptoList />
    </div>
  );
};

export default HomePage;
