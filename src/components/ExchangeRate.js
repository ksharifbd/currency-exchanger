import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import styled from '@material-ui/core/styles/styled';

const ExchangeRate = ({ from, to }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'fetch_rates_request',
    });
  }, [dispatch]);

  const USDOLLAR_UNICODE = 36;
  const GBPOUND_UNICODE = 163;
  const EURO_UNICODE = 8364;

  const getCurrencyCode = currency => {
    switch (currency) {
      case 'GBP':
        return GBPOUND_UNICODE;
      case 'EURO':
        return EURO_UNICODE;
      default:
        return USDOLLAR_UNICODE;
    }
  };

  const getCurrencySign = currency => {
    return String.fromCharCode(getCurrencyCode(currency));
  };

  const ExchangeRateWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
  });

  return (
    <ExchangeRateWrapper mb={3}>
      <Box>
        <Box component="h2">Rate</Box>
        <Box component="span">
          {getCurrencySign(from.currency)}
          {from.value} = {getCurrencySign(to.currency)}
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

export default connect(state => state)(ExchangeRate);
