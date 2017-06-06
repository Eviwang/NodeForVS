import * as http from "http";

let handlers = <any>{};
handlers.index = {};
handlers.index.index = function (req: http.IncomingMessage, res: http.ServerResponse, args: any) {    
    res.setHeader("Set-Cookie", ["a=1", "b=2"]);
    res.write("index");
}

module.exports = handlers;