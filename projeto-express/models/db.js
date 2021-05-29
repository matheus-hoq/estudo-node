const Sequelize = require('sequelize')

// Conexão com o banco de dados MySql

const sequelize = new Sequelize('estudonode', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}