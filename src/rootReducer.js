import { combineReducers } from 'redux';
import getExchangeRatesReducer from './reducers/rate';

const rootReducer = combineReducers({
  exchangRates: getExchangeRatesReducer,
});

export default rootReducer;
