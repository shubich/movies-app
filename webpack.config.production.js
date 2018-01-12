const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = require('./webpack.config.base');

const clientConfig = Object.create(baseConfig.clientConfig);
const serverConfig = Object.create(baseConfig.serverConfig);

const getCommon = () => [
  new UglifyJSPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
    },
  }),
];

Array.prototype.push.apply(clientConfig.plugins, getCommon());

Array.prototype.push.apply(serverConfig.plugins, getCommon());

module.exports = [clientConfig, serverConfig];
