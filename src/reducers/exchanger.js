import initialState from './initialState';
import actions from '../constants/actions';

function ExchangerReducer(state = initialState.exchanger, action) {
  switch (action.type) {
    case actions.CONVERT_CURRENCY_FROM:
      return {
        ...state,
        currency: { ...state.currency, from: action.payload.currency },
      };
    case actions.CONVERT_CURRENCY_TO:
      return {
        ...state,
        currency: { ...state.currency, to: action.payload.currency },
      };
    default:
      return state;
  }
}

export default ExchangerReducer;
