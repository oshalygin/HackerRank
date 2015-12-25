module.exports = function () {


    var solutionsJavaScriptFiles = "solutions/**/*.js";
    var excludeNodeModulesDirectory = "!node_modules/**";

    var config = {
        solutionsJavaScriptFiles: solutionsJavaScriptFiles,
        excludeNodeModulesDirectory: excludeNodeModulesDirectory
    };

    return config;
}