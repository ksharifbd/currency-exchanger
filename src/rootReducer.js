import { combineReducers } from 'redux';
import getExchangeRatesReducer from './reducers/exchangeRate';
import ExchangerReducer from './reducers/exchanger';
import balanceReducer from './reducers/balance';

const rootReducer = combineReducers({
  balance: balanceReducer,
  convert: ExchangerReducer,
  exchange_rates: getExchangeRatesReducer,
});

export default rootReducer;
