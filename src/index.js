import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, Global } from '@emotion/react';

import App from 'components/App';
import './index.css';
import { GlobalStyles } from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

const theme = {
  colors: {
    prymeryColor: '#0a0a0a',
    accentColor: '#ababa6',
    white: '#FFFFFF',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
