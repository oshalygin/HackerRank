module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            { pattern: 'solutions/**/*.js' }
        ],
        exclude: [
        ],
        reporters: ['mocha'],
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        plugins: [
            'karma-jasmine',
            'karma-mocha-reporter',
            "karma-phantomjs-launcher"
        ]
    });
};
