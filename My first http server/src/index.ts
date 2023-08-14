const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req: any, res: any)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Essa e minha Pagina');
});

server.listen(port, hostname, () => {
    console.log("Servidor Rodando from ts com live reload!");
});