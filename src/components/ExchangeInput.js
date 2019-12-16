/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import styled from '@material-ui/core/styles/styled';
import CurrencySelector from './CurrencySelector';
import CurrencyInput from './CurrencyInput';
import InfoDisplayer from './InfoDisplayer';

const labelStyles = {
  color: 'rgba(0, 0, 0, 0.54)',
  padding: 0,
  fontSize: '1rem',
  lineHeight: 1,
  letterSpacing: '0.00938em',
};
const ExchangeOutputSymbol = styled(Box)({
  ...labelStyles,
  display: 'inline-block',
  marginRight: '.25rem',
});
const ExchangeOutputLabel = styled(Box)({
  ...labelStyles,
  marginBottom: '.25rem',
});

const ExchangeInput = ({
  selectedCurrency,
  onSelect,
  onCurrencyValueChange,
  currencySymbol,
  value,
  inputCurrencyBalance,
}) => {
  return (
    <Box>
      <Box mb={3}>
        <CurrencySelector
          selectedCurrency={selectedCurrency}
          onCurrencyChange={event => onSelect(event)}
        />
      </Box>
      <Box mb={3}>
        <CurrencyInput
          value={value}
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
  selectedCurrency: PropTypes.oneOf(['USD', 'GBP', 'EUR']),
  onSelect: PropTypes.func,
  onCurrencyValueChange: PropTypes.func,
  currencySymbol: PropTypes.string,
};

ExchangeInput.defaultProps = {
  selectedCurrency: 'USD',
  onSelect: () => {},
  onCurrencyValueChange: () => {},
  currencySymbol: '$',
};

export default ExchangeInput;
