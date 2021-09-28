import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import configureStore from './configureStore';
import reportWebVitals from './reportWebVitals';
import { App } from './app';
import './style.scss';
import { ThemeProvider } from './context/ThemeContext';

const store = configureStore();

ReactDOM.render(
  <HelmetProvider>
    <Provider store={store}>
      <ThemeProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeProvider>
    </Provider>
  </HelmetProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
