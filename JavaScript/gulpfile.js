var gulp = require("gulp");
var config = require("./gulp.config")();
var $ = require("gulp-load-plugins")({
    lazy: true
});

var Server = require("karma").Server;


gulp.task("eslint", function () {
    log("*** Validating via ESLint ** ");

    return gulp.src([config.solutionsJavaScriptFiles, config.excludeNodeModulesDirectory])
        .pipe($.eslint({
            config: "eslint.config.json"
        }))
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError());

});


gulp.task("run-tests", ["transpile"], function () {
    log("*** Running JavaScript Tests ***");

    new Server({
        configFile: config.karmaConfiguration,
        singleRun: true
    }).start();

});

gulp.task("transpile", function () {

    log("** Transpiling Dev Folder **");


    var typescriptOptions = {

        removeComments: false,
        target: "es5",
        noImplicitAny: true

    };

    return gulp
        .src([config.typeScriptFiles, config.tsTypingDefinitions])
        .pipe($.typescript(typescriptOptions))
        .pipe(gulp.dest(config.solutionsPath));
});

gulp.task("default", ["run-tests"]);

gulp.task("help", $.taskListing);

function log(msg) {
    if (typeof (msg) === "object") {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.green(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}