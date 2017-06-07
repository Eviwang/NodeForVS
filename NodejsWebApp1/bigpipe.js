"use strict";
const http = require("http");
http.createServer(function (req, res) {
    let cache = {};
    /*
        1.file system read template
        2.compile main template
        3.write 输出主要 html
        4.get data write 获取数据输出部分，比如文章
        5.get data write 获取数据输出部分，比如评论

        当数据获取完成，res.end();//结束
    */
    let i = 0, timer = null;
    res.writeHead(200, { "Content-Type": "text/html" });
    timer = setInterval(() => {
        i++;
        res.write("test    " + i);
        if (i >= 5) {
            clearInterval(timer);
            res.end();
        }
    }, 10);
}).listen(5000);
//# sourceMappingURL=bigpipe.js.map