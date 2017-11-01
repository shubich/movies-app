import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../src/App';

function renderFullPage(html) {
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
            <script type="text/javascript" src="/shop.js"></script>
        </body>
    </html>
  `;
}

function handleRender(req, res) {
  const html = renderToString(<App name="World" />);

  res.send(renderFullPage(html));
}

export default handleRender;
