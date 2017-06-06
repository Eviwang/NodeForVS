import * as http from "http";
import route from "./route";


http.createServer(route).listen(5000);