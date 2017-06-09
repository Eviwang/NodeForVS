"use strict";
const cluster = require("cluster");
const os = require("os");
cluster.setupMaster({
    exec: "./worker.js"
});
let cpus = os.cpus().length;
for (let i = 0; i < cpus; i++) {
    cluster.fork();
}
console.log("start " + cpus + " workers");
//# sourceMappingURL=master.js.map