import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import InfoDisplayer from '../InfoDisplayer';

describe('Info Displayer', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  const tree = (hasWrapper = false) =>
    mount(
      <InfoDisplayer
        label="label"
        symbol="$"
        amount="10"
        hasWrapper={hasWrapper}
      />
    );

  it('should render the intial setup correctly', () => {
    expect(tree()).toMatchSnapshot();
  });

  it('should render the setup with wrapper correctly', () => {
    expect(tree(true)).toMatchSnapshot();
  });

  it('should render wrapper correctly', () => {
    expect(tree(true).exists('#infoDisplayerWrapper')).toEqual(true);
  });
});
