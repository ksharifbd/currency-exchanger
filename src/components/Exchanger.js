import React from 'react';
import Box from '@material-ui/core/Box';
import styled from '@material-ui/core/styles/styled';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ExchangeEnabler from './ExchangeEnabler';

const Exchanger = () => {
  const ExchangerWrapper = styled(Box)({
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  });

  return (
    <ExchangerWrapper>
      <ExchangeEnabler />
      <ArrowRightAltIcon />
      <ExchangeEnabler />
    </ExchangerWrapper>
  );
};

export default Exchanger;
