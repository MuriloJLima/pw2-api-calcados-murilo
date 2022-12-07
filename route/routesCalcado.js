// importa o pacote do express
const express = require('express')

// importa a tabela de cliente
const modelCalcados = require('../model/modelCalcados');

//gerenciador de rotas para express
const router = express.Router();

//rotas de crud de categoria

router.post('/cadastrarCalcados', (req, res)=>{
    console.log(req.body);
    let {nome_calcado} = req.body;
    modelCalcados.create(
        {nome_calcado}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"CALÇADO CADASTRADO COM SUCESSO!."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR O CALÇADO.",
                errorObject:error
            });
        }
    );
    
})

router.get('/listarCalcados', (req, res)=>{
    modelCalcados.findAll()
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"CATEGORIAS LISTADAS COM SUCESSO.",
                    data:response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR AS CATEGORIAS.",
                    errorObject:error
                });
            }
        );
})

router.get('/listarCalcadoPK/id_calcado:', (req, res)=>{

    let {id_calcado} = req.params;

    //AÇÃO DE SELEÇÃO DE DADOS DO SEQUELIZE
    modelCalcados.findByPk(id_calcado)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CALÇADO RECUPERADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR O CALÇADO.",
                errorObject:error
            });
        }
    )

});

router.get('/listarCalcadoNOME/:nome_calcado', (req, res)=>{

    let {nome_calcado} = req.params;

    modelCalcados.findOne({attributes:['id_calcado', 'nome_calcado'],where:{nome_calcado}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CALCADO RECUPERADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR O CALCADO.",
                errorObject:error
            });
        }
    )
});

router.put('/alterarCalcados', (req, res)=>{
    const {id_calcado, nome_calcado} = req.body;

    modelCalcados.update(
        {nome_calcado},
        {where:{id_calcado}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CALÇADO ALTERADO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR O CALCADO.",
                errorObject:error
            });
        }
    );
})

router.delete('/excluirCalcados/:id_calcado', (req, res)=>{
    console.log(req.params);
    let {id_calcado} = req.params

    modelCalcados.destroy(
        {where:{id_calcado}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CALÇADO EXCLUÍDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO EXCLUIR O CALÇADONP.",
                errorObject:error
            });
        }
    );
})

//torna as rotas utilizáveis em outro arquivo
module.exports = router;