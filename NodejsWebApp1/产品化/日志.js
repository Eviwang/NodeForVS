"use strict";
const connect = require("connect");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
let app = connect();
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan("combined", { stream: accessLogStream }));
app.use(function (req, res, next) {
    res.write("test");
    res.end();
});
app.listen(5000);
//# sourceMappingURL=日志.js.map