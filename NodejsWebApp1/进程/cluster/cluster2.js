"use strict";
const cluster = require("cluster");
const os = require("os");
let cpus = os.cpus().length;
cluster.setupMaster({
    exec: "./worker.js"
});
for (var i = 0; i < cpus; i++) {
    cluster.fork();
}
//# sourceMappingURL=cluster2.js.map