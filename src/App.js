import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import styled from '@material-ui/core/styles/styled';
import ExchangeRate from './components/ExchangeRate';
import Exchanger from './components/Exchanger';

function App() {
  const Container = styled('div')({
    padding: '1.5rem',
  });

  return (
    <CssBaseline>
      <Container>
        <ExchangeRate />
        <Exchanger />
      </Container>
    </CssBaseline>
  );
}

export default App;
