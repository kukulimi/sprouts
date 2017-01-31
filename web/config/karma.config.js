var webpackConfig = require('./webpack.test.js');

module.exports = function (config) {
    var _config = {
        basePath: '',

        frameworks: ['jasmine','intl-shim'],

        files: [
            'karma-test-shim.js'
        ],

        preprocessors: {
            'karma-test-shim.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    };

    config.set(_config);
};
