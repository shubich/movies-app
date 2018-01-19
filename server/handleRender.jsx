import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import rootSaga from '../src/sagas/rootSaga';
import configureStore from '../src/store/configureStore';
import App from '../src/components/App';

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
            <title>Movies-app</title>
            <link rel="shortcut icon" href="/src/favicon.png">
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <div id="app">${html}</div>
            <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script type="text/javascript" src="/common.bundle.js" defer></script>
            <script type="text/javascript" src="/client.bundle.js" defer></script>
        </body>
    </html>
  `;
}

function handleRender(req, res) {
  const store = configureStore();
  const context = {};

  const app = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context} >
        <App />
      </StaticRouter>
    </Provider>
  );

  store.runSaga(rootSaga).done.then(() => {
    const html = renderToString(app);

    if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      return res.redirect(context.url);
    }

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    return res.send(renderFullPage(html, preloadedState));
  });

  // Do first render, starts initial actions.
  renderToString(app);

  // When the first render is finished, send the END action to redux-saga.
  store.close();
}

export default handleRender;
