const baseConfig = require('./webpack.config.base');

const clientConfig = Object.create(baseConfig.clientConfig);
const serverConfig = Object.create(baseConfig.serverConfig);

clientConfig.devtool = 'source-map';
clientConfig.watch = true;

serverConfig.watch = true;

module.exports = [clientConfig, serverConfig];
