import valueFormatter from '../valueFormatter';

describe('Value Formatter', () => {
  const data = [
    {
      input: 25,
      output: '25',
    },

    {
      input: 0,
      output: '0',
    },

    {
      input: '20.75',
      output: '20.75',
    },

    {
      input: 34.5954,
      output: '34.59',
    },

    {
      input: 3459,
      output: '3459',
    },

    {
      input: 'abc',
      output: '',
    },
  ];

  data.forEach(datum => {
    const { input, output } = datum;
    it(`should return ${output ||
      'empty string'} for the input ${input}`, () => {
      expect(valueFormatter(input)).toBe(output);
    });
  });

  const errorValues = [null, undefined, [2, 3], { a: 1, b: 2 }];

  errorValues.forEach(value => {
    it(`should throw error when input is not a number or string [test value is ${JSON.stringify(
      value
    )}]`, () => {
      expect(() => {
        valueFormatter(value);
      }).toThrow();
    });
  });
});
