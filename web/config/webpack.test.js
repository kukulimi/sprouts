var path = require('path');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['', '.ts', '.js'],
        root: path.resolve('../src/test/web_modules')
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'

            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null'
            },
            {
                test: /\.css$/,
                exclude: path.resolve('src', 'main', 'assets'),
                loader: 'null'
            },
            {
                test: /\.css$/,
                include: path.resolve('src', 'main', 'assets'),
                loader: 'raw'
            }
        ]
    }
}
