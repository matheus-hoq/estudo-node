//carregando módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require("body-parser")
const app = express()
//const mongoose = require("mongoose")

//configuraçôes
    //body parser
        app.use(bodyParser.urlencoded({extended: true }))
        app.use(bodyParser.json())
    //handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars');
    //mongoose
        //em breve
//rotas

//outros
const PORT = 8081
app.listen(PORT,() => {
    console.log("Servidor rodando! ")
})