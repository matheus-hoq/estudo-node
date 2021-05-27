const Sequelize = require('sequelize');
const sequelize = new Sequelize('estudonode', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})

//sequelize.authenticate().then(function(){
//    console.log("Conectado com sucesso!")
//}).catch(function(erro){
//    console.log("Falha ao se conectar: "+erro)
//})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//Postagem.create({
//    titulo: "Um titulo qualquer",
//    conteudo: "KKMKMHNKMGHNFKMNKKMN"
//})

//Postagem.sync({force: true})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Math",
    sobrenome: "Querido" ,
    idade: 20,
    email: "teste@nsei.com"
})

//Usuario.sync({force: true})

