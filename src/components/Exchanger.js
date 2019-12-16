import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import styled from '@material-ui/core/styles/styled';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Button from '@material-ui/core/Button';
import ExchangeInput from './ExchangeInput';
import ExchangeOutput from './ExchangeOutput';
import valueFormatter from '../utils/valueFormatter';
import getCurrencySymbol from '../utils/getCurrencySymbol';
import currencies from '../constants/currencies';

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
    const { value } = event.target;

    const updatedValue = valueFormatter(value);

    return {
      ...event,
      target: { ...event.target, value: updatedValue },
      currentTarget: { ...event.currentTarget, value: updatedValue },
    };
  };

  const handleOnCurrencyValueChange = event => {
    const eventWithUpdatedValue = textToCurrency(event);

    setCurrencyValue(eventWithUpdatedValue.target.value);
  };

  const convertedValue = Number(currencyValue) * conversionRate;

  const hanndleSubmit = event => {
    event.preventDefault();

    const submitData = {
      from: {
        currency: selectedCurrencyFrom,
        value: Number(currencyValue),
      },

      to: {
        currency: selectedCurrencyTo,
        value: convertedValue,
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
            onCurrencySelect={event => onFromSelectChange(event)}
            currencySymbol={getCurrencySymbol(currencyFromSymbol)}
            currencyValue={currencyValue}
            inputCurrencyBalance={inputCurrencyBalance}
            onCurrencyValueChange={handleOnCurrencyValueChange} //eslint-disable-line
          />
          <ArrowRightAltIcon />
          <ExchangeOutput
            selectedCurrency={selectedCurrencyTo}
            onCurrencySelect={event => onToSelectChange(event)}
            currencyValue={valueFormatter(convertedValue, true)}
            currencySymbol={getCurrencySymbol(currencyToSymbol)}
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
  currencyFromSymbol: PropTypes.string.isRequired,
  currencyToSymbol: PropTypes.string.isRequired,
  selectedCurrencyFrom: PropTypes.oneOf(currencies).isRequired,
  selectedCurrencyTo: PropTypes.oneOf(currencies).isRequired,
  onExchange: PropTypes.func.isRequired,
  onFromSelectChange: PropTypes.func.isRequired,
  onToSelectChange: PropTypes.func.isRequired,
  conversionRate: PropTypes.number.isRequired,
  inputCurrencyBalance: PropTypes.number.isRequired,
  outputCurrencyBalance: PropTypes.number.isRequired,
};

export default Exchanger;
