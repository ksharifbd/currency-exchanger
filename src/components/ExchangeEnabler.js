import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import CurrencySelector from './CurrencySelector';
import CurrencyInput from './CurrencyInput';

const ExchangeEnabler = ({
  selectedCurrency,
  onSelect,
  currencyValue,
  onCurrencyValueChange,
}) => (
  <Box>
    <Box mb={3}>
      <CurrencySelector
        selectedCurrency={selectedCurrency}
        onCurrencyChange={event => onSelect(event)}
      />
    </Box>
    <CurrencyInput
      currencyValue={currencyValue}
      onCurrencyValueChange={event => onCurrencyValueChange(event)}
    />
  </Box>
);

ExchangeEnabler.propTypes = {
  selectedCurrency: PropTypes.oneOf(['USD', 'GBP', 'EUR']),
  onSelect: PropTypes.func,
  currencyValue: PropTypes.string,
  onCurrencyValueChange: PropTypes.func,
};

ExchangeEnabler.defaultProps = {
  selectedCurrency: 'USD',
  onSelect: () => {},
  currencyValue: '',
  onCurrencyValueChange: () => {},
};

export default ExchangeEnabler;
