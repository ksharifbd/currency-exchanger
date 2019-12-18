import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import ExchangeRate from '../ExchangeRate';

describe('Exchange Rate', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  const tree = (from, to) => {
    return mount(<ExchangeRate from={from} to={to} />);
  };

  it('should return the default setup correctly', () => {
    expect(tree()).toMatchSnapshot();
  });

  it('should render with correct symbol', () => {
    expect(
      tree({ currency: 'USD', value: 1 })
        .find('span')
        .text()
    ).toEqual(expect.stringContaining('$'));
  });
});
