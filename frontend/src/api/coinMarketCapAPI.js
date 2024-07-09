import axios from 'axios';

export const getCryptocurrencies = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/api/cryptocurrencies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cryptocurrencies:', error);
    return [];
  }
};
