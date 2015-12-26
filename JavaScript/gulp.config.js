module.exports = function () {


    var solutionsJavaScriptFiles = "solutions/**/*.js";
    var excludeNodeModulesDirectory = "!node_modules/**";
    var karmaConfig = __dirname + "/karma.conf.js";

    var config = {
        solutionsJavaScriptFiles: solutionsJavaScriptFiles,
        excludeNodeModulesDirectory: excludeNodeModulesDirectory,
        karmaConfiguration: karmaConfig
    };

    return config;
}