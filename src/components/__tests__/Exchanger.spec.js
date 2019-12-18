import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Exchanger from '../Exchanger';

describe('Exchanger', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  const mockFn = jest.fn();

  const defaultProps = {
    currencyFromSymbol: '$',
    currencyToSymbol: '$',
    selectedCurrencyFrom: 'USD',
    selectedCurrencyTo: 'USD',
    onExchange: mockFn,
    onFromSelectChange: mockFn,
    onToSelectChange: mockFn,
    conversionRate: 5,
    inputCurrencyBalance: 10,
    outputCurrencyBalance: 50,
    isEverythingUp: false,
  };

  const tree = (props = defaultProps) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return shallow(<Exchanger {...props} />);
  };

  it('should render basic setup correctly', () => {
    expect(tree()).toMatchSnapshot();
  });

  it('should not call onSubmit callback on clicking disabled button', () => {
    tree()
      .find({ type: 'submit' })
      .simulate('click');

    expect(mockFn).not.toHaveBeenCalled();
  });
});
