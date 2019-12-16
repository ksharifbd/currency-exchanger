import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import styled from '@material-ui/core/styles/styled';
import CurrencySelector from './CurrencySelector';
import InfoDisplayer from './InfoDisplayer';

const labelStyles = {
  color: 'rgba(0, 0, 0, 0.54)',
  padding: 0,
  fontSize: '1rem',
  lineHeight: 1,
  letterSpacing: '0.00938em',
};

const ExchangeOutputText = styled(Box)({
  width: '13.75rem',
});
const ExchangeOutputLabel = styled(Box)({
  ...labelStyles,
  marginBottom: '.25rem',
});
const ExchangeOutputSymbol = styled(Box)({
  ...labelStyles,
  display: 'inline-block',
  marginRight: '.25rem',
});

const ExchangeOutput = ({
  selectedCurrency,
  onSelect,
  currencySymbol,
  currencyValue,
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
        <ExchangeOutputText>
          <ExchangeOutputLabel component="p">Amount</ExchangeOutputLabel>
          <Box>
            <ExchangeOutputSymbol component="span">
              {currencySymbol}
            </ExchangeOutputSymbol>
            <Box component="span">{currencyValue}</Box>
          </Box>
        </ExchangeOutputText>
      </Box>
      <InfoDisplayer label="Balance" amount="500" symbol={currencySymbol} />
    </Box>
  );
};

ExchangeOutput.propTypes = {
  selectedCurrency: PropTypes.oneOf(['USD', 'GBP', 'EUR']),
  onSelect: PropTypes.func,
  currencySymbol: PropTypes.string,
  currencyValue: PropTypes.string,
};

ExchangeOutput.defaultProps = {
  selectedCurrency: 'USD',
  onSelect: () => {},
  currencySymbol: '$',
  currencyValue: '3444444',
};

export default ExchangeOutput;
