import { all, call } from 'redux-saga/effects';
import watchGetExchangeRatesSaga from './Rate';

function* rootSaga() {
  yield all([call(watchGetExchangeRatesSaga)]);
}

export default rootSaga;
