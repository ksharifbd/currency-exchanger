import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import CurrencySelector from '../CurrencySelector';

describe('Currency Selector', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  const mockFn = jest.fn();

  const tree = () => mount(<CurrencySelector onCurrencyChange={mockFn} />);

  it('should render the intial setup correctly', () => {
    expect(tree()).toMatchSnapshot();
  });
});
