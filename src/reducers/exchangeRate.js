import initialState from './initialState';
import currencyConverter from '../utils/currencyConverter';
import actions from '../constants/actions';

function getExchangeRatesReducer(state = initialState.exchange_rates, action) {
  switch (action.type) {
    case actions.FETCH_EXCHANGE_RATES_REQUEST:
      return { ...state, isFetching: true };
    case actions.FETCH_EXCHANGE_RATES_SUCCESSFUL:
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
        isFetching: false,
      };
    case actions.FETCH_EXCHANGE_RATES_ERROR:
      return {
        ...state,
        error: action.error.message,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default getExchangeRatesReducer;
