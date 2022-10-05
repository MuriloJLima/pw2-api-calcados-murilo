// importa o pacote do express
const express = require('express')

//importa as rotas
const routes = require('./route/routes');

//torna o express executável dentro do script através da constante declarada
const app  = express()

//torna as rotas executáveis
app.use('/', routes);

//declaração da porta
app.listen(3000, ()=>{

    console.log('SERVIDO RODANDO EM - http://localhost:3000')
} )