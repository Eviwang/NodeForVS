"use strict";
const http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200);
    res.end("hello" + process.pid);
}).listen(8000);
//# sourceMappingURL=worker.js.map