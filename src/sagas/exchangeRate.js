import { call, put, take, race, delay } from 'redux-saga/effects';
import axios from 'axios';
import config from '../config.json';
import actions from '../constants/actions';

const { API_URL } = config;

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
    throw new Error('Fetching exchange rate failed');
  }
}

function* getExchangeRatesSaga() {
  while (true) {
    try {
      const response = yield call(getExchangeRates);

      yield put({
        type: actions.FETCH_EXCHANGE_RATES_SUCCESSFUL,
        payload: response.data,
      });

      yield delay(30000000);
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
