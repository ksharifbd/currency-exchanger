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

const ExchangeRateContent = styled(Box)({
  textAlign: 'center',
});

const ExchangeRate = ({ from, to }) => (
  <ExchangeRateWrapper mb={3}>
    <ExchangeRateContent>
      <Box component="h2">Exchange Rate</Box>
      <Box component="span">
        {getCurrencySymbol(from.currency)}
        {from.value} = {getCurrencySymbol(to.currency)}
        {to.value}
      </Box>
    </ExchangeRateContent>
  </ExchangeRateWrapper>
);

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
