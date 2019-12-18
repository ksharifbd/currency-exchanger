import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import styled from '@material-ui/core/styles/styled';

const labelStyles = {
  color: 'rgba(0, 0, 0, 0.54)',
  padding: 0,
  fontSize: '1rem',
  lineHeight: 1,
  letterSpacing: '0.00938em',
};

const InfoDisplayerWrapper = styled(Box)({
  width: '13.75rem',
});
const InfoDisplayerLabel = styled(Box)({
  ...labelStyles,
  marginBottom: '.25rem',
});
const InfoDisplayerSymbol = styled(Box)({
  ...labelStyles,
  display: 'inline-block',
  marginRight: '.25rem',
});

const InfoDisplayer = ({ label, symbol, amount, hasWrapper }) => {
  const content = (
    <>
      <InfoDisplayerLabel component="p">{label}</InfoDisplayerLabel>
      <Box>
        <InfoDisplayerSymbol component="span">{symbol}</InfoDisplayerSymbol>
        <Box component="span">{amount}</Box>
      </Box>
    </>
  );

  return (
    <>
      {hasWrapper ? (
        <InfoDisplayerWrapper id="infoDisplayerWrapper">
          {content}
        </InfoDisplayerWrapper>
      ) : (
        content
      )}
    </>
  );
};

InfoDisplayer.propTypes = {
  label: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  hasWrapper: PropTypes.bool,
};

InfoDisplayer.defaultProps = {
  hasWrapper: false,
};

export default InfoDisplayer;
