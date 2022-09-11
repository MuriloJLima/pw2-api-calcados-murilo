// importa o pacote do express
const express = require('express')

//gerenciador de rotas para express
const router = express.Router();

//rotas de crud de categoria

router.post('/cadastrarCategoria', (req, res)=>{

    res.send('ROTA DE CADASTRO DE CATEGORIA!')
})

router.get('/listarCategoria', (req, res)=>{
    res.send('ROTA DE LISTAR DE CATEGORIA!')
})

router.put('/alterarCategoria', (req, res)=>{
    res.send('ROTA DE ALTERAR DE CATEGORIA!')
})

router.delete('/excluirCategora', (req, res)=>{
    res.send('ROTA DE EXCLUIR DE CATEGORIA!')
})

//torna as rotas utilizáveis em outro arquivo
module.exports = router;