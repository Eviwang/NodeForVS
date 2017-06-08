"use strict";
const http = require("http");
let server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World pid is ' + process.pid);
});
process.on("message", function (name, tcp) {
    tcp.on("connection", function (socket) {
        console.log(name);
        server.emit("connection", socket);
    });
});
//# sourceMappingURL=child.js.map