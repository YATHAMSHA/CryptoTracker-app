# Setup Instructions

## Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/crypto-tracking-app.git
cd crypto-tracking-app

2. Install Frontend Dependencies
npm install

3. Install Backend Dependencies
cd backend
npm install
cd ..

4. Create and Configure .env File
Create a .env file in the root directory of your project and add your CoinMarketCap API key:
REACT_APP_CMC_API_KEY=your_coinmarketcap_api_key


Running the Application
1. Start the Backend Server
cd server
node server.js
cd ..

2. Start the Frontend Development Server
npm start

3. Open the Application
Open your browser and navigate to http://localhost:3000.


Deployment
Deploying to Heroku
1.Login to Heroku CLI
heroku login
2.Create a New Heroku App
heroku create your-app-name
3.Set Environment Variables
heroku config:set REACT_APP_CMC_API_KEY=your_coinmarketcap_api_key
4.Deploy the Application
git push heroku main


Usage Instructions
Homepage
Displays a list of cryptocurrencies with their names, symbols, current prices, and price changes over the last 24 hours and 7 days.
Each cryptocurrency is numbered for easy reference.
Converter Page
Allows users to convert from one cryptocurrency to another.
Users can select the cryptocurrencies and enter the amount to convert.

