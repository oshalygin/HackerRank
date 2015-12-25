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

gulp.task("default", ["help"]);

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