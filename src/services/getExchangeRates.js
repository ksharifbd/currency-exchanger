import axios from 'axios';
import config from '../config.json';

const { API_URL } = config;

export const errorMessage = 'Fetching exchange rate failed';

async function getExchangeRates() {
  try {
    const response = await axios.get(API_URL, {
      params: {
        app_id: process.env.REACT_APP_OPEN_EXCHANGE_API_KEY,
        symbols: 'GBP,EUR,USD',
        prettyprint: false,
      },
    });

    return response;
  } catch (error) {
    throw new Error(errorMessage);
  }
}

export default getExchangeRates;
