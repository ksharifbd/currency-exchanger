import { combineReducers } from 'redux';
import getExchangeRatesReducer from './reducers/rate';
import ExchangerReducer from './reducers/exchanger';

const rootReducer = combineReducers({
  convert: ExchangerReducer,
  exchange_rates: getExchangeRatesReducer,
});

export default rootReducer;
