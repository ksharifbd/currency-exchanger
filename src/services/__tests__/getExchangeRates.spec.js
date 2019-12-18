import axios from 'axios';
import getExchangeRates, { errorMessage } from '../getExchangeRates';

jest.mock('axios');

describe('Exchange Rate Sage', () => {
  describe('Get Exchange Rates', () => {
    it('should resolve with correct value', async () => {
      const data = {
        USD: 1,
      };

      axios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data,
        })
      );

      const rates = await getExchangeRates();

      expect(rates.data).toEqual(data);
      expect(rates.data).not.toEqual({});
    });

    it('should reject with correct error message', async () => {
      axios.get.mockImplementationOnce(() => Promise.reject(errorMessage));

      await expect(getExchangeRates()).rejects.toThrow(errorMessage);
    });
  });
});
