import * as process from "child_process";
import * as os from "os";

for (var i = 0; i < os.cpus().length; i++) {
    process.fork("./worker.js");
}