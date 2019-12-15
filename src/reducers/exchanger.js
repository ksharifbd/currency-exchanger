import initialState from './initialState';

function ExchangerReducer(state = initialState.exchanger, action) {
  switch (action.type) {
    case 'convert_currency_from':
      return {
        ...state,
        currency: { ...state.currency, from: action.currency },
      };
    case 'convert_currency_to':
      return {
        ...state,
        currency: { ...state.currency, to: action.currency },
      };
    default:
      return state;
  }
}

export default ExchangerReducer;
