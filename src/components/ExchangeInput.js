import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import CurrencySelector from './CurrencySelector';
import CurrencyInput from './CurrencyInput';
import InfoDisplayer from './InfoDisplayer';

const ExchangeInput = ({
  selectedCurrency,
  onCurrencySelect,
  onCurrencyValueChange,
  currencySymbol,
  currencyValue,
  inputCurrencyBalance,
}) => {
  return (
    <Box>
      <Box mb={3}>
        <CurrencySelector
          selectedCurrency={selectedCurrency}
          onCurrencyChange={event => onCurrencySelect(event)}
        />
      </Box>
      <Box mb={3}>
        <CurrencyInput
          value={currencyValue}
          onCurrencyValueChange={event => onCurrencyValueChange(event)}
          currencySymbol={currencySymbol}
        />
      </Box>
      <InfoDisplayer
        label="Balance"
        amount={inputCurrencyBalance}
        symbol={currencySymbol}
      />
    </Box>
  );
};

ExchangeInput.propTypes = {
  onCurrencySelect: PropTypes.func.isRequired,
  onCurrencyValueChange: PropTypes.func.isRequired,
  currencyValue: PropTypes.string.isRequired,
  inputCurrencyBalance: PropTypes.number.isRequired,
  selectedCurrency: PropTypes.oneOf(['USD', 'GBP', 'EUR']),
  currencySymbol: PropTypes.string,
};

ExchangeInput.defaultProps = {
  selectedCurrency: 'USD',
  currencySymbol: '$',
};

export default ExchangeInput;
