# Cryptocurrency Tracking Application

## Introduction

This is a cryptocurrency tracking application built using React. The application is designed to be a Single Page Application (SPA) and is mobile-first responsive. It fetches real-time cryptocurrency data from the CoinMarketCap API and displays it on the homepage. The application also features a cryptocurrency converter page.

## Features

- **Homepage**:
  - Displays a list of cryptocurrencies with their logos.
  - Shows the current traded value per coin.
  - Indicates the net rise/fall in prices over the last 24 hours and 7 days with appropriate coloring.
  - Cryptocurrencies are numbered sequentially for easy reference.
- **CryptoConverter Page**:
  - Allows users to convert from one cryptocurrency to another.
- **CSS-based Animation**:
  - Includes at least one CSS-based animation for UI elements.

## Architecture

The application is structured into a React frontend and an Express.js backend. The frontend is responsible for the user interface and interaction, while the backend handles API requests to avoid CORS issues.

### Frontend

- **React**: Used for building the user interface.
- **Axios**: Used for making API requests to the backend.
- **CSS**: Used for styling and responsiveness, including animations.

### Backend

- **Express.js**: Used for creating the backend server.
- **CORS Handling**: The backend acts as a proxy server to handle CORS issues when making requests to the CoinMarketCap API.

## Conclusion

This cryptocurrency tracking application provides real-time data on cryptocurrencies and includes a converter feature. The architecture is designed to be scalable and maintainable, using React for the frontend and Express.js for the backend to handle CORS and security. The mobile-first responsive design ensures accessibility across different devices.
