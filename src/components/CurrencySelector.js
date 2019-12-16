import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import currencies from '../constants/currencies';

const CurrencySelector = ({ label, selectedCurrency, onCurrencyChange }) => (
  <>
    <InputLabel id="currency">{label}</InputLabel>
    <Select
      labelId="currency"
      id="currency"
      value={selectedCurrency}
      onChange={onCurrencyChange}
    >
      <MenuItem value="USD">USD</MenuItem>
      <MenuItem value="GBP">GBP</MenuItem>
      <MenuItem value="EUR">EUR</MenuItem>
    </Select>
  </>
);

CurrencySelector.propTypes = {
  selectedCurrency: PropTypes.oneOf(currencies),
  onCurrencyChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

CurrencySelector.defaultProps = {
  selectedCurrency: 'USD',
  label: '',
};

export default CurrencySelector;
