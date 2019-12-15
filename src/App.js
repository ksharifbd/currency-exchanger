import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import ExchangeRate from './components/ExchangeRate';
import Exchanger from './components/Exchanger';

function App(props) {
  return (
    <CssBaseline>
      <Box p={3}>
        <ExchangeRate />
        <Exchanger />
        <button
          type="button"
          onClick={() =>
            props.dispatch({
              type: 'fetch_rates_request',
            })
          }
        >
          click me
        </button>
      </Box>
    </CssBaseline>
  );
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => state)(App);
