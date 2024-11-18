var http = require("http");
var rqListener = function (req, res) {
    console.log(req.url, req.headers, req.method);
};
var server = http.createServer(rqListener);
server.listen(3000);
