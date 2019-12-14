import React from 'react';
import PropTypes from 'prop-types';
import styled from '@material-ui/core/styles/styled';

const ExchangeRate = ({ from, to }) => {
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

  const ExchangeRateWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
  });

  return (
    <ExchangeRateWrapper>
      <div>
        <h2>Rate</h2>
        <span>
          {getCurrencySign(from.currency)}
          {from.value} = {getCurrencySign(to.currency)}
          {to.value}
        </span>
      </div>
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
