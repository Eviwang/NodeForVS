"use strict";
const process = require("child_process");
const os = require("os");
for (var i = 0; i < os.cpus().length; i++) {
    process.fork("./worker.js");
}
//# sourceMappingURL=master.js.map