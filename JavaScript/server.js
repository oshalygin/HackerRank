(function () {
    "use strict";

    let express = require("express");
    let path = require("path");
    let log = require("morgan");
    let application = express();


    let port = process.env.port || 9999;

    application.get("/", function (request, response) {
        response.sendfile(path.join(__dirname + "wwwwroot/index.html"));
    });

    application.use("/node_modules", express.static(__dirname + "/node_modules"));
    application.use("/bower_components", express.static(__dirname + "/bower_components"));

    application.listen(9999, function () {
        console.log(`Listening on http://localhost:${port}`);
    });

})();