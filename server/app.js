const express = require('express');
const handleRender = require('./build/server.bundle').default;

const port = process.env.PORT || 3000
const server = express();

server.use(express.static('public'));
server.get('/*', handleRender);

server.listen(port, () => {
  console.info(`Express listening on port ${port}`);
});
