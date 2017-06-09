import * as cluster from "cluster";
import * as os from "os";


cluster.setupMaster({
    exec:"./worker.js"
});

let cpus = os.cpus().length;

for (let i = 0; i < cpus; i++){
    cluster.fork();
}

console.log("start " + cpus + " workers");