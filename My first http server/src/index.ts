import {Request, Response} from 'express';
const express = require('express');
const app = express();

app.get('/', function (req:Request, res:Response) {
   res.send('Hello World');
})

const server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});