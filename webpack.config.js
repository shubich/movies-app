const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    context: path.join(__dirname, 'src'),

    entry: {
        shop: [
            'react-hot-loader/patch',
            // 'webpack-dev-server/client?http://localhost:3000',
            './index',
        ]
    },

    output: {
        path: path.join(__dirname, "built"),
        publicPath: '/',
        filename: '[name].js',
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    // devServer: {
    //     historyApiFallback: true,
    //     hot: true,
    //     port: 3000
    // },

    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                ]
            }, {
                test: /\.less?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {loader: 'less-loader'}
                ],
            }, {
                test: /\.(ttf|eot|svg|woff|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader",
                options: {
                    name: '[path][name].[ext]?[hash]'
                }
    
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            title: 'nonsence',
            hash: true,
            template: './index.html'
        }),
    ],

    watch: true
};