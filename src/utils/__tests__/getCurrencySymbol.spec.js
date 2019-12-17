import getCurrencySymbol, { errorMessage } from '../getCurrencySymbol';

describe('Get Currency Symbol', () => {
  const data = [
    {
      input: 'EUR',
      output: '€',
    },

    {
      input: 'GBP',
      output: '£',
    },

    {
      input: 'USD',
      output: '$',
    },

    {
      input: 'IND',
      output: errorMessage,
    },

    {
      input: 25,
      output: errorMessage,
    },

    {
      input: [1, 2],
      output: errorMessage,
    },

    {
      input: { a: 1, b: 2 },
      output: errorMessage,
    },
  ];

  data.forEach(datum => {
    const { input, output } = datum;

    it(`should return ${output} for the ${JSON.stringify(input)}`, () => {
      expect(getCurrencySymbol(input)).toEqual(output);
    });
  });
});
