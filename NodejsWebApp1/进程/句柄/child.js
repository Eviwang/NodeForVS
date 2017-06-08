"use strict";
process.on("message", function (name, server) {
    server.on("connection", function (socket) {
        socket.end("name:" + name + "handler by child pid is " + process.pid);
    });
});
//# sourceMappingURL=child.js.map