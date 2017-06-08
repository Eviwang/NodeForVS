import * as cluster from "cluster";
import * as http from "http";
import * as os from "os";

let cpus = os.cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < cpus; i++) {
        cluster.fork();
    }
} else {
    console.log("cluster pid:" + process.pid);
    http.createServer(function (req, res) {
        res.writeHead(200);
        res.end("hello" + process.pid);
    }).listen(8000);    
}

