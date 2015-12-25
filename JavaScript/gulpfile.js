var gulp = require("gulp");
var config = require("./gulp.config")();
var $ = require("gulp-load-plugins")({
    lazy: true
});

var Server = require("karma").Server;






function log(msg) {
    if (typeof (msg) === "object") {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}