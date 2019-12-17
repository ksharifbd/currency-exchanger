import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import CurrencyInput from '../CurrencyInput';

describe('Currency Input', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  const mockFn = jest.fn();

  const tree = (hasError = false, helperText = '') => {
    return mount(
      <CurrencyInput
        value="test value"
        onCurrencyValueChange={mockFn}
        currencySymbol="$"
        hasError={hasError}
        helperText={helperText}
      />
    );
  };

  it('should return the default setup correctly', () => {
    expect(tree()).toMatchSnapshot();
  });

  it('should call event handler when onChange event is fired', () => {
    tree()
      .find('.MuiInputBase-input')
      .simulate('change');

    expect(mockFn).toHaveBeenCalled();
  });
});
