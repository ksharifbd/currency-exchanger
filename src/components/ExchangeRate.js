import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import styled from '@material-ui/core/styles/styled';
import getCurrencySymbol from '../utils/getCurrencySymbol';

const ExchangeRate = ({ from, to }) => {
  const ExchangeRateWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
  });

  return (
    <ExchangeRateWrapper mb={3}>
      <Box>
        <Box component="h2">Rate</Box>
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
    currency: PropTypes.oneOf(['USD', 'EUR', 'GBP']),
    value: PropTypes.number,
  }),
  to: PropTypes.shape({
    currency: PropTypes.oneOf(['USD', 'EUR', 'GBP']),
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
