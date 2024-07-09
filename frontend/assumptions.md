
### assumptions.md
```markdown
# Assumptions

## General Assumptions

1. **API Key Availability**:
   - The user has a valid CoinMarketCap API key for accessing cryptocurrency data.
   - The API key is stored in a `.env` file and is correctly referenced in the application.

2. **Internet Connectivity**:
   - The application assumes a stable internet connection to fetch data from the CoinMarketCap API.
   - Users will have an active internet connection while using the application.

3. **Node.js and npm**:
   - Users have Node.js and npm installed on their machines.
   - The versions of Node.js and npm meet the minimum requirements specified in the prerequisites (Node.js v14.x or higher, npm v6.x or higher).

4. **Browser Compatibility**:
   - The application is tested on modern web browsers (Chrome, Firefox, Safari, Edge).
   - Users will be using one of these supported browsers for the best experience.

## Development Assumptions

1. **Backend Proxy Server**:
   - The application uses an Express.js backend to handle CORS issues by acting as a proxy server.
   - The backend server is running locally on a different port than the frontend (default port 5000 for the backend).

2. **Data Fetching and State Management**:
   - Cryptocurrency data is fetched from the CoinMarketCap API and stored in the application's state using React's `useState` and `useEffect` hooks.
   - The fetched data is assumed to be accurate and updated regularly by the API provider.

3. **Styling and Responsiveness**:
   - The application is designed to be mobile-first responsive, ensuring a good user experience on various screen sizes.
   - CSS is used for styling, including at least one CSS-based animation for UI elements.

4. **Component Structure**:
   - The application is built using a component-based architecture with React.
   - Components are designed to be reusable and modular for ease of maintenance and scalability.

## Usage Assumptions

1. **User Interaction**:
   - Users will interact with the application by navigating through the navbar to access the homepage and converter page.
   - Users will be able to view the list of cryptocurrencies and use the converter tool without requiring additional instructions.

2. **Data Presentation**:
   - Cryptocurrency data, including price, percentage change over 24 hours, and percentage change over 7 days, will be clearly displayed.
   - Positive and negative percentage changes are indicated by green and red colors, respectively.

3. **Numbering of Cryptocurrencies**:
   - Cryptocurrencies are numbered sequentially on the homepage for easy reference.
   - This numbering is handled within the `CryptoList` component when mapping through the list of cryptocurrencies.

## Technical Assumptions

1. **Error Handling**:
   - Basic error handling is implemented for API requests, with errors logged to the console.
   - The application assumes that the CoinMarketCap API is reliable and available.

2. **Environment Variables**:
   - Environment variables are used to securely store sensitive information such as API keys.
   - The `.env` file is included in the `.gitignore` file to prevent it from being committed to version control.

## Conclusion

These assumptions outline the expectations and conditions under which the cryptocurrency tracking application was developed. They ensure that the application functions correctly given the specified requirements and constraints. Adjustments might be necessary if any of these assumptions change or do not hold true.
