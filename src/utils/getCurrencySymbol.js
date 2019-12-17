import currencies from '../constants/currencies';

export const errorMessage = 'please provide USD, GBP, or EUR';

function getCurrencyCode(currency) {
  const USDOLLAR_UNICODE = 36;
  const GBPOUND_UNICODE = 163;
  const EURO_UNICODE = 8364;

  switch (currency) {
    case 'GBP':
      return GBPOUND_UNICODE;
    case 'EUR':
      return EURO_UNICODE;
    default:
      return USDOLLAR_UNICODE;
  }
}

function getCurrencySymbol(currency) {
  if (!currencies.includes(currency)) {
    return errorMessage;
  }
  return String.fromCharCode(getCurrencyCode(currency));
}

export default getCurrencySymbol;
