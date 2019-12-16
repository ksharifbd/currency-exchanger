import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import styled from '@material-ui/core/styles/styled';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ExchangeEnabler from './ExchangeEnabler';

const Exchanger = () => {
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState('USD');
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState('GBP');
  const dispatch = useDispatch();

  const ExchangerWrapper = styled(Box)({
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  });

  const handleFromSelectChange = event => {
    setSelectedCurrencyFrom(event.target.value);

    dispatch({
      type: 'convert_currency_from',
      currency: event.target.value,
    });
  };

  const handleToSelectChange = event => {
    setSelectedCurrencyTo(event.target.value);

    dispatch({
      type: 'convert_currency_to',
      currency: event.target.value,
    });
  };

  return (
    <ExchangerWrapper>
      <ExchangeEnabler
        key="from"
        selectedCurrency={selectedCurrencyFrom}
        onSelect={handleFromSelectChange}
        onCurrencyValueChange={event => console.log('works')} //eslint-disable-line
      />
      <ArrowRightAltIcon />
      <ExchangeEnabler
        key="to"
        selectedCurrency={selectedCurrencyTo}
        onSelect={handleToSelectChange}
      />
    </ExchangerWrapper>
  );
};

export default connect(state => state)(Exchanger);
