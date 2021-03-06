import { fx } from 'money';

function currencyConverter(
  rates = {
    GBP: 1,
    EUR: 1,
    USD: 1,
  }
) {
  const baseCurrency = 'USD';

  const otherCurrencies = ['GBP', 'EUR'];

  fx.base = baseCurrency;
  fx.rates = {
    ...rates,
  };

  const getConvertedCurrencies = otherCurrencies.map(currency => {
    const correnctCurrency = currency === 'GBP' ? 'EUR' : 'GBP';
    return {
      from: {
        currency,
        value: 1,
      },
      to: {
        currency: {
          USD: fx.convert(1, { from: currency, to: 'USD' }),
          GBP: 1,
          EUR: 1,
          [correnctCurrency]: fx.convert(1, {
            from: currency,
            to: correnctCurrency,
          }),
        },
      },
    };
  });

  return getConvertedCurrencies;
}

export default currencyConverter;
