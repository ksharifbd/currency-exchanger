import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import CurrencySelector from './CurrencySelector';
import InfoDisplayer from './InfoDisplayer';
import currencies from '../constants/currencies';

const ExchangeOutput = ({
  selectedCurrency,
  onCurrencySelect,
  currencySymbol,
  currencyValue,
  outputCurrencyBalance,
}) => (
  <Box>
    <Box mb={3}>
      <CurrencySelector
        selectedCurrency={selectedCurrency}
        onCurrencyChange={event => onCurrencySelect(event)}
      />
    </Box>
    <Box mb={3}>
      <InfoDisplayer
        hasWrapper
        label="Amount"
        symbol={currencySymbol}
        amount={currencyValue}
      />
    </Box>
    <InfoDisplayer
      label="Balance"
      amount={outputCurrencyBalance}
      symbol={currencySymbol}
    />
  </Box>
);

ExchangeOutput.propTypes = {
  selectedCurrency: PropTypes.oneOf(currencies),
  onCurrencySelect: PropTypes.func.isRequired,
  currencySymbol: PropTypes.string,
  currencyValue: PropTypes.string.isRequired,
  outputCurrencyBalance: PropTypes.string.isRequired,
};

ExchangeOutput.defaultProps = {
  selectedCurrency: 'USD',
  currencySymbol: '$',
};

export default ExchangeOutput;
