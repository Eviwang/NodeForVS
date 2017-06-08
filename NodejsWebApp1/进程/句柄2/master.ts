import * as net from "net";
import * as cp from "child_process";
import * as cl from "cluster";


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




