// importa o pacote do express
const express = require('express');
const modelClientes = require('../model/modelClientes');

// importa a tabela de cliente
const modelC = require('../model/modelClientes');

//gerenciador de rotas para express
const router = express.Router();

//rotas de crud de categoria

router.post('/cadastrarClientes', (req, res)=>{
    console.log(req.body);
    let {nome_cliente, cpf_cliente, tel_cliente, email_cliente} = req.body;
    modelClientes.create(
        {nome_cliente, cpf_cliente, tel_cliente, email_cliente}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE CADASTRADO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR CLIENTE.",
                errorObject:error
            });
        }
    );
})

router.get('/listarClientes', (req, res)=>{
    modelClientes.findAll()
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"CLIENTES LISTADOS COM SUCESSO.",
                    data:response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR CLIENTES.",
                    errorObject:error
                });
            }
        );
})

router.get('/listarClientePK/id_cliente:', (req, res)=>{

    let {id_cliente} = req.params;

    //AÇÃO DE SELEÇÃO DE DADOS DO SEQUELIZE
    modelClientes.findByPk(id_cliente)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE RECUPERADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR O CLIENTE.",
                errorObject:error
            });
        }
    )

});

router.get('/listarClienteNOME/:nome_cliente', (req, res)=>{

    let {nome_cliente} = req.params;

    modelClientes.findOne({attributes:['id_cliente', 'nome_cliente', 'cpf_cliente', 'tel_cliente', 'email_cliente'],where:{nome_cliente}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE RECUPERADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR O CLIENTE.",
                errorObject:error
            });
        }
    )
});

router.put('/alterarClientes', (req, res)=>{
    const {id_cliente, nome_cliente} = req.body;

    modelClientes.update(
        {nome_cliente},
        {where:{id_cliente}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE ALTERADO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR O CLIENTE.",
                errorObject:error
            });
        }
    );
})

router.delete('/excluirClientes/:id_cliente', (req, res)=>{
    console.log(req.params);
    let {id_cliente} = req.params

    modelCalcados.destroy(
        {where:{id_cliente}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE EXCLUÍDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO EXCLUIR O CLIENTE.",
                errorObject:error
            });
        }
    );
})

//torna as rotas utilizáveis em outro arquivo
module.exports = router;