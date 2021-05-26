import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../themes';
import logo from './logo.svg';
import GlobalStyles from './globalStyles';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        {' '}
        <code>src/App.js</code>
        {' '}
        and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </ThemeProvider>
);

export default App;
