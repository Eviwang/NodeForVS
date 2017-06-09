import * as connect from "connect";
import * as morgan from "morgan";
import * as path from "path";
import * as fs from "fs";

let app = connect();


var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(morgan("combined", { stream: accessLogStream }));

app.use(function (req, res, next) {
    res.write("test");
    res.end();
});

app.listen(5000);
