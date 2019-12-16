import { all, call } from 'redux-saga/effects';
import watchGetExchangeRatesSaga from './exchangeRate';

function* rootSaga() {
  yield all([call(watchGetExchangeRatesSaga)]);
}

export default rootSaga;
