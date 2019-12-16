import initialState from './initialState';
import actions from '../constants/actions';

function ExchangerReducer(state = initialState.exchanger, action) {
  switch (action.type) {
    case actions.CONVERT_CURRENCY_FROM:
      return {
        ...state,
        currency: { ...state.currency, from: action.currency },
      };
    case actions.CONVERT_CURRENCY_TO:
      return {
        ...state,
        currency: { ...state.currency, to: action.currency },
      };
    default:
      return state;
  }
}

export default ExchangerReducer;
