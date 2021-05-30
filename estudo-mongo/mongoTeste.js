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