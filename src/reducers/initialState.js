const initialState = {
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
          },
        },
      },
    ],
  },
};

export default initialState;
