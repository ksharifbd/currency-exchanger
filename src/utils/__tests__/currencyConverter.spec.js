import currencyConverter from '../currencyConverter';

describe('Currency Converter', () => {
  const data = [
    {
      input: undefined,
      output: [
        {
          from: {
            currency: 'GBP',
            value: 1,
          },

          to: {
            currency: {
              EUR: 1,
              GBP: 1,
              USD: 1,
            },
          },
        },
        {
          from: {
            currency: 'EUR',
            value: 1,
          },

          to: {
            currency: {
              EUR: 1,
              GBP: 1,
              USD: 1,
            },
          },
        },
      ],
    },

    {
      input: {
        GBP: 3,
        EUR: 2,
        USD: 1,
      },
      output: [
        {
          from: {
            currency: 'GBP',
            value: 1,
          },

          to: {
            currency: {
              EUR: 0.6666666666666666,
              GBP: 1,
              USD: 0.3333333333333333,
            },
          },
        },
        {
          from: {
            currency: 'EUR',
            value: 1,
          },

          to: {
            currency: {
              EUR: 1,
              GBP: 1.5,
              USD: 0.5,
            },
          },
        },
      ],
    },
  ];

  const falseOutput = [
    {
      from: {
        currency: 'GBP',
        value: 1,
      },

      to: {
        currency: {
          EUR: 0.6666666666666666,
          GBP: 1,
          USD: 0.3333333333333333,
        },
      },
    },
    {
      from: {
        currency: 'EUR',
        value: 1,
      },

      to: {
        currency: {
          EUR: 1,
          GBP: 1.5,
          USD: 0.56,
        },
      },
    },
  ];

  data.forEach(datum => {
    const { input, output } = datum;

    it(`should return ${JSON.stringify(output)} for the input ${JSON.stringify(
      input
    )}`, () => {
      expect(currencyConverter(input)).toEqual(output);
      expect(currencyConverter(input)).not.toEqual(falseOutput);
    });
  });
});
