const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

var root = path.resolve('./');
var webroot = path.resolve(root, 'src', 'web_modules');
var dist = path.resolve(root, 'target', 'web.war', 'assets');
//var dist = path.resolve(root, 'target', 'generated-sources', 'assets');

module.exports = [{
    entry: {
        app: [path.resolve(webroot, 'app', 'main')],
        polyfills: [path.resolve(webroot, 'app', 'polyfills')],
        vendor: [path.resolve(webroot, 'app', 'vendor')]
    },
    output: {
        path: dist,
        filename: 'js/[name].js'
    },
    resolve: {
        root: webroot,
        extensions: ['', '.js', '.ts']
    },
    devtool: 'source-map',
    module: {
        loaders: [
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
        ]
    }
    /*,
     sassLoader: {
     outputStyle: "compressed"
     }*/
    //,
    //postcss: [autoprefixer({browsers: ['last 2 versions']})],
    /*plugins: [
     new webpack.optimize.UglifyJsPlugin({
     compress: {
     warnings: false
     },
     mangle: {
     except: ['exports', 'require', '$']
     }
     }),
     new webpack.optimize.CommonsChunkPlugin({
     minChunks: 3,
     name: 'web'
     }),
     new webpack.ProvidePlugin({
     $: 'jquery',
     jQuery: 'jquery'
     }),
     new ExtractTextPlugin("web.css")
     ]*/
}]
;
