import React from 'react';
import PropTypes from 'prop-types';

const ExchangeRate = ({ convertFrom, convertTo }) => (
  <div>
    <h2>Rate</h2>
    <div>
      <span>{convertFrom}</span>
      <span>{convertTo}</span>
    </div>
  </div>
);

ExchangeRate.propTypes = {
  convertFrom: PropTypes.oneOf(['USD', 'EUR', 'GBP']),
  convertTo: PropTypes.oneOf(['USD', 'EUR', 'GBP']),
};

ExchangeRate.defaultProps = {
  convertFrom: 'EUR',
  convertTo: 'GBP',
};

export default ExchangeRate;
