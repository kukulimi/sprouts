const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var root = path.resolve(__dirname, '..');

module.exports = [{
    entry: {
        app: path.resolve(root, 'src/web_modules/app/main'),
        polyfills: path.resolve(root, 'src/web_modules/app/polyfills'),
        vendor: path.resolve(root, 'src/web_modules/app/vendor'),
        web: path.resolve(root,'webpack/entries/web'),
    },
    output: {
        path: path.resolve(root, 'target/web.war/assets'),
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.ts'],
        alias: {
            web_modules: path.resolve(root, 'src/web_modules'),
            scss: path.resolve(root, 'src/main/webapp/assets/scss')
        }
    },
    devtool: 'source-map',
    module: {
        loaders: [
            require(path.resolve(root, 'webpack/loaders'))
        ]
    },
    sassLoader: {
        outputStyle: "compressed"
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    plugins: [
        new ExtractTextPlugin('css/[name].css')
    ]
}];
