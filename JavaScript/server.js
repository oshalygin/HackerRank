(function () {
    "use strict";

    var express = require("express");
    var path = require("path");
    var log = require("morgan");
    var application = express();

    var port = process.env.port || 9999;

    application.get("/", function (request, response) {
        response.sendfile(path.join(__dirname + "wwwwroot/index.html"));
    });

    application.use("/node_modules", express.static(__dirname + "/node_modules"));
    application.use("/bower_components", express.static(__dirname + "/bower_components"));

    var server = application.listen(9999, function () {
        var port = server.address().port;
//        var hostName = server.address().address;

        console.log(`Listening on http://localhost:${port}`);
    });

})();