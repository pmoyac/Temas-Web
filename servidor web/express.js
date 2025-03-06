const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(express.static('./public'));

app.get('/algo', (req, res) => {
    res.send('Hola mundo desde el get, este es mi primer servidor con nodejs y express');
})

app.post('/algo', (req, res) => {
    console.log(req.body);
    res.send('Hola mundo desde el post, este es mi primer servidor con nodejs y express');
})

app.delete('/algo', (req, res) => {
    res.send('Hola mundo desde el delete, este es mi primer servidor con nodejs y express');
})

app.all('*', (req, res, next) => {
    res.send('No se pudo acceder al recurso solicitado')
})

app.put('/algo', (req, res) => {
    res.send('Hola mundo desde el put, este es mi primer servidor con nodejs y express');
})

app.listen(1235, ()=>{
    console.log('Servidor escuchando en el puerto 1235');
});