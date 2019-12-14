import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

const CurrencyInput = ({ currencyValue, onCurrencyValueChange }) => (
  <>
    <InputLabel htmlFor="amount">Amount</InputLabel>
    <Input
      id="amount"
      value={currencyValue}
      onChange={onCurrencyValueChange}
      startAdornment={<InputAdornment position="start">$</InputAdornment>}
    />
  </>
);

CurrencyInput.propTypes = {
  currencyValue: PropTypes.string,
  onCurrencyValueChange: PropTypes.func,
};

CurrencyInput.defaultProps = {
  currencyValue: '',
  onCurrencyValueChange: () => {},
};

export default CurrencyInput;
