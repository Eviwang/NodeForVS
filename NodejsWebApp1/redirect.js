"use strict";
const http = require("http");
http.createServer(function (req, res) {
    res.setHeader("Location", "http://www.baidu.com");
    res.writeHead(302);
    res.end("redirect");
}).listen(5000);
//# sourceMappingURL=redirect.js.map