// importa o pacote do express
const express = require('express')

//importa as rotas
const routesCliente = require('./route/routesCliente');
const routesCalcados = require('./route/routesCalcado');

//torna o express executável dentro do script através da constante declarada
const app  = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}));

//torna as rotas executáveis
app.use('/', routesCalcados);
app.use('/', routesCliente);

//declaração da porta
app.listen(3000, ()=>{

    console.log('SERVIDOR RODANDO EM - http://localhost:3000')
} )