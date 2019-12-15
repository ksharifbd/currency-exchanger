import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import ExchangeRate from './components/ExchangeRate';
import Exchanger from './components/Exchanger';

function App() {
  return (
    <CssBaseline>
      <Box p={3}>
        <ExchangeRate />
        <Exchanger />
      </Box>
    </CssBaseline>
  );
}

export default App;
