import * as http from "http";
import * as url from "url";

http.createServer(function (req, res) {


    
    
    res.end();    
}).listen(5000);


function queryString(req, res, next) {
    let query = url.parse(req.url, true).query;
    req.rawQuery = query;
    next();
}


function match(pathname) {

    //match
    
}