const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
  context: path.join(__dirname),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    client: ['@babel/polyfill', './src/index'],
    vendors: './src/vendors',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'public'),
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }, {
      test: /\.less?$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader'],
      }),
    }, {
      test: /\.(ttf|eot|svg|woff|jpe?g|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]?[hash]',
      },
    }],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common', // Specify the common bundle's name.
    }),
  ],
};

const serverConfig = {
  target: 'node',
  externals: [nodeExternals()],
  context: path.join(__dirname),
  entry: ['@babel/polyfill', './server/handleRender.jsx'],
  resolve: { extensions: ['.js', '.jsx'] },
  output: {
    path: path.join(__dirname, 'server/build'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }, {
      test: /\.less?$/,
      loader: 'ignore-loader',
    }],
  },
  plugins: [],
};

module.exports.clientConfig = clientConfig;
module.exports.serverConfig = serverConfig;
