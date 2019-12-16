import initialState from './initialState';

function balanceReducer(state = initialState.balance, action) {
  if (action.type === 'exchange_currency') {
    return {
      ...state,
      ...action.payload,
    };
  }

  return state;
}

export default balanceReducer;
