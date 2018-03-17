import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/App';
import './favicon.png';
import './styles/index.less';

// Grab the state from a global variable injected into the server-generated HTML
const store = configureStore(window.PRELOADED_STATE);
// Allow the passed state to be garbage-collected
delete window.PRELOADED_STATE;

const render = () => {
  ReactDom.hydrate(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app'),
  );
};

render();
