"use strict";

module.exports = () => {

    let solutionsJavaScriptFiles = "solutions/**/*.js";
    let excludeNodeModulesDirectory = "!node_modules/**";
    let solutionsPath = "./solutions";

    let karmaConfig = function (config) {
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

    let config = {
        solutionsJavaScriptFiles: solutionsJavaScriptFiles,
        excludeNodeModulesDirectory: excludeNodeModulesDirectory,
        karmaConfiguration: karmaConfig,
        typeScriptFiles: solutionsPath + "/**/*.ts",
        tsTypingDefinitions: "./typings/**/*.d.ts",
        solutionsPath: solutionsPath,

        nodePort: 9999,
        nodeServer: "./server.js"
    };

    return config;
}