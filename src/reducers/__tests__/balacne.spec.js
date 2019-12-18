import balanceReducer from '../balance';
import actions from '../../constants/actions';

describe('Balance Reducer', () => {
  const inputState = {
    USD: 500,
    GBP: 45,
    EUR: 0,
  };

  const action = {
    type: actions.EXCHANGE_CURRENCY,
    payload: {
      USD: 500,
      GBP: 55,
      EUR: 0,
    },
  };

  const outputState = balanceReducer(inputState, action);

  it('should not mutate the input state object', () => {
    expect(Object.is(inputState, outputState)).not.toBe(true);
  });

  it('should return correct state based on input', () => {
    expect(outputState).toEqual(action.payload);
    expect(outputState).not.toEqual(inputState);
  });

  it('should return input state for non-matching actions', () => {
    expect(balanceReducer(inputState, {})).toEqual(inputState);
  });
});
