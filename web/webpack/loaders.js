const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        test: /\.html$/,
        loader: 'html',
    },
    {
        test: /\.ts$/, exclude: /node_modules/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
    },
    {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass', {publicPath: '../'})
    },
    {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=img/[name].[ext]'
    }
];
