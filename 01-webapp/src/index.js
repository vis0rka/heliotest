import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './stylesheet/App.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';



ReactDOM.render((
  <Provider store={store}>
    <Router >
      <App />
    </Router >
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();