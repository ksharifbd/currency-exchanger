import initialState from './initialState';
import currencyConverter from '../utils/currencyConverter';

function getExchangeRatesReducer(state = initialState.exchange_rates, action) {
  switch (action.type) {
    case 'fetch_rates_request':
      return { ...state, isFetching: true };
    case 'fetch_rates_successful':
      return {
        ...state,
        rates: [
          ...state.rates.map(rate => {
            return {
              ...rate,
              to: {
                currency: action.payload.rates,
              },
            };
          }),
          ...currencyConverter(action.payload.rates),
        ],
      };
    case 'fetch_rates_error':
      return { ...state, error: action.error.message };
    default:
      return state;
  }
}

export default getExchangeRatesReducer;
