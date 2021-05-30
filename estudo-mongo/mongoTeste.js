const mongoose = require("mongoose")

//Configurando o mongoose

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/testemongo", {
    useMongoClient: true
}).then(() => {
    console.log("MongoDB Conectado...")
}).catch((err) => {
    console.log("Houve um erro ao se conectar com o MongoDB")
})

// Model - Usuários
//Definindo o model
const UsuarioSchema = mongoose.Schema({

nome:{
    type: String,
    require: true
},
sobrenome: {
    type: String,
    require: true
},
email: {
    type: String,
    require: true
},
idade: {
    type: Number,
    require: true
},
país: {
    type: String
}
})

// Collection

mongoose.model('usuarios', UsuarioSchema )

const Math = mongoose.model('usuarios')

new Math({
    nome: "John",
    sobrenome: "Doe",
    idade: 34,
    email: "email123@email.com",
    país: "Brasil"
}).save().then(() => {
    console.log("Usuário cadastrado com sucesso!")
}).catch((err) => {
    console.log("Houve um erro ao registrar o usuário" +err)
})

// new UsuarioSchema({
//     nome:  "Math",
//     sobrenome: "hoq",
//     email: "email@email.com",
//     idade: 20,
//     país: "Brasil"
// }).save().then(() => {
//     console.log("Usuário criado com sucesso!")
// }).catch((err) => {
//     console.log("Houve um erro ao registrar o usuário: "+err)
// })

