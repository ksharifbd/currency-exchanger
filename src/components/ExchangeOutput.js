import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import FormHelperText from '@material-ui/core/FormHelperText';
import CurrencySelector from './CurrencySelector';
import InfoDisplayer from './InfoDisplayer';
import currencies from '../constants/currencies';
import getCurrencySymbol from '../utils/getCurrencySymbol';

const ExchangeOutput = ({
  selectedOutputCurrency,
  selectedInputCurrency,
  onCurrencySelect,
  currencySymbol,
  convertedValue,
  outputCurrencyBalance,
  outputCurrencyExchangeRate,
}) => (
  <Box>
    <Box mb={3}>
      <CurrencySelector
        selectedCurrency={selectedOutputCurrency}
        onCurrencyChange={event => onCurrencySelect(event)}
      />
    </Box>
    <Box mb={3}>
      <InfoDisplayer
        hasWrapper
        label="Amount"
        symbol={currencySymbol}
        amount={convertedValue}
      />
      <FormHelperText>{`${getCurrencySymbol(
        selectedInputCurrency
      )} 1 = ${getCurrencySymbol(selectedOutputCurrency)}
        ${outputCurrencyExchangeRate}`}</FormHelperText>
    </Box>
    <InfoDisplayer
      label="Balance"
      amount={outputCurrencyBalance}
      symbol={currencySymbol}
    />
  </Box>
);

ExchangeOutput.propTypes = {
  selectedOutputCurrency: PropTypes.oneOf(currencies),
  selectedInputCurrency: PropTypes.oneOf(currencies),
  onCurrencySelect: PropTypes.func.isRequired,
  currencySymbol: PropTypes.string,
  convertedValue: PropTypes.string.isRequired,
  outputCurrencyBalance: PropTypes.string.isRequired,
  outputCurrencyExchangeRate: PropTypes.string.isRequired,
};

ExchangeOutput.defaultProps = {
  selectedOutputCurrency: 'GBP',
  selectedInputCurrency: 'USD',
  currencySymbol: '$',
};

export default ExchangeOutput;
