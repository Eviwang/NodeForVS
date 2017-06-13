"use strict";
const http = require("http");
const crypto = require("crypto");
var server = http.createServer(function (req, res) {
    console.log("http request");
    res.writeHead(200, { 'Content-Type': "text/plain" });
    res.end("hello");
});
server.listen(5000);
server.on("upgrade", function (req, socket, upgradeHead) {
    console.log("upgrade");
    var key = req.headers["sec-websocket-key"];
    var shasum = crypto.createHash("sha1");
    key = shasum.update(key + "258EAFA5-E914-47DA-95CA-C5ABoDC85B11").digest("base64");
    var headers = [
        "HTTP/1.1 101 Switching Protocols",
        "Upgrade:websocket",
        "Connection:Upgrade",
        "Sec-WebSocket-Accept:" + key,
        "Sec-WebSocket-Protocol:chat"
    ];
    //socket.setNoDelay(true);
    //socket.write(headers.join("\r\n"));
    bind_sock_event(socket);
    handshake(req, socket, upgradeHead);
});
var bind_sock_event = function (sock) {
    sock.on('data', function (buffer) {
        var data = unwrap(buffer);
        console.log('socket receive data : ', buffer, data, '\n>>> ' + data);
        // send('hello html5,'+Date.now())
        sock.emit('send', data);
    })
        .on('close', function () {
        console.log('socket close');
    })
        .on('end', function () {
        console.log('socket end');
    })
        .on('send', function (data) {
        sock.write(wrap(data), 'binary');
    });
};
// 包装将要发送的帧
var wrap = function (data) {
    var fa = 0x00, fe = 0xff, data = data.toString(), len = 2 + Buffer.byteLength(data), buff = new Buffer(len);
    buff[0] = fa;
    buff.write(data, 1);
    buff[len - 1] = fe;
    return buff;
};
// 解开接收到的帧
var unwrap = function (data) {
    return data.slice(1, data.length - 1);
};
var handshake = function (req, sock, head) {
    var output = [], h = req.headers, br = '\r\n';
    // header
    output.push('HTTP/1.1 101 WebSocket Protocol Handshake', 'Upgrade: WebSocket', 'Connection: Upgrade', 'Sec-WebSocket-Origin: ' + h.origin, 'Sec-WebSocket-Location: ws://' + h.host + req.url, 'Sec-WebSocket-Protocol: my-custom-chat-protocol' + br);
    // body
    //var c = challenge(h['sec-websocket-key1'], h['sec-websocket-key2'], head);
    //output.push(c);
    sock.setNoDelay(true);
    sock.write(output.join(br), 'binary');
    console.log("write");
};
//# sourceMappingURL=Server.js.map