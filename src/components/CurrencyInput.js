import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

const CurrencyInput = ({ onCurrencyValueChange }) => {
  const [currencyValue, setCurrencyValue] = useState('');

  const textToCurrency = event => {
    const [number, decimal] = event.target.value
      .toString()
      .replace(/[^0-9.]/gi, '')
      .split('.');
    const isDecimal = typeof decimal !== 'undefined';
    const value = `${number}${isDecimal ? `.${decimal.substring(0, 2)}` : ''}`;
    return {
      ...event,
      target: { ...event.target, value },
      currentTarget: { ...event.currentTarget, value },
    };
  };

  const handleChange = event => {
    const eventWithUpdatedValue = textToCurrency(event);
    setCurrencyValue(eventWithUpdatedValue.target.value);

    return onCurrencyValueChange(eventWithUpdatedValue);
  };

  return (
    <>
      <InputLabel htmlFor="amount">Amount</InputLabel>
      <Input
        id="amount"
        value={currencyValue}
        onChange={handleChange}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      />
    </>
  );
};

CurrencyInput.propTypes = {
  onCurrencyValueChange: PropTypes.func,
};

CurrencyInput.defaultProps = {
  onCurrencyValueChange: () => {},
};

export default CurrencyInput;
