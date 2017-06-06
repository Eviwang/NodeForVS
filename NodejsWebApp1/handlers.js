"use strict";
let handlers = {};
handlers.index = {};
handlers.index.index = function (req, res, args) {
    res.setHeader("Set-Cookie", ["a=1", "b=2"]);
    res.write("index");
};
module.exports = handlers;
//# sourceMappingURL=handlers.js.map