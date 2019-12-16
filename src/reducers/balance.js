import initialState from './initialState';
import actions from '../constants/actions';

function balanceReducer(state = initialState.balance, action) {
  if (action.type === actions.EXCHANGE_CURRENCY) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return state;
}

export default balanceReducer;
