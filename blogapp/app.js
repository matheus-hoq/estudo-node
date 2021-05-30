//carregando módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require("body-parser")
const app = express()
const admin = require("./routes/admin")
const path = require("path")
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
    //Public
        app.use(express.static(path.join(__dirname,"public")))
//rotas
    app.get('/', (req,res) => {
        res.send('Rota principal')
    })

    app.get('/posts', (req,res) => {
        res.send('Lista Posts')
    })

    app.use('/admin', admin)
//outros
const PORT = 8081
app.listen(PORT,() => {
    console.log("Servidor rodando! ")
})