import * as http from "http";
import * as url from "url";

import * as handlers from "./handlers";

export default function (req: http.IncomingMessage, res: http.ServerResponse) {
    let parseUrl = url.parse(req.url,true);    
    let paths = parseUrl.pathname.split("/");    
    let controler = paths[1];
    let action = paths[2];

    let args = parseUrl.query;

    console.log(paths, controler, action, args, handlers,112);
    if (handlers[controler] && handlers[controler][action]) {
        handlers[controler][action].apply(null,[req, res,args]);
    } else {
        res.write("not found");
    }

    res.end();
}