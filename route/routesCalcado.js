// importa o pacote do express
const express = require('express')

// importa a tabela de cliente
const modelCalcados = require('../model/modelCalcados');

//gerenciador de rotas para express
const router = express.Router();

//rotas de crud de categoria

router.post('/cadastrarCalcados', (req, res)=>{

    res.send('ROTA DE CADASTRO DE CALÇADOS!')
})

router.get('/listarCalcados', (req, res)=>{
    res.send('ROTA DE LISTAGEM DE CALÇADOS!')
})

router.put('/alterarCalcados', (req, res)=>{
    res.send('ROTA DE ALTERAR CALÇADOS!')
})

router.delete('/excluirCalcados', (req, res)=>{
    res.send('ROTA DE EXCLUIR CALÇADOS!')
})

//torna as rotas utilizáveis em outro arquivo
module.exports = router;