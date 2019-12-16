import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';

const CurrencyInput = ({
  value,
  onCurrencyValueChange,
  currencySymbol,
  hasError,
  helperText,
}) => (
  <>
    <InputLabel htmlFor="amount">Amount</InputLabel>
    <Input
      id="amount"
      value={value}
      onChange={onCurrencyValueChange}
      error={hasError}
      startAdornment={
        <InputAdornment position="start">{currencySymbol}</InputAdornment>
      }
    />
    <FormHelperText error={hasError}>{helperText}</FormHelperText>
  </>
);

CurrencyInput.propTypes = {
  onCurrencyValueChange: PropTypes.func,
  currencySymbol: PropTypes.string,
  value: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
  helperText: PropTypes.string,
};

CurrencyInput.defaultProps = {
  onCurrencyValueChange: () => {},
  currencySymbol: '$',
  hasError: false,
  helperText: '',
};

export default CurrencyInput;
