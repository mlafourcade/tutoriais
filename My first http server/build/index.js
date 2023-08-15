"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.sendFile("index.html");
});
const server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
//# sourceMappingURL=index.js.map