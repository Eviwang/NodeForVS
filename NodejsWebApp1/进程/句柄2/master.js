"use strict";
const net = require("net");
const cp = require("child_process");
let child1 = cp.fork("./child.js");
let child2 = cp.fork("./child.js");
let child3 = cp.fork("./child.js");
let server = net.createServer();
server.listen(5000, function () {
    child1.send("child1", server);
    child2.send("child2", server);
    child3.send("child3", server);
    server.close();
});
//child.on("message", function (e) {
//    console.log(e);
//});
//# sourceMappingURL=master.js.map