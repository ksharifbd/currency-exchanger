/* eslint-disable */
import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { connect, useDispatch } from 'react-redux';
import ExchangeRate from './components/ExchangeRate';
import Exchanger from './components/Exchanger';

function App({
  balance,
  exchangeFrom,
  exchangeTo,
  currencyFromSymbol,
  currencyToSymbol,
  conversionRate,
}) {
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState('USD');
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState('GBP');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'fetch_rates_request',
    });
  }, [dispatch]);

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

  const handleExchange = exchangeData => {
    const updatedBalance = {
      ...balance,
      [exchangeData.from.currency]:
        balance[exchangeData.from.currency] - Number(exchangeData.from.value),
      [exchangeData.to.currency]:
        balance[exchangeData.to.currency] + Number(exchangeData.to.value),
    };

    console.log(updatedBalance);

    dispatch({
      type: 'exchange_currency',
      payload: updatedBalance,
    });
  };

  return (
    <CssBaseline>
      <Box p={3}>
        <ExchangeRate from={exchangeFrom} to={exchangeTo} />
        <Exchanger
          selectedCurrencyFrom={selectedCurrencyFrom}
          selectedCurrencyTo={selectedCurrencyTo}
          onFromSelectChange={handleFromSelectChange}
          onToSelectChange={handleToSelectChange}
          currencyFromSymbol={currencyFromSymbol}
          currencyToSymbol={currencyToSymbol}
          conversionRate={conversionRate}
          onExchange={handleExchange}
          inputCurrencyBalance={balance[selectedCurrencyFrom]}
          outputCurrencyBalance={balance[selectedCurrencyTo]}
        />
      </Box>
    </CssBaseline>
  );
}

export default connect(state => {
  const { currency } = state.convert;
  const { rates } = state.exchange_rates;
  const { balance } = state;

  const getRate = rates.find(rate => rate.from.currency === currency.from).to
    .currency[currency.to];

  return {
    exchangeFrom: {
      currency: currency.from,
      value: 1,
    },
    exchangeTo: {
      currency: currency.to,
      value: getRate || 1,
    },
    currencyFromSymbol: currency.from,
    currencyToSymbol: currency.to,
    conversionRate: getRate,
    balance,
  };
})(App);
