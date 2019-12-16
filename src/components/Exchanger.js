/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import styled from '@material-ui/core/styles/styled';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Button from '@material-ui/core/Button';
import ExchangeInput from './ExchangeInput';
import ExchangeOutput from './ExchangeOutput';

const ExchangerButtonWrapper = styled(Box)({
  textAlign: 'center',
});

const ExchangerInputsWrapper = styled(Box)({
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
  onExchange,
  inputCurrencyBalance,
  outputCurrencyBalance,
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

  const hanndleSubmit = event => {
    event.preventDefault();

    const submitData = {
      from: {
        currency: selectedCurrencyFrom,
        value: currencyValue,
      },

      to: {
        currency: selectedCurrencyTo,
        value: currencyValue * conversionRate,
      },
    };

    onExchange(submitData);
  };

  return (
    <Box>
      <form onSubmit={hanndleSubmit}>
        <ExchangerInputsWrapper mb={3}>
          <ExchangeInput
            selectedCurrency={selectedCurrencyFrom}
            onSelect={event => onFromSelectChange(event)}
            currencySymbol={getCurrencySign(currencyFromSymbol)}
            value={currencyValue}
            inputCurrencyBalance={inputCurrencyBalance}
            onCurrencyValueChange={handleOnCurrencyValueChange} //eslint-disable-line
          />
          <ArrowRightAltIcon />
          <ExchangeOutput
            selectedCurrency={selectedCurrencyTo}
            onSelect={event => onToSelectChange(event)}
            currencyValue={conversionRate * currencyValue}
            currencySymbol={getCurrencySign(currencyToSymbol)}
            outputCurrencyBalance={outputCurrencyBalance}
          />
        </ExchangerInputsWrapper>
        <ExchangerButtonWrapper>
          <Button variant="contained" color="primary" type="submit">
            Exchange
          </Button>
        </ExchangerButtonWrapper>
      </form>
    </Box>
  );
};

Exchanger.propTypes = {
  onExchange: PropTypes.func,
};

Exchanger.defaultProps = {
  onExchange: () => {},
};

export default Exchanger;
