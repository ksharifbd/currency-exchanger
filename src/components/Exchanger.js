/* eslint-disable */
import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import styled from '@material-ui/core/styles/styled';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ExchangeInput from './ExchangeInput';
import ExchangeOutput from './ExchangeOutput';

const ExchangerWrapper = styled(Box)({
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-evenly',
  alignItems: 'center',
});

const Exchanger = ({
  currencyFromSymbol,
  currencyToSymbol,
  selectedCurrencyFrom,
  selectedCurrencyTo,
  onFromSelectChange,
  onToSelectChange,
  conversionRate,
}) => {
  const [currencyValue, setCurrencyValue] = useState('0');

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

  const handleOnCurrencyValueChange = event => {
    const eventWithUpdatedValue = textToCurrency(event);
    setCurrencyValue(eventWithUpdatedValue.target.value);
  };

  const USDOLLAR_UNICODE = 36;
  const GBPOUND_UNICODE = 163;
  const EURO_UNICODE = 8364;

  const getCurrencyCode = currency => {
    switch (currency) {
      case 'GBP':
        return GBPOUND_UNICODE;
      case 'EUR':
        return EURO_UNICODE;
      default:
        return USDOLLAR_UNICODE;
    }
  };

  const getCurrencySign = currency => {
    return String.fromCharCode(getCurrencyCode(currency));
  };

  return (
    <ExchangerWrapper>
      <ExchangeInput
        selectedCurrency={selectedCurrencyFrom}
        onSelect={event => onFromSelectChange(event)}
        currencySymbol={getCurrencySign(currencyFromSymbol)}
        value={currencyValue}
        onCurrencyValueChange={handleOnCurrencyValueChange} //eslint-disable-line
      />
      <ArrowRightAltIcon />
      <ExchangeOutput
        selectedCurrency={selectedCurrencyTo}
        onSelect={event => onToSelectChange(event)}
        currencyValue={conversionRate * currencyValue}
        currencySymbol={getCurrencySign(currencyToSymbol)}
      />
    </ExchangerWrapper>
  );
};

export default Exchanger;
