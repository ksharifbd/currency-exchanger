function getExchangeRatesReducer(state = {}, action) {
  switch (action.type) {
    case 'fetch_rates_request':
      return { ...state, isFetching: true };
    case 'fetch_rates_successful':
      return { ...state, item: action.payload };
    case 'fetch_rates_error':
      return { ...state, error: action.error.message };
    default:
      return state;
  }
}

export default getExchangeRatesReducer;
