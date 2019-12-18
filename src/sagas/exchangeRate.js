import { call, put, take, race, delay } from 'redux-saga/effects';
import actions from '../constants/actions';
import getExchangeRates from '../services/getExchangeRates';

function* getExchangeRatesSaga() {
  while (true) {
    try {
      const response = yield call(getExchangeRates);

      yield put({
        type: actions.FETCH_EXCHANGE_RATES_SUCCESSFUL,
        payload: response.data,
      });

      yield delay(process.env.REACT_APP_API_POLL_INTERVAL || 10000);
    } catch (error) {
      yield put({
        type: actions.FETCH_EXCHANGE_RATES_ERROR,
        error: new Error(error.message),
      });

      yield put({
        type: actions.STOP_POLLING_TO_FETCH_EXCHANGE_RATE,
        error: new Error(error),
      });
    }
  }
}

function* watchGetExchangeRatesSaga() {
  while (true) {
    yield take(actions.FETCH_EXCHANGE_RATES_REQUEST);

    yield race([
      call(getExchangeRatesSaga),
      take(actions.STOP_POLLING_TO_FETCH_EXCHANGE_RATE),
    ]);
  }
}

export default watchGetExchangeRatesSaga;
