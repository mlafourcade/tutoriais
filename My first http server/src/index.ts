import {Request, Response} from 'express';
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req:Request, res:Response) {
   res.sendFile("index.html");
})

const server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});

