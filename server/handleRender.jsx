import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../src/store/configureStore';
import App from '../src/App';

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
            <title>Movies-app</title>
            <link rel="shortcut icon" href="/favicon.png">
        </head>
        <body>
            <div id="app">${html}</div>
            <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script type="text/javascript" src="/shop.js"></script>
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

  const html = renderToString(app);
  
  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    return res.redirect(context.url);
  }

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  return res.send(renderFullPage(html, preloadedState));
}

export default handleRender;
