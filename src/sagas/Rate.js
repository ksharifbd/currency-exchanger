import { call, put, take, race, delay } from 'redux-saga/effects';
import axios from 'axios';
import config from '../config.json';

const { API_URL } = config;

async function getExchangeRates() {
  try {
    const response = await axios.get(API_URL, {
      params: {
        app_id: '6be834745ed04a7997e7ae6b851aae7f',
        symbols: 'GBP,EUR',
        prettyprint: false,
      },
    });
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

function* getExchangeRatesSaga() {
  while (true) {
    try {
      const response = yield call(getExchangeRates);
      yield put({
        type: 'fetch_rates_successful',
        payload: response.data,
      });

      yield delay(30000000);
    } catch (error) {
      yield put({
        type: 'fetch_rates_error',
        error: new Error(error.message),
      });

      yield put({ type: 'stop_polling', error: new Error(error) });
    }
  }
}

function* watchGetExchangeRatesSaga() {
  while (true) {
    yield take('fetch_rates_request');
    yield race([call(getExchangeRatesSaga), take('stop_polling')]);
  }
}

export default watchGetExchangeRatesSaga;
