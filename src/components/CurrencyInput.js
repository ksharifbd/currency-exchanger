import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

const CurrencyInput = ({ value, onCurrencyValueChange, currencySymbol }) => {
  return (
    <>
      <InputLabel htmlFor="amount">Amount</InputLabel>
      <Input
        id="amount"
        value={value}
        onChange={onCurrencyValueChange}
        startAdornment={
          <InputAdornment position="start">{currencySymbol}</InputAdornment>
        }
      />
    </>
  );
};

CurrencyInput.propTypes = {
  onCurrencyValueChange: PropTypes.func,
  currencySymbol: PropTypes.string,
  value: PropTypes.string.isRequired,
};

CurrencyInput.defaultProps = {
  onCurrencyValueChange: () => {},
  currencySymbol: '$',
};

export default CurrencyInput;
