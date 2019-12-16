import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import styled from '@material-ui/core/styles/styled';
import getCurrencySymbol from '../utils/getCurrencySymbol';
import currencies from '../constants/currencies';

const ExchangeRateWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

const ExchangeRateHeader = styled(Box)({
  textAlign: 'center',
});

const ExchangeRate = ({ from, to }) => {
  return (
    <ExchangeRateWrapper mb={3}>
      <Box>
        <ExchangeRateHeader component="h2">Rate</ExchangeRateHeader>
        <Box component="span">
          {getCurrencySymbol(from.currency)}
          {from.value} = {getCurrencySymbol(to.currency)}
          {to.value}
        </Box>
      </Box>
    </ExchangeRateWrapper>
  );
};

ExchangeRate.propTypes = {
  from: PropTypes.shape({
    currency: PropTypes.oneOf(currencies),
    value: PropTypes.number,
  }),
  to: PropTypes.shape({
    currency: PropTypes.oneOf(currencies),
    value: PropTypes.number,
  }),
};

ExchangeRate.defaultProps = {
  from: {
    currency: 'EUR',
    value: 1,
  },
  to: {
    currency: 'GBP',
    value: 1,
  },
};

export default ExchangeRate;
