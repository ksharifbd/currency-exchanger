import React from 'react';
import Box from '@material-ui/core/Box';
import CurrencySelector from './CurrencySelector';
import CurrencyInput from './CurrencyInput';

const ExchangeEnabler = () => {
  return (
    <Box>
      <Box mb={3}>
        <CurrencySelector />
      </Box>
      <CurrencyInput />
    </Box>
  );
};

export default ExchangeEnabler;
