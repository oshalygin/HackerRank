module.exports = function () {

    var solutionsJavaScriptFiles = "solutions/**/*.js";
    var excludeNodeModulesDirectory = "!node_modules/**";
    var solutionsPath = "./solutions";

    var karmaConfig = function (config) {
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

    var config = {
        solutionsJavaScriptFiles: solutionsJavaScriptFiles,
        excludeNodeModulesDirectory: excludeNodeModulesDirectory,
        karmaConfiguration: karmaConfig,
        typeScriptFiles: solutionsPath + "/**/*.ts",
        tsTypingDefinitions: "./typings/**/*.d.ts",
        solutionsPath: solutionsPath,

        nodePort: 3000,
        nodeServer: "./server.js"
    };

    return config;
};