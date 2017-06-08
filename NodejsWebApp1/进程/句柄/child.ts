import * as net from "net";
process.on("message", function (name, server: net.Server) {
    server.on("connection", function (socket) {
        socket.end("name:"+name+"handler by child pid is " + process.pid);
    });

});