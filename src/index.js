import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from '@material-ui/core/styles';
import './assets/styles/index.css';
import rootReducer from './reducers/index';
import App from './App';
import theme from './assets/utilities/theme';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);