import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import CurrencySelector from './CurrencySelector';
import CurrencyInput from './CurrencyInput';
import InfoDisplayer from './InfoDisplayer';
import currencies from '../constants/currencies';

const ExchangeInput = ({
  selectedCurrency,
  onCurrencySelect,
  onCurrencyValueChange,
  currencySymbol,
  currencyValue,
  inputCurrencyBalance,
  hasInputError,
  inputHelperText,
}) => (
  <Box>
    <Box mb={3}>
      <CurrencySelector
        label="Select currency to convert from"
        selectedCurrency={selectedCurrency}
        onCurrencyChange={event => onCurrencySelect(event)}
      />
    </Box>
    <Box mb={3}>
      <CurrencyInput
        value={currencyValue}
        onCurrencyValueChange={event => onCurrencyValueChange(event)}
        currencySymbol={currencySymbol}
        hasError={hasInputError}
        helperText={inputHelperText}
      />
    </Box>
    <InfoDisplayer
      label="Balance"
      amount={inputCurrencyBalance}
      symbol={currencySymbol}
    />
  </Box>
);

ExchangeInput.propTypes = {
  onCurrencySelect: PropTypes.func.isRequired,
  onCurrencyValueChange: PropTypes.func.isRequired,
  currencyValue: PropTypes.string.isRequired,
  inputCurrencyBalance: PropTypes.string.isRequired,
  selectedCurrency: PropTypes.oneOf(currencies),
  currencySymbol: PropTypes.string,
  hasInputError: PropTypes.bool,
  inputHelperText: PropTypes.string,
};

ExchangeInput.defaultProps = {
  selectedCurrency: 'USD',
  currencySymbol: '$',
  hasInputError: false,
  inputHelperText: '',
};

export default ExchangeInput;
