const initialState = {
  exchanger: {
    currency: {
      from: 'USD',
      to: 'GBP',
    },
  },
  exchange_rates: {
    rates: [
      {
        from: {
          currency: 'USD',
          value: 1,
        },
        to: {
          currency: {
            GBP: 0,
            EUR: 0,
            USD: 1,
          },
        },
      },
    ],
  },
};

export default initialState;
