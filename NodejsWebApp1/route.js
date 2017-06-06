"use strict";
const url = require("url");
const handlers = require("./handlers");
function default_1(req, res) {
    let parseUrl = url.parse(req.url, true);
    let paths = parseUrl.pathname.split("/");
    let controler = paths[1];
    let action = paths[2];
    let args = parseUrl.query;
    console.log(paths, controler, action, args, handlers, 112);
    if (handlers[controler] && handlers[controler][action]) {
        handlers[controler][action].apply(null, [req, res, args]);
    }
    else {
        res.write("not found");
    }
    res.end();
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=route.js.map