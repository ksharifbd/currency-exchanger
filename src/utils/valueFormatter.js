function valueFormatter(value, convertToNumber = false) {
  const [number, decimal] = value
    .toString()
    .replace(/[^0-9.]/gi, '')
    .split('.');

  const isDecimal = typeof decimal !== 'undefined';

  const updatedValue = `${number}${
    isDecimal ? `.${decimal.substring(0, 2)}` : ''
  }`;

  return convertToNumber ? Number(updatedValue) : updatedValue;
}

export default valueFormatter;
