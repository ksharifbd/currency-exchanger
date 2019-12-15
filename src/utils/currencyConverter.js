import { fx } from 'money';

function currencyConverter(
  rates = {
    GBP: 1,
    EUR: 1,
  }
) {
  const baseCurrency = 'USD';

  const otherCurrencies = ['GBP', 'EUR'];

  fx.base = baseCurrency;
  fx.rates = {
    ...rates,
    [baseCurrency]: 1,
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
