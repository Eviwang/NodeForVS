"use strict";
const http = require("http");
function hasBody(req) {
    return "transfer-encoding" in req.headers || "content-length" in req.headers;
}
http.createServer(function (req, res) {
    let rawBody = null;
    if (req.method == "POST") {
        if (hasBody(req)) {
            let buffers = [];
            req.on("data", function (chunk) {
                buffers.push(chunk);
            });
            req.on("end", function () {
                rawBody = Buffer.concat(buffers).toString();
                console.log("end", rawBody);
            });
        }
    }
    else {
        console.log("get hello");
    }
    res.write("ok");
    res.end();
}).listen(5000);
//# sourceMappingURL=upload.js.map