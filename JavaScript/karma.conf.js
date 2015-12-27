
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

        autoWatch: false,
        browsers: ['PhantomJS']
    });
};
