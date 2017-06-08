import * as cp from "child_process";


let child = cp.fork("./child.js");

child.on("message", function (e) {
    console.log(e);
});

child.send("hello,child");