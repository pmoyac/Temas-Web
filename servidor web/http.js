const http = require('node:http');
const port = process.env.PORT ?? 1234;

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>Bienvenido a mi página de inicio</h1>');
    }else if (req.url === '/contacto') {
        res.statusCode = 200;
        res.end('<h1>Esta es la pagina de contacto</h1>');
    }else{
        res.statusCode = 404;
        res.end('<h1>Esta pagina no existe</h1>');
    }

    // console.log('peticion recibida', req);
    // res.end('hola mundo, este es mi primer servidor con nodejs' + req.url);
})

server.listen(port, ()=>{
    console.log(`servidor escuchando en el puerto http://localhost:${port}`);
})