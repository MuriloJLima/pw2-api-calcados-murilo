// importa o pacote do express
const express = require('express')

//importa as rotas
const routesCategoria = require('./route/routesCategorias');

//torna o express executável dentro do script através da constante declarada
const app  = express()

console.log('TESTE GITHUB')

//torna as rotas executáveis
app.use('/', routesCategoria);

//declaração da porta
app.listen(3000, ()=>{

    console.log('SERVIDO RODANDO EM - http://localhost:3000')
} )