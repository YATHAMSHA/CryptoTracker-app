// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// const port = 5000;

// app.use(cors());

// app.get('/api/cryptocurrencies', async (req, res) => {
//   const API_KEY = 'a5255db2-f7c1-453b-a23f-7286a7fc2cba';
//   try {
//     const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
//       headers: {
//         'X-CMC_PRO_API_KEY': API_KEY,
//       },
//       params: {
//         start: 1,
//         limit: 10,
//         convert: 'USD',
//       },
//     });
//     res.json(response.data.data);
//   } catch (error) {
//     console.error('Error fetching cryptocurrencies:', error.response ? error.response.data : error.message);
//     res.status(500).json({ error: 'Error fetching cryptocurrencies' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });



const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // Load dotenv to read .env file

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/cryptocurrencies', async (req, res) => {
  const API_KEY = process.env.API_KEY; // Access API key from environment variables
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
      },
      params: {
        start: 1,
        limit: 10,
        convert: 'USD',
      },
    });
    res.json(response.data.data);
  } catch (error) {
    console.error('Error fetching cryptocurrencies:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Error fetching cryptocurrencies' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
