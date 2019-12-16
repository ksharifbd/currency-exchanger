const USDOLLAR_UNICODE = 36;
const GBPOUND_UNICODE = 163;
const EURO_UNICODE = 8364;

function getCurrencyCode(currency) {
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
  return String.fromCharCode(getCurrencyCode(currency));
}

export default getCurrencySymbol;
