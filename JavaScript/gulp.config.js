module.exports = function () {


    var solutionsJavaScriptFiles = "solutions/**/*.js";
    var excludeNodeModulesDirectory = "!node_modules/**";
    var karmaConfig = __dirname + "/karma.conf.js";
    var solutionsPath = "./solutions";

    var config = {
        solutionsJavaScriptFiles: solutionsJavaScriptFiles,
        excludeNodeModulesDirectory: excludeNodeModulesDirectory,
        karmaConfiguration: karmaConfig,
        typeScriptFiles: solutionsPath + "/**/*.ts",
        tsTypingDefinitions: "./typings/**/*.d.ts",
        solutionsPath: solutionsPath
    };

    return config;
}