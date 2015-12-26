// Karma configuration
// Generated on Fri Dec 25 2015 20:42:25 GMT-0800 (Pacific Standard Time)

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'requirejs'],
        files: [
            { pattern: 'solutions/**/*.js', included: false }
        ],

        exclude: [
        ],
        preprocessors: {
        },
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS', 'Chrome'],
        singleRun: false,
        concurrency: Infinity
    });
};
