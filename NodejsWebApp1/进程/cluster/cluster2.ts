import * as cluster from "cluster";
import * as http from "http";
import * as os from "os";

let cpus = os.cpus().length;

cluster.setupMaster({
    exec:"./worker.js"
});

for (var i = 0; i < cpus; i++) {
    cluster.fork();
}

