const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');

const connection = require('../database/database');

const modelCliente = connection.define(
    'tbl_cientes',
    {
        id_cliente:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nome_cliente:{
            type: Sequelize.STRING(60),
            allowNull: false
        },
        cpf:{
            type: Sequelize.STRING(11),
            allowNull: false
        },
        sexo:{
            type: Sequelize.INTEGER(1),
            allowNull: false
        },
        telefone:{
            type: Sequelize.STRING(11),
            allowNull: false
        },
        email:{
            type: Sequelize.STRING(45),
            allowNull: false
        },
        endereco:{
            type: Sequelize.STRING(60),
            allowNull: false
        },
    }
)

//modelCategoria.sync({force:true});

module.exports = modelCliente;