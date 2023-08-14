"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Essa e minha Pagina');
});
server.listen(port, hostname, () => {
    console.log("Servidor Rodando from ts watch!");
});
//# sourceMappingURL=index.js.map