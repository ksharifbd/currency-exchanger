import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { connect, useDispatch } from 'react-redux';
import get from 'lodash/get';
import styled from '@material-ui/core/styles/styled';
import red from '@material-ui/core/colors/red';
import ExchangeRate from './components/ExchangeRate';
import Exchanger from './components/Exchanger';
import actions from './constants/actions';
import currencies from './constants/currencies';

const MessageDisplayer = styled(Box)({
  textAlign: 'center',
  fontSize: '1rem',
  color: ({ error }) => (error ? red[500] : 'inherit'),
});

function App({
  balance,
  exchangeFrom,
  exchangeTo,
  currencyFromSymbol,
  currencyToSymbol,
  conversionRate,
  displayError,
  isLoading,
}) {
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState('USD');
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState('GBP');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: actions.FETCH_EXCHANGE_RATES_REQUEST,
    });
  }, [dispatch]);

  const handleFromSelectChange = event => {
    const { value } = event.target;

    setSelectedCurrencyFrom(value);

    dispatch({
      type: actions.CONVERT_CURRENCY_FROM,
      currency: value,
    });
  };

  const handleToSelectChange = event => {
    const { value } = event.target;
    setSelectedCurrencyTo(value);

    dispatch({
      type: actions.CONVERT_CURRENCY_TO,
      currency: value,
    });
  };

  const handleExchange = exchangeData => {
    const fromCurrency = get(exchangeData, 'from.currency');
    const fromValue = get(exchangeData, 'from.value');
    const toCurrency = get(exchangeData, 'to.currency');
    const toValue = get(exchangeData, 'to.value');

    const updatedBalance = {
      ...balance,
      [fromCurrency]: balance[fromCurrency] - fromValue,
      [toCurrency]: balance[toCurrency] + toValue,
    };

    dispatch({
      type: actions.EXCHANGE_CURRENCY,
      payload: updatedBalance,
    });
  };

  const getMessage = () => {
    if (!isLoading && displayError) {
      return displayError;
    }

    if (isLoading) {
      return 'Please wait a while everything is up!';
    }

    return '';
  };

  const showMessage = getMessage();

  return (
    <CssBaseline>
      <Box p={3}>
        {showMessage ? (
          <MessageDisplayer error={displayError} component="p">
            {showMessage}
          </MessageDisplayer>
        ) : (
          <ExchangeRate from={exchangeFrom} to={exchangeTo} />
        )}
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

App.propTypes = {
  balance: PropTypes.shape({
    USD: PropTypes.number,
    GBP: PropTypes.number,
    EUR: PropTypes.number,
  }).isRequired,
  exchangeFrom: PropTypes.shape({
    currency: PropTypes.oneOf(currencies),
    value: PropTypes.number,
  }).isRequired,
  exchangeTo: PropTypes.shape({
    currency: PropTypes.oneOf(currencies),
    value: PropTypes.number,
  }).isRequired,
  currencyFromSymbol: PropTypes.string.isRequired,
  currencyToSymbol: PropTypes.string.isRequired,
  conversionRate: PropTypes.number.isRequired,
  displayError: PropTypes.string,
  isLoading: PropTypes.bool,
};

App.defaultProps = {
  displayError: '',
  isLoading: false,
};

export default connect(state => {
  const { currency } = state.convert;
  const { rates, isFetching: isLoading } = state.exchange_rates;
  const { balance } = state;
  const displayError = get(state, 'exchange_rates.error', '');

  const findExchangables = rates.find(
    rate => get(rate, 'from.currency') === currency.from
  );

  const toRate = get(findExchangables, `to.currency[${currency.to}]`, 0);

  return {
    exchangeFrom: {
      currency: currency.from,
      value: 1,
    },
    exchangeTo: {
      currency: currency.to,
      value: toRate,
    },
    currencyFromSymbol: currency.from,
    currencyToSymbol: currency.to,
    conversionRate: toRate,
    balance,
    displayError,
    isLoading,
  };
})(App);
