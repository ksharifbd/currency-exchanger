import { combineReducers } from 'redux';
import getExchangeRatesReducer from './reducers/rate';

const rootReducer = combineReducers({
  exchange_rates: getExchangeRatesReducer,
});

export default rootReducer;
