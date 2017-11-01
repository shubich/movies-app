import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import App from './App';

const render = () => {
  ReactDom.hydrate(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./App', render);
}
