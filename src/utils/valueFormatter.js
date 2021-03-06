function valueFormatter(value) {
  if (typeof value !== 'number' && typeof value !== 'string') {
    throw new Error('please provide number or string');
  }

  const [number, decimal] = value
    .toString()
    .replace(/[^0-9.]/gi, '')
    .split('.');

  const isDecimal = typeof decimal !== 'undefined';

  return `${number}${isDecimal ? `.${decimal.substring(0, 2)}` : ''}`;
}

export default valueFormatter;
