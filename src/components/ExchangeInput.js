/* eslint-disable */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import CurrencySelector from './CurrencySelector';
import CurrencyInput from './CurrencyInput';

const ExchangeInput = ({
  selectedCurrency,
  onSelect,
  onCurrencyValueChange,
  currencySymbol,
  value,
}) => {
  return (
    <Box>
      <Box mb={3}>
        <CurrencySelector
          selectedCurrency={selectedCurrency}
          onCurrencyChange={event => onSelect(event)}
        />
      </Box>
      <CurrencyInput
        value={value}
        onCurrencyValueChange={event => onCurrencyValueChange(event)}
        currencySymbol={currencySymbol}
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

export default memo(ExchangeInput);
