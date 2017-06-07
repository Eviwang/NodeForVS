import * as http from "http";

http.createServer(function (req,res) {

    let auth = req.headers["authorization"] || "";
    let parts = auth.split(" ");
    let method = parts[0];
    let encoded = parts[1] || "";
    let decoded = new Buffer(encoded, "base64").toString("utf-8").split(":");

    let user = decoded[0];
    let pass = decoded[1];

    if (user == "wang" && pass == "123") {
        res.write("ok");
    } else {        
        res.setHeader("WWW-Authenticate", 'Basic realm="Secure Area"');
        res.writeHead(401);
    }

    res.end();
}).listen(5000);