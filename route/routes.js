// importa o pacote do express
const express = require('express')

//gerenciador de rotas para express
const router = express.Router();

//rotas de crud de categoria

router.post('/cadastrarCalcado', (req, res)=>{

    res.send('ROTA DE CADASTRO DE CATEGORIA!')
})

router.get('/listarCalcado', (req, res)=>{
    res.send('ROTA DE LISTAR DE CATEGORIA!')
})

router.put('/alterarCalcado', (req, res)=>{
    res.send('ROTA DE ALTERAR DE CATEGORIA!')
})

router.delete('/excluirCalcado', (req, res)=>{
    res.send('ROTA DE EXCLUIR DE CATEGORIA!')
})

//torna as rotas utilizáveis em outro arquivo
module.exports = router;